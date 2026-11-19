/* Calibrated, transparent reconstruction overlay for the two author-supplied SpatialVID scenes. */
(() => {
  'use strict';

  function geometryFor(E, source) {
    const geometry = new E.Geometry();
    const attribute = (values, size) => new E.Attribute(
      values instanceof Float32Array ? values : new Float32Array(values), size
    );
    geometry.setAttribute('position', attribute(source.positions, 3));
    if (source.normals) geometry.setAttribute('normal', attribute(source.normals, 3));
    if (source.material_uv) geometry.setAttribute('uv', attribute(source.material_uv, 2));

    const count = source.groups.reduce((length, group) => length + group.indices.length, 0);
    const indices = source.positions.length / 3 > 65535 ? new Uint32Array(count) : new Uint16Array(count);
    let offset = 0;
    for (const group of source.groups) {
      indices.set(group.indices, offset);
      geometry.addGroup(offset, group.indices.length, group.material);
      offset += group.indices.length;
    }
    geometry.setIndex(new E.Attribute(indices, 1));
    if (!source.normals) geometry.computeVertexNormals();
    geometry.computeBoundingBox();
    geometry.computeBoundingSphere();
    return geometry;
  }

  function localPose(E, pose) {
    return {
      position: new E.Vec3(...pose.position),
      quaternion: new E.Quaternion(...pose.quaternion),
      scale: new E.Vec3(...pose.scale)
    };
  }

  function setCamera(camera, record, width, height) {
    const c = record.c2w;
    // OpenCV camera axes are right/down/forward; the reconstruction is already in world Z-up.
    camera.matrix.set(
      c[0], -c[1], -c[2], c[3],
      c[4], -c[5], -c[6], c[7],
      c[8], -c[9], -c[10], c[11],
      0, 0, 0, 1
    );
    camera.matrixWorldNeedsUpdate = true;
    camera.updateMatrixWorld(true);
    const k = record.K;
    const near = camera.near;
    const far = camera.far;
    camera.projectionMatrix.set(
      2 * k[0] / width, -2 * k[1] / width, 1 - 2 * k[2] / width, 0,
      -2 * k[3] / height, 2 * k[4] / height, 2 * k[5] / height - 1, 0,
      0, 0, -(far + near) / (far - near), -2 * far * near / (far - near),
      0, 0, -1, 0
    );
    camera.projectionMatrixInverse.copy(camera.projectionMatrix).invert();
  }

  function makeSurfaceMaterials(E, source) {
    return source.map(spec => {
      const material = E.makeMaterial({
        color: new E.Color(...spec.color),
        roughness: spec.roughness,
        metalness: spec.metalness,
        emissive: new E.Color(...(spec.emissive || [0, 0, 0])),
        emissiveIntensity: spec.emissive_intensity || 0,
        side: E.DoubleSide
      }, spec.physical);
      material.name = spec.name || '';
      return material;
    });
  }

  function makeReprojection(E, before, near, far, sourceAllowed) {
    return new E.ShaderMaterial({
      uniforms: {recordedClip: {value: new E.Matrix()}, recordedDepth: {value: before.depthTexture}, sourceAllowed: {value: sourceAllowed}},
      vertexShader: [
        'uniform mat4 recordedClip;',
        'varying vec4 originalPosition;',
        'void main() {',
        '  originalPosition = recordedClip * vec4(position,1.0);',
        '  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);',
        '}'
      ].join('\n'),
      fragmentShader: [
        'uniform sampler2D recordedDepth;',
        'uniform bool sourceAllowed;',
        'varying vec4 originalPosition;',
        'void main() {',
        '  vec2 uv = originalPosition.xy / originalPosition.w * 0.5 + 0.5;',
        '  vec2 dx = dFdx(uv), dy = dFdy(uv);',
        '  bool sameSide = dx.x * dy.y > dx.y * dy.x;',
        '  float depth = texture2D(recordedDepth,uv).r;',
        '  float eyeDepth = ' + (near * far) + ' / (' + far.toFixed(4) + ' - depth * ' + (far - near) + ');',
        '  bool inFrame = originalPosition.w > 0.0 && all(greaterThan(uv,vec2(0.0))) && all(lessThan(uv,vec2(1.0)));',
        '  bool visible = abs(eyeDepth-originalPosition.w) < max(0.006,originalPosition.w*0.004);',
        '  gl_FragColor = vec4(uv, (sourceAllowed && sameSide && inFrame && visible) ? 1.0 : 0.0, 1.0);',
        '}'
      ].join('\n'),
      side: E.DoubleSide,
      toneMapped: false
    });
  }

  function makeComposite(E, before, after, shaded, filmTexture, camera) {
    const material = new E.ShaderMaterial({
      uniforms: {
        beforeMask: {value: before.texture},
        beforeDepth: {value: before.depthTexture},
        maskTexel: {value: new E.Vec2(1, 1)},
        nearClip: {value: camera.near},
        farClip: {value: camera.far},
        afterMask: {value: after.texture},
        roomColor: {value: shaded.texture},
        film: {value: filmTexture},
        reproject: {value: false}
      },
      vertexShader: [
        'varying vec2 sampleUV;',
        'void main() { sampleUV = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }'
      ].join('\n'),
      fragmentShader: [
        'varying vec2 sampleUV;',
        'uniform sampler2D beforeMask, beforeDepth, afterMask, roomColor, film;',
        'uniform vec2 maskTexel;',
        'uniform float nearClip, farClip;',
        'uniform bool reproject;',
        'float eyeDepth(vec2 uv) {',
        '  float depth = texture2D(beforeDepth,uv).r;',
        '  return nearClip * farClip / (farClip - depth * (farClip - nearClip));',
        '}',
        'void main() {',
        '  vec4 edited = texture2D(afterMask,sampleUV);',
        '  float oldMask = texture2D(beforeMask,sampleUV).r;',
        '  float centerDepth = eyeDepth(sampleUV);',
        '  if (oldMask < 0.5) {',
        '    for (int y = -2; y <= 2; y++) {',
        '      for (int x = -2; x <= 2; x++) {',
        '        vec2 uv = sampleUV + vec2(float(x),float(y)) * maskTexel;',
        '        float neighbor = texture2D(beforeMask,uv).r;',
        '        if (neighbor > 0.5 && eyeDepth(uv) <= centerDepth + 0.006) oldMask = 1.0;',
        '      }',
        '    }',
        '  }',
        '  float alpha = max(oldMask, reproject ? edited.a : edited.r);',
        '  vec3 color = texture2D(roomColor,sampleUV).rgb;',
        '  gl_FragColor = vec4(color, alpha);',
        '  #include <tonemapping_fragment>',
        '  #include <colorspace_fragment>',
        '  if (reproject && edited.b > 0.5) gl_FragColor.rgb = texture2D(film,vec2(0.5+0.5*edited.x,edited.y)).rgb;',
        '  gl_FragColor.rgb *= alpha;',
        '}'
      ].join('\n'),
      depthTest: false,
      depthWrite: false
    });
    const quad = new E.Mesh(new E.Plane(2, 2), material);
    quad.frustumCulled = false;
    const scene = new E.Scene();
    scene.add(quad);
    return {scene, quad, camera: new E.OrthoCamera(-1, 1, 1, -1, 0, 1)};
  }

  window.roomhubSpatialGPU = async (canvas, data, track, options = {}) => {
    const E = window.RoomhubSpatialEngine;
    if (!E) throw new Error('3D 渲染组件未加载。');
    const attributes = {alpha: true, antialias: false, premultipliedAlpha: true, powerPreference: 'low-power'};
    const gl = canvas.getContext('webgl2', attributes);
    if (!gl) throw new Error('当前浏览器未启用 WebGL 2。');
    const renderer = new E.Renderer({canvas, context: gl, ...attributes});
    renderer.toneMapping = E.ToneMapping;
    renderer.setClearColor(0, 0);
    const scene = new E.Scene();
    const camera = new E.Camera(50, 16 / 9, 0.02, 120);
    camera.matrixAutoUpdate = false;
    const placements = new Map(data.objects.map(object => [object.instance_id, new E.Group()]));
    for (const object of data.objects) {
      (placements.get(object.support_id) || scene).add(placements.get(object.instance_id));
    }
    const joints = data.joints.map(spec => {
      const group = new E.Group();
      placements.get(spec.owner).add(group);
      return {
        id: spec.id, group, closed: localPose(E, spec.closed), open: localPose(E, spec.open),
        bounds: new E.Box(), center: new E.Vec3(), value: NaN
      };
    });
    const jointMap = new Map(joints.map(joint => [joint.id, joint]));
    const materials = makeSurfaceMaterials(E, data.materials);
    const surfaces = data.meshes.map(source => {
      const geometry = geometryFor(E, source);
      const mesh = new E.Mesh(geometry, materials);
      mesh.name = source.name;
      mesh.matrixAutoUpdate = false;
      mesh.matrix.fromArray(source.matrix);
      mesh.userData = {owner: source.owner, joint: source.joint, surface: source.surface, reproject: source.reproject !== false};
      const joint = jointMap.get(source.joint);
      (joint?.group || placements.get(source.owner) || scene).add(mesh);
      if (joint) joint.bounds.union(geometry.boundingBox.clone().applyMatrix4(mesh.matrix));
      return mesh;
    });
    for (const joint of joints) {
      const {bounds, center} = joint;
      bounds.getCenter(center);
      joint.candidates = [center];
      for (const [axis, side] of [['y','min'],['y','max'],['x','min'],['x','max'],['z','max']]) {
        const candidate = center.clone();
        candidate[axis] = bounds[side][axis];
        joint.candidates.push(candidate);
      }
      joint.lastCandidate = 0;
      joint.anchorRevision = -1;
    }

    const black = new E.BasicMaterial({color: 0, side: E.DoubleSide, toneMapped: false});
    const white = new E.BasicMaterial({color: 0xffffff, side: E.DoubleSide, toneMapped: false});
    const maskOptions = {minFilter: E.NearestFilter, magFilter: E.NearestFilter};
    const before = new E.RenderTarget(1, 1, maskOptions);
    before.depthTexture = new E.DepthTexture(1, 1);
    const halfFloat = !!gl.getExtension('EXT_color_buffer_float');
    const film = halfFloat && options.reference?.element;
    let filmTexture = null;
    let uploadedFrame = -1;
    if (film) {
      filmTexture = new E.Texture(film);
      filmTexture.generateMipmaps = false;
      filmTexture.minFilter = filmTexture.magFilter = E.LinearFilter;
      // The media/player drives frame selection, including paused scrubbing.
    }
    const after = new E.RenderTarget(1, 1, film ? {...maskOptions, type: E.HalfFloat} : maskOptions);
    const shaded = new E.RenderTarget(1, 1, halfFloat ? {type: E.HalfFloat} : {});
    shaded.texture.colorSpace = E.LinearSRGBColorSpace;
    const composite = makeComposite(E, before, after, shaded, filmTexture, camera);
    const zero = new E.ShaderMaterial({
      vertexShader: 'void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
      fragmentShader: 'void main(){gl_FragColor=vec4(0.0);}',
      side: E.DoubleSide, toneMapped: false
    });
    const warpMaterials = new Map();
    const cameraClip = new E.Matrix();
    const cast = new E.Raycaster();
    const pointer = new E.Vec2();
    const projected = new E.Vec3();
    let frameIndex = -1;
    let poseRevision = 0;
    let lighting;
    let shadedMaterials;
    let visibleOverlay = false;
    let disposed = false;
    const extraTextures = new Set();
    const preparedMaterials = new Set();

    const yieldTask = () => new Promise(resolve => setTimeout(resolve, 0));
    function checkPreparation() {
      if (disposed || options.signal?.aborted) throw new DOMException('Scene preparation cancelled.', 'AbortError');
      if (gl.isContextLost()) throw new Error('WebGL context lost during scene preparation.');
    }

    // Prepare environment maps, procedural textures and UVs while the scene is loading,
    // before controls are enabled. None of this work belongs on the first-click path.
    async function prepareShading() {
      if (shadedMaterials) return;
      checkPreparation();
      lighting = E.makeLighting({renderer, scene, data, placements, joints: jointMap, pickables: surfaces, materials});
      surfaces.forEach(mesh => mesh.material.forEach(material => preparedMaterials.add(material)));
      await yieldTask();
      checkPreparation();
      const tiles = new Map();
      let sliceStart = performance.now();
      for (const mesh of surfaces) {
        const slots = mesh.material.slice();
        let hasRecipe = false;
        for (const index of new Set(mesh.geometry.groups.map(group => group.materialIndex))) {
          const recipe = data.materials[index]?.procedural;
          if (!recipe) continue;
          const key = JSON.stringify(recipe);
          if (!tiles.has(key)) {
            const tile = E.makeTile(recipe, 128);
            const maps = E.makeMaps(tile);
            Object.values(maps).forEach(map => extraTextures.add(map));
            tiles.set(key, {tile, maps});
          }
          const entry = tiles.get(key);
          slots[index] = E.applyTile(slots[index], entry.tile, entry.maps);
          preparedMaterials.add(slots[index]);
          hasRecipe = true;
        }
        if (hasRecipe) {
          if (!mesh.geometry.attributes.uv) {
            const old = mesh.geometry;
            mesh.geometry = E.withUV(mesh);
            old.dispose();
          }
          mesh.material = slots;
        }
        if (film && mesh.userData.joint) {
          warpMaterials.set(mesh, makeReprojection(E, before, camera.near, camera.far, mesh.userData.reproject));
        }
        if (performance.now() - sliceStart > 8) {
          await yieldTask();
          checkPreparation();
          sliceStart = performance.now();
        }
      }
      shadedMaterials = surfaces.map(mesh => mesh.material);
    }

    function pose(values) {
      joints.forEach((joint, index) => {
        const value = Math.max(0, Math.min(1, values[index] || 0));
        if (joint.value === value) return;
        joint.value = value;
        poseRevision++;
        joint.group.position.lerpVectors(joint.closed.position, joint.open.position, value);
        joint.group.quaternion.slerpQuaternions(joint.closed.quaternion, joint.open.quaternion, value);
        joint.group.scale.lerpVectors(joint.closed.scale, joint.open.scale, value);
      });
      scene.updateMatrixWorld(true);
    }

    function resize() {
      const w = canvas.clientWidth || canvas.parentElement?.clientWidth || track.width;
      const h = canvas.clientHeight || canvas.parentElement?.clientHeight || w * track.height / track.width;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5, track.width / w, track.height / h);
      const width = Math.max(1, Math.round(w * ratio));
      const height = Math.max(1, Math.round(h * ratio));
      if (width === canvas.width && height === canvas.height && width === before.width && height === before.height) return;
      renderer.setSize(width, height, false);
      for (const target of [before, after, shaded]) target.setSize(width, height);
      composite.quad.material.uniforms.maskTexel.value.set(1 / width, 1 / height);
    }

    function frame(index, values) {
      if (disposed || !track.frames[index]) return;
      resize();
      if (frameIndex !== index) {
        setCamera(camera, track.frames[index], track.width, track.height);
        frameIndex = index;
        poseRevision++;
      }
      const recorded = track.defaultTrack[index];
      values = values || recorded;
      const changed = new Set();
      joints.forEach((joint, i) => {
        if (Math.abs(values[i] - recorded[i]) > 0.0001) changed.add(joint.id);
      });
      if (!changed.size) {
        pose(values);
        if (visibleOverlay) {
          renderer.setRenderTarget(null);
          renderer.setClearColor(0, 0);
          renderer.clear();
          visibleOverlay = false;
        }
        return;
      }

      pose(recorded);
      // Both silhouettes are depth-tested against the entire room. Areas behind a foreground
      // object stay untouched. Vacated pixels and newly covered pixels both receive edited color.
      const reproject = !!film && (film.readyState == null || film.readyState >= 2) && (film.videoWidth || film.width) > 0 && !film.seeking;
      composite.quad.material.uniforms.reproject.value = reproject;
      if (reproject) {
        cameraClip.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
        if (uploadedFrame !== index) {
          filmTexture.needsUpdate = true;
          uploadedFrame = index;
        }
      }
      for (const mesh of surfaces) {
        const moved = changed.has(mesh.userData.joint);
        mesh.material = moved ? white : black;
        if (moved && reproject) {
          warpMaterials.get(mesh).uniforms.recordedClip.value.multiplyMatrices(cameraClip, mesh.matrixWorld);
        }
      }
      // Cover the antialiased edge left in the recorded film. The compositor
      // rejects dilation across nearer foreground surfaces using this depth buffer.
      renderer.setClearColor(0, 0);
      renderer.setRenderTarget(before);
      renderer.render(scene, camera);
      pose(values);
      if (reproject) {
        for (const mesh of surfaces) mesh.material = changed.has(mesh.userData.joint) ? warpMaterials.get(mesh) : zero;
      }
      renderer.setRenderTarget(after);
      renderer.render(scene, camera);
      surfaces.forEach((mesh, i) => { mesh.material = shadedMaterials[i]; });
      renderer.setRenderTarget(shaded);
      renderer.setClearColor(0xdbe3e7, 1);
      renderer.render(scene, camera);
      renderer.setRenderTarget(null);
      renderer.setClearColor(0, 0);
      renderer.render(composite.scene, composite.camera);
      visibleOverlay = true;
    }

    async function prepareInteraction() {
      checkPreparation();
      resize();
      setCamera(camera, track.frames[0], track.width, track.height);
      pose(track.defaultTrack[0]);
      await prepareShading();
      // Compile every material variant, including off-screen doors and added interiors.
      // compile() visits the full scene, unlike a render restricted by the current frustum.
      const passes = [
        [shaded, () => surfaces.forEach((mesh, i) => { mesh.material = shadedMaterials[i]; })],
        [before, () => surfaces.forEach(mesh => { mesh.material = mesh.userData.joint ? white : black; })],
        [after, () => surfaces.forEach(mesh => { mesh.material = film ? (warpMaterials.get(mesh) || zero) : (mesh.userData.joint ? white : black); })]
      ];
      for (const [target, setMaterials] of passes) {
        checkPreparation();
        setMaterials();
        renderer.setRenderTarget(target);
        renderer.compile(scene, camera);
        await yieldTask();
      }
      checkPreparation();
      renderer.setRenderTarget(null);
      renderer.compile(composite.scene, composite.camera);
      surfaces.forEach((mesh, i) => { mesh.material = shadedMaterials[i]; });
      await yieldTask();
      checkPreparation();

      // A hidden edited frame allocates real-size render targets, uploads geometry/textures
      // and exercises all passes. Restore the recorded pose and transparent canvas before
      // exposing the renderer; the preparation frame must never be shown to the visitor.
      const recorded = track.defaultTrack[0];
      const culling = surfaces.map(mesh => mesh.frustumCulled);
      try {
        surfaces.forEach(mesh => { mesh.frustumCulled = false; });
        frame(0, recorded.map(value => value < .5 ? value + .02 : value - .02));
        frame(0, recorded);
      } finally {
        surfaces.forEach((mesh, i) => { mesh.frustumCulled = culling[i]; });
      }
      checkPreparation();
      for (const target of [before, after, shaded]) {
        renderer.setRenderTarget(target);
        renderer.clear();
      }
      renderer.setRenderTarget(null);
      const fence = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
      if (!fence) throw new Error('Could not finish preparing the WebGL scene.');
      gl.flush();
      const started = performance.now();
      try {
        for (;;) {
          checkPreparation();
          const state = gl.clientWaitSync(fence, 0, 0);
          if (state === gl.ALREADY_SIGNALED || state === gl.CONDITION_SATISFIED) break;
          if (state === gl.WAIT_FAILED || performance.now() - started > 15000) throw new Error('WebGL scene preparation did not complete.');
          await yieldTask();
        }
      } finally {
        gl.deleteSync(fence);
      }
      // The video may have decoded a newer snapshot during preparation.
      uploadedFrame = -1;
      frameIndex = -1;
    }

    function pick(x, y) {
      if (disposed || frameIndex < 0 || x < 0 || x > 1 || y < 0 || y > 1) return null;
      pointer.set(2 * x - 1, 1 - 2 * y);
      cast.setFromCamera(pointer, camera);
      const hit = cast.intersectObjects(surfaces, false)[0];
      return hit?.object.userData.joint || null;
    }

    function anchor(id) {
      const joint = jointMap.get(id);
      if (disposed || frameIndex < 0 || !joint || joint.bounds.isEmpty()) return null;
      if (joint.anchorRevision === poseRevision) return joint.lastAnchor;
      joint.anchorRevision = poseRevision;
      joint.lastAnchor = null;
      // Reuse the last visible face first. A marker must hit its own mesh, including when a
      // second drawer or a table crosses in front of the selected part.
      for (let step = 0; step < joint.candidates.length; step++) {
        const index = (joint.lastCandidate + step) % joint.candidates.length;
        projected.copy(joint.candidates[index]).applyMatrix4(joint.group.matrixWorld).project(camera);
        if (projected.z < -1 || projected.z > 1 || Math.abs(projected.x) > 1 || Math.abs(projected.y) > 1) continue;
        const u = (projected.x + 1) / 2;
        const v = (1 - projected.y) / 2;
        if (pick(u, v) === id) {
          joint.lastCandidate = index;
          joint.lastAnchor = [u, v];
          break;
        }
      }
      return joint.lastAnchor;
    }

    function dispose() {
      if (disposed) return;
      disposed = true;
      const unique = new Set([...materials, ...preparedMaterials, ...warpMaterials.values(), black, white, zero, composite.quad.material]);
      for (const mesh of surfaces) {
        mesh.geometry.dispose();
        for (const material of Array.isArray(mesh.material) ? mesh.material : [mesh.material]) unique.add(material);
      }
      unique.forEach(material => material.dispose());
      extraTextures.forEach(texture => texture.dispose());
      filmTexture?.dispose();
      lighting?.lightmap?.dispose();
      lighting?.environmentTarget?.dispose();
      for (const target of [before, after, shaded]) target.dispose();
      composite.quad.geometry.dispose();
      renderer.dispose();
    }

    const visibility = canvas.style.visibility;
    canvas.style.visibility = 'hidden';
    try {
      await prepareInteraction();
      checkPreparation();
    } catch (error) {
      dispose();
      throw error;
    } finally {
      canvas.style.visibility = visibility;
    }
    return {name: 'WebGL 2', frame, pick, anchor, dispose};
  };
})();
