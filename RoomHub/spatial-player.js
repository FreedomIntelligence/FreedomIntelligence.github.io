(() => {
  'use strict';
  const icons = {
    play: '<path d="m8 5 11 7-11 7z" fill="currentColor" stroke="none"/>',
    pause: '<path d="M8 5v14m8-14v14" stroke-width="3.5"/>',
    back: '<path d="M8 4 3 8l5 4M3 8h10a6 6 0 0 1 0 12"/>',
    forward: '<path d="m16 4 5 4-5 4m5-4H11a6 6 0 0 0 0 12"/>',
    loop: '<path d="m16 3 4 4-4 4M4 11V9a2 2 0 0 1 2-2h14M8 21l-4-4 4-4m12 0v2a2 2 0 0 1-2 2H4"/>',
    down: '<path d="m6 9 6 6 6-6"/>',
    divide: '<path d="m8.3 8-4 4 4 4m7.4-8 4 4-4 4"/>',
    joint: '<path d="M12 5v14m-7-7h14"/>',
    minus: '<path d="M5 12h14"/>'
  };
  function icon(name) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true" focusable="false">' + icons[name] + '</svg>';
  }
  const clamp = (value, lo, hi) => Math.max(lo, Math.min(hi, value));
  const en = () => /^en/i.test(document.documentElement.lang);
  const tr = (zh, english) => en() ? english : zh;
  const urlFor = path => window.roomhubAssetURL ? window.roomhubAssetURL(path) : path;
  const stamp = t => Math.floor(t / 60) + ':' + String(Math.floor(t % 60)).padStart(2, '0');
  async function getJSON(path, signal) {
    if (window.roomhubSpatialBytes) {
      const bytes = await window.roomhubSpatialBytes(path);
      if (bytes) return JSON.parse(new TextDecoder().decode(bytes));
    }
    const response = await fetch(urlFor(path), { signal });
    if (!response.ok) throw Error('HTTP ' + response.status + ' ' + path);
    return response.json();
  }
  function canUseWebGL() {
    if (!window.roomhubSpatialGPU || !window.roomhubLoadScene) return false;
    try {
      const gl = document.createElement('canvas').getContext('webgl2');
      if (!gl) return false;
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      return true;
    } catch { return false; }
  }
  function jointName(joint) {
    if (joint.displayName) return tr(joint.displayName.zh || joint.label, joint.displayName.en || joint.displayName.zh || joint.label);
    if (joint.name_zh || joint.name_en) return tr(joint.name_zh || joint.name_en, joint.name_en || joint.name_zh);
    if (joint.owner === 'double-bin-pullout') return tr('双桶抽屉', 'Double-bin drawer');
    const leftCabinet = joint.owner === 'cabinet-left';
    const leftSide = /^c0/.test(joint.label);
    const drawer = joint.label.match(/drawer\.(\d+)$/);
    const zhSide = leftSide ? '左' : '右';
    const englishSide = leftSide ? 'left' : 'right';
    const zhPart = drawer ? zhSide + (['下','中','上'][+drawer[1]] || '') + '抽屉' : zhSide + '门';
    const englishPart = drawer ? (['bottom','middle','top'][+drawer[1]] || '') + ' ' + englishSide + ' drawer' : englishSide + ' door';
    return tr((leftCabinet ? '左柜' : '右柜') + ' · ' + zhPart, (leftCabinet ? 'Left cabinet' : 'Right cabinet') + ' · ' + englishPart);
  }
  class SpatialPlayer extends HTMLElement {
    connectedCallback() {
      if (!this.ready) this.build();
      document.addEventListener('roomhub-language', this.onLanguage);
      document.addEventListener('visibilitychange', this.onVisibility);
      if (!this.closest('[hidden]')) this.activate();
    }
    disconnectedCallback() {
      this.deactivate();
      this.controller?.abort();
      this.loading = null;
      this.renderer?.dispose?.();
      this.renderer = null;
      this.infoState = '';
      document.removeEventListener('roomhub-language', this.onLanguage);
      document.removeEventListener('visibilitychange', this.onVisibility);
    }
    build() {
      this.ready = true;
      this.scene = this.getAttribute('scene');
      this.rootPath = 'assets/' + this.scene + '/';
      this.manual = new Map();
      this.marker = null;
      this.split = clamp((parseFloat(getComputedStyle(this).getPropertyValue('--sv-start')) || 80) / 100, 0, 1);
      this.frameIndex = 0;
      this.resumePlayback = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.innerHTML = [
        '<div class="sv-stage" data-sv="stage" role="group" tabindex="0">',
        '<video data-sv="film" playsinline webkit-playsinline x5-playsinline x5-video-player-type="h5-page" muted loop preload="none" aria-hidden="true" tabindex="-1"></video>',
        '<canvas class="sv-base" data-sv="base" aria-hidden="true"></canvas>',
        '<canvas class="sv-model" data-sv="model" aria-hidden="true"></canvas>',
        '<div class="sv-markers" data-sv="markers"></div>',
        '<span class="sv-label sv-label-left" data-sv="original"></span><span class="sv-label sv-label-right" data-sv="rebuilt"></span>',
        '<div class="sv-divider" data-sv="divider" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(this.split * 100) + '"><span class="sv-knob">' + icon('divide') + '</span></div></div>',
        '<div class="sv-transport"><div class="sv-buttons">',
        '<button class="sv-play" data-sv="play" type="button"></button>',
        '<button class="sv-step" data-sv="back" type="button">' + icon('back') + '<span>1s</span></button>',
        '<button class="sv-step" data-sv="next" type="button">' + icon('forward') + '<span>1s</span></button></div>',
        '<div class="sv-clock"><span data-sv="elapsed">0:00</span><span class="sv-slash">/</span><span data-sv="length">0:00</span></div>',
        '<input class="sv-seek" data-sv="seek" type="range" min="0" max="0" step="0.01" value="0">',
        '<button class="sv-loop" data-sv="loop" type="button" aria-pressed="true">' + icon('loop') + '</button>',
        '<div class="sv-rate"><select data-sv="rate"><option value="0.5">0.5×</option><option value="1" selected>1×</option><option value="1.5">1.5×</option><option value="2">2×</option></select>' + icon('down') + '</div></div>',
        '<div class="sv-object-controls" data-sv="controls" hidden><select data-sv="joints"></select>',
        '<button type="button" class="sv-change" data-sv="change"></button>',
        '<button type="button" class="sv-reset" data-sv="reset" hidden></button>',
        '<span class="sv-selection-status" data-sv="selectionStatus" hidden></span>',
        '</div>',
        '<div class="sv-error" data-sv="error" role="status" hidden><span data-sv="problem"></span> <button type="button" data-sv="retry"></button></div>',
        '<span class="sv-status" data-sv="announce" role="status"></span>'
      ].join('');
      this.ui = Object.fromEntries([...this.querySelectorAll('[data-sv]')].map(node => [node.dataset.sv, node]));
      const u = this.ui;
      this.ctx = u.base.getContext('2d', {alpha: false});
      this.frameCanvas = document.createElement('canvas');
      this.frameCanvas.width = this.frameCanvas.height = 1;
      this.frameContext = this.frameCanvas.getContext('2d', {alpha: false});
      u.base.hidden = true;
      this.film = u.film;
      this.film.muted = true;
      this.onLanguage = () => this.localize();
      this.onVisibility = () => {
        if (document.hidden) this.film.pause();
        else this.playIfWanted();
      };
      u.play.onclick = () => this.togglePlay();
      u.back.onclick = () => this.seekBy(-1);
      u.next.onclick = () => this.seekBy(1);
      u.loop.onclick = () => {
        this.film.loop = !this.film.loop;
        u.loop.setAttribute('aria-pressed', this.film.loop);
      };
      u.rate.onchange = () => { this.film.playbackRate = +u.rate.value; };
      u.seek.oninput = () => this.seek(+u.seek.value);
      u.joints.onchange = () => { this.selectedId = u.joints.value; this.focusJoint(true); this.updateJointUI(); this.positionMarkers(true); };
      u.change.onclick = () => this.toggleJoint(this.selectedId, true);
      u.markers.addEventListener('click', event => {
        const marker = event.target.closest('[data-joint]');
        if (marker) this.toggleJoint(marker.dataset.joint);
      });
      u.reset.onclick = () => {
        this.manual.clear();
        this.renderModel();
        u.announce.textContent = tr('已恢复原片动作', 'Recorded motion restored');
      };
      u.retry.onclick = () => {
        if (this.film.error) { this.mediaFailed = false; this.film.load(); this.playIfWanted(); }
        if (!this.renderer) this.loadRenderer();
        this.localize();
      };
      u.stage.onkeydown = event => {
        if (event.target !== u.stage || !this.frameReady || this.mediaFailed) return;
        if (event.key === ' ' || event.key === 'k') this.togglePlay();
        else if (event.key === 'ArrowRight') this.seekBy(1);
        else if (event.key === 'ArrowLeft') this.seekBy(-1);
        else return;
        event.preventDefault();
      };
      this.bindDivider();
      u.stage.addEventListener('pointerdown', event => {
        this.surfacePress = null;
        if (event.button !== 0 || event.target.closest('button, .sv-divider') || !this.renderer) return;
        this.surfacePress = {id: this.pickAt(event), x: event.clientX, y: event.clientY};
      });
      u.stage.addEventListener('pointercancel', () => { this.surfacePress = null; });
      u.stage.addEventListener('click', event => {
        const press = this.surfacePress;
        this.surfacePress = null;
        if (event.target.closest('button, .sv-divider') || !this.renderer) return;
        if (press && Math.hypot(event.clientX - press.x, event.clientY - press.y) > 10) return;
        const id = press ? press.id : this.pickAt(event);
        if (id != null) this.toggleJoint(id);
      });
      u.stage.addEventListener('pointermove', event => {
        if (this.dragging != null || !this.renderer || event.pointerType === 'touch' || event.target.closest('button, .sv-divider')) return;
        const now = performance.now();
        if (now - (this.lastHover || 0) < 40) return;
        this.lastHover = now;
        u.stage.toggleAttribute('data-hittable', this.pickAt(event) != null);
      });
      u.stage.addEventListener('pointerleave', () => u.stage.removeAttribute('data-hittable'));
      this.film.addEventListener('loadstart', () => {
        this.frameReady = false;
        this.localize();
      });
      this.film.addEventListener('loadedmetadata', () => this.updateClock());
      this.film.addEventListener('loadeddata', () => { this.present(this.film.currentTime); this.playIfWanted(); });
      this.film.addEventListener('seeking', () => {
        this.ui.model.hidden = true;
        if (this.marker) this.marker.hidden = true;
      });
      this.film.addEventListener('seeked', () => this.present(this.film.currentTime));
      this.film.addEventListener('ended', () => { this.resumePlayback = false; this.updatePlayButton(); });
      this.film.addEventListener('timeupdate', () => {
        this.updateClock();
        if (this.film.paused && !this.film.seeking) this.present(this.film.currentTime);
      });
      this.film.addEventListener('play', () => {
        cancelAnimationFrame(this.animation);
        this.animation = 0;
        this.updatePlayButton();
        this.scheduleVideo();
      });
      this.film.addEventListener('pause', () => {
        this.updatePlayButton();
        this.cancelVideo();
        this.renderModel();
      });
      this.film.addEventListener('error', () => { this.mediaFailed = true; this.localize(); });
      this.localize();
    }
    bindDivider() {
      const {stage,divider} = this.ui;
      const move = event => {
        const rect = stage.getBoundingClientRect();
        if (rect.width) this.setSplit((event.clientX - rect.left) / rect.width);
      };
      divider.addEventListener('pointerdown', event => {
        if (event.button !== 0 || this.dragging != null) return;
        this.dragging = event.pointerId;
        divider.setPointerCapture(event.pointerId);
        event.preventDefault();
        move(event);
      });
      divider.addEventListener('pointermove', event => { if (event.pointerId === this.dragging) move(event); });
      divider.addEventListener('lostpointercapture', () => { this.dragging = null; });
      divider.addEventListener('keydown', event => {
        const step = event.shiftKey ? 0.1 : 0.02;
        if (event.key === 'ArrowLeft') this.setSplit(this.split - step);
        else if (event.key === 'ArrowRight') this.setSplit(this.split + step);
        else if (event.key === 'Home') this.setSplit(0);
        else if (event.key === 'End') this.setSplit(1);
        else return;
        event.preventDefault();
      });
    }
    setSplit(split) {
      this.split = clamp(split, 0, 1);
      const pct = Math.round(this.split * 100);
      const u = this.ui;
      u.stage.style.setProperty('--sv-split', (this.split * 100) + '%');
      u.stage.classList.toggle('sv-edge-left', pct < 13);
      u.stage.classList.toggle('sv-edge-right', pct > 87);
      u.divider.setAttribute('aria-valuenow', pct);
      u.divider.setAttribute('aria-valuetext', tr('实拍 ', 'Capture ') + pct + '%');
      this.drawFilm();
      this.positionMarkers(true);
    }
    activate() {
      if (!this.ready) return;
      if (this.active) return;
      this.active = true;
      if (!this.videoSource) {
        this.ui.stage.style.backgroundImage = 'url("' + urlFor(this.rootPath + 'poster.jpg') + '")';
        this.film.preload = 'auto';
        this.videoSource = roomhubVideoSource(urlFor(this.rootPath + 'comparison.mp4'));
        this.videoSource.then(src => {
          this.film.src = src;
          this.film.load();
          this.playIfWanted();
        });
      }
      if (!this.renderer && !this.loading) this.loadRenderer();
      this.present(this.film.currentTime);
      this.playIfWanted();
    }
    deactivate() {
      if (!this.active) return;
      this.active = false;
      this.film.pause();
      this.cancelVideo();
      cancelAnimationFrame(this.animation);
      this.animation = 0;
    }
    pause() { this.resumePlayback = false; this.film.pause(); }
    playIfWanted() {
      if (this.active && !document.hidden && this.resumePlayback && this.film.paused && !this.film.error)
        this.film.play().catch(() => this.updatePlayButton());
    }
    togglePlay() {
      if (!this.active) this.activate();
      this.resumePlayback = this.film.paused;
      if (this.resumePlayback) this.playIfWanted(); else this.film.pause();
    }
    seek(time) {
      if (!Number.isFinite(this.film.duration)) return;
      this.film.currentTime = clamp(time, 0, this.film.duration);
      this.updateClock();
    }
    seekBy(seconds) { this.seek(this.film.currentTime + seconds); }
    cancelVideo() {
      if (this.videoCallback == null) return;
      if (this.film.cancelVideoFrameCallback) this.film.cancelVideoFrameCallback(this.videoCallback);
      else cancelAnimationFrame(this.videoCallback);
      this.videoCallback = null;
    }
    scheduleVideo() {
      if (!this.active || this.film.paused || this.videoCallback != null) return;
      const draw = (now, metadata) => {
        this.videoCallback = null;
        if (!this.active) return;
        this.present(metadata?.mediaTime ?? this.film.currentTime);
        this.scheduleVideo();
      };
      this.videoCallback = this.film.requestVideoFrameCallback ? this.film.requestVideoFrameCallback(draw) : requestAnimationFrame(draw);
    }
    present(time) {
      if (!this.active || this.film.seeking || this.film.readyState < 2 || !this.film.videoWidth) return;
      const {videoWidth, videoHeight} = this.film;
      if (this.frameCanvas.width !== videoWidth || this.frameCanvas.height !== videoHeight) {
        this.frameCanvas.width = videoWidth;
        this.frameCanvas.height = videoHeight;
      }
      // Freeze the decoded frame once so the wipe and both renderers sample identical pixels.
      this.frameContext.drawImage(this.film, 0, 0);
      const firstFrame = !this.frameReady;
      this.frameReady = true;
      this.drawFilm();
      if (this.track && this.film.readyState >= 2) {
        this.frameIndex = clamp(Math.floor(time * this.track.fps + 0.0001), 0, this.track.frames.length - 1);
        this.renderModel();
        this.ui.model.hidden = false;
      }
      const modelReady = this.renderer && this.infoState === 'loading';
      if (modelReady) {
        this.infoState = '';
        this.ui.model.style.visibility = '';
      }
      if (firstFrame || modelReady) this.localize();
      this.updateClock();
    }
    drawFilm() {
      const v = this.frameCanvas;
      if (!this.frameReady || v.width < 2 || !this.ctx) return;
      const width = Math.floor(v.width / 2);
      const height = v.height;
      const canvas = this.ui.base;
      if (canvas.width !== width || canvas.height !== height) { canvas.width = width; canvas.height = height; }
      const x = Math.round(width * this.split);
      if (x) this.ctx.drawImage(v, 0, 0, x, height, 0, 0, x, height);
      if (x < width) this.ctx.drawImage(v, width+x, 0, width-x, height, x, 0, width-x, height);
      canvas.hidden = false;
    }
    updateClock() {
      const u = this.ui;
      const duration = Number.isFinite(this.film.duration) ? this.film.duration : 0;
      const at = this.film.currentTime || 0;
      const elapsed = stamp(at);
      const length = stamp(duration);
      if (u.elapsed.textContent !== elapsed) u.elapsed.textContent = elapsed;
      if (u.length.textContent !== length) u.length.textContent = length;
      if (+u.seek.max !== duration) u.seek.max = duration;
      u.seek.value = at;
      u.seek.style.setProperty('--sv-progress', (duration ? 100*at/duration : 0) + '%');
      u.seek.setAttribute('aria-valuetext', stamp(at) + ' / ' + stamp(duration));
    }
    async loadRenderer(cpuOnly = false) {
      this.controller?.abort();
      const controller = new AbortController();
      this.controller = controller;
      const signal = controller.signal;
      this.loading = controller;
      this.infoState = 'loading';
      this.localize();
      let renderer = null;
      let rendererType = 'cpu';
      try {
        this.track ||= await getJSON(this.rootPath + 'track.json', signal);
        if (signal.aborted) return;
        if (!this.selectedId) {
          const firstJoint = this.scene === 'sv-office' ? 'cabinet-right/c1s1.door.right' : 'island-cabinet/far-narrow-door';
          this.selectedId = this.track.joints.find(j => j.id === firstJoint)?.id || this.track.joints[0].id;
        }
        if (this.frameCanvas.width < 2) {
          this.frameCanvas.width = this.track.width * 2;
          this.frameCanvas.height = this.track.height;
        }
        if (!cpuOnly && canUseWebGL()) {
          try {
            const scene = await window.roomhubLoadScene(this.rootPath + 'scene.bin', signal);
            if (signal.aborted) return;
            renderer = await window.roomhubSpatialGPU(this.freshCanvas(), scene, this.track, { signal, reference: { element: this.frameCanvas, side: 'right' } });
            if (renderer) rendererType = 'gpu';
          } catch (error) { if (signal.aborted) return; console.info('roomhub · WebGL', error); }
        }
        if (!renderer) {
          const mesh = await getJSON(this.rootPath + 'cpu.json', signal);
          if (signal.aborted) return;
          renderer = await window.roomhubSpatialCPU(this.freshCanvas(), mesh, this.track, { signal, background: true, reference: { element: this.frameCanvas, side: 'right' } });
        }
        if (signal.aborted || !this.isConnected) { renderer?.dispose?.(); return; }
        await renderer.prepare?.(this.frameIndex, this.selectedId);
        if (signal.aborted || !this.isConnected) { renderer?.dispose?.(); return; }
        this.renderer = renderer;
        this.rendererType = rendererType;
        this.infoState = this.frameReady ? '' : 'loading';
        this.ui.model.style.visibility = this.frameReady ? '' : 'hidden';
        this.populateJoints();
        this.present(this.film.currentTime);
        this.renderModel();
      } catch (error) {
        if (renderer && renderer !== this.renderer) renderer.dispose?.();
        if (!signal.aborted) {
          this.renderer?.dispose?.();
          this.renderer = null;
          this.infoState = 'failed';
          console.info('roomhub · scene', error);
        }
      } finally {
        if (this.loading === controller) {
          this.loading = null;
          this.localize();
        }
      }
    }
    freshCanvas() {
      const previous = this.ui.model;
      const canvas = previous.cloneNode(false);
      canvas.hidden = false;
      canvas.style.visibility = 'hidden';
      previous.replaceWith(canvas);
      this.ui.model = canvas;
      canvas.addEventListener('webglcontextlost', event => {
        event.preventDefault();
        if (this.ui.model !== canvas || !this.isConnected) return;
        this.renderer?.dispose?.();
        this.renderer = null;
        this.loadRenderer(true);
      }, { once: true });
      return canvas;
    }
    pickAt(event) {
      if (!this.frameReady || !this.renderer) return null;
      const rect = this.ui.stage.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      return x > this.split && !this.film.seeking ? this.renderer.pick(x,y) : null;
    }
    valuesAt(now) {
      const defaults = this.track.defaultTrack[this.frameIndex];
      return this.track.joints.map((joint,i) => {
        const edit = this.manual.get(joint.id);
        if (!edit) return defaults[i] || 0;
        const t = clamp((now - edit.at) / 260, 0, 1);
        return edit.from + (edit.to - edit.from) * t * t * (3 - 2*t);
      });
    }
    toggleJoint(id, reveal = false) {
      if (!this.renderer || !this.frameReady || this.mediaFailed) return;
      const i = this.track.joints.findIndex(j => j.id === id);
      if (i < 0) return;
      this.selectedId = id;
      this.ui.joints.value = id;
      if (reveal) this.focusJoint(true);
      const now = performance.now();
      const current = this.valuesAt(now)[i];
      const target = (this.manual.get(id)?.to ?? current) < .5 ? 1 : 0;
      this.manual.set(id, {from: current, to: target, at: now});
      this.ui.announce.textContent = (target ? tr('已打开 ', 'Opened ') : tr('已合上 ', 'Closed ')) + jointName(this.track.joints[i]);
      this.renderModel();
      this.positionMarkers(true);
    }
    renderModel() {
      if (!this.active || !this.renderer || !this.frameReady || !this.track || this.film.seeking) return;
      const now = performance.now();
      try {
        this.renderer.frame(this.frameIndex, this.valuesAt(now));
      } catch (error) {
        console.info('roomhub · frame', error);
        this.renderer.dispose?.();
        this.renderer = null;
        if (this.rendererType === 'gpu') this.loadRenderer(true);
        else { this.infoState = 'failed'; this.localize(); }
        return;
      }
      this.updateJointUI();
      this.positionMarkers();
      if (this.film.paused && !this.animation && [...this.manual.values()].some(edit => now - edit.at < 260)) {
        this.animation = requestAnimationFrame(() => { this.animation = 0; this.renderModel(); });
      }
    }
    anchor(id = this.selectedId) {
      if (!this.renderer?.anchor || !id) return null;
      const p = this.renderer.anchor(id);
      return p && p[0] >= 0 && p[0] <= 1 && p[1] >= 0 && p[1] <= 1 ? p : null;
    }
    focusJoint(reveal) {
      const p = this.anchor();
      if (reveal && p && p[0] < this.split + .055) this.setSplit(Math.max(0, p[0] - .11));
    }
    positionMarkers() {
      const marker = this.marker;
      if (!marker) return;
      const p = this.anchor();
      const show = p && this.frameReady && !this.mediaFailed && !this.film.seeking && p[0] > this.split + .025 && p[0] < .985 && p[1] > .025 && p[1] < .96;
      marker.hidden = !show;
      this.ui.selectionStatus.hidden = !!p || !this.renderer || !!this.mediaFailed;
      const hint = tr('所选部件在当前镜头外或被遮挡。', 'The selected part is outside this view or obscured.');
      if (this.ui.selectionStatus.textContent !== hint) this.ui.selectionStatus.textContent = hint;
      if (show) { marker.style.left = (100*p[0]) + '%'; marker.style.top = (100*p[1]) + '%'; }
    }
    populateJoints() {
      if (!this.track?.joints) return;
      const select = this.ui.joints;
      select.replaceChildren(...this.track.joints.map(joint => {
        const option = document.createElement('option');
        option.value = joint.id;
        option.textContent = jointName(joint);
        return option;
      }));
      this.jointIndices = new Map(this.track.joints.map((joint, i) => [joint.id, i]));
      if (!this.marker) {
        const marker = document.createElement('button');
        marker.className = 'sv-marker is-selected';
        marker.type = 'button';
        marker.hidden = true;
        this.marker = marker;
        this.ui.markers.append(marker);
      }
      select.value = this.selectedId || '';
      select.hidden = this.track.joints.length < 2;
    }
    updateJointUI() {
      if (!this.renderer || !this.selectedId) return;
      const u = this.ui;
      const i = this.jointIndices.get(this.selectedId);
      const joint = this.track.joints[i];
      if (joint) {
        const opened = (this.manual.get(joint.id)?.to ?? this.track.defaultTrack[this.frameIndex][i]) >= .5;
        const bin = joint.owner === 'double-bin-pullout';
        const drawer = joint.type === 'slider';
        const button = bin ? (opened ? tr('推回双桶拉篮', 'Close bin pullout') : tr('拉出双桶拉篮', 'Open bin pullout'))
          : drawer ? (opened ? tr('推回抽屉', 'Close drawer') : tr('拉出抽屉', 'Open drawer'))
          : opened ? tr('关上柜门', 'Close door') : tr('打开柜门', 'Open door');
        const customAction = joint.action?.[opened ? 'close' : 'open'];
        const action = customAction ? tr(customAction.zh, customAction.en || customAction.zh) : button;
        const label = action + (bin ? '' : ' · ' + jointName(joint));
        const marker = this.marker;
        if (marker) {
          marker.dataset.joint = joint.id;
          const state = String(opened);
          if (marker.getAttribute('aria-pressed') !== state) {
            marker.innerHTML = icon(opened ? 'minus' : 'joint');
            marker.setAttribute('aria-pressed', state);
          }
          this.label(marker, label);
        }
        if (u.change.textContent !== action) u.change.textContent = action;
        this.label(u.change, label);
      }
      u.reset.hidden = this.manual.size === 0;
    }
    label(node, value) {
      if (node.title !== value) { node.title = value; node.setAttribute('aria-label', value); }
    }
    updatePlayButton() {
      const paused = this.film.paused;
      this.ui.play.innerHTML = icon(paused ? 'play' : 'pause');
      this.label(this.ui.play, paused ? tr('播放','Play') : tr('暂停','Pause'));
    }
    updateTransport() {
      const disabled = !this.frameReady || !!this.mediaFailed;
      for (const key of ['play', 'back', 'next', 'seek', 'loop', 'rate']) this.ui[key].disabled = disabled;
    }
    localize() {
      const u = this.ui;
      this.updateTransport();
      this.label(u.stage, tr('实拍与可交互重建视频', 'Capture and interactive reconstruction'));
      this.label(u.divider, tr('拖动对比实拍与重建', 'Drag to compare capture and reconstruction'));
      u.divider.setAttribute('aria-valuetext', tr('实拍 ', 'Capture ') + Math.round(this.split * 100) + '%');
      this.label(u.seek, tr('视频进度', 'Video timeline'));
      this.label(u.loop, tr('循环播放', 'Loop playback'));
      this.label(u.rate, tr('播放速度', 'Playback speed'));
      this.label(u.back, tr('后退一秒', 'Back one second'));
      this.label(u.next, tr('前进一秒', 'Forward one second'));
      this.label(u.joints, tr('选择柜门或抽屉', 'Choose a cabinet door or drawer'));
      this.updatePlayButton();
      u.original.textContent = tr('实拍', 'Capture');
      u.rebuilt.textContent = tr('重建', 'Reconstruction');
      u.reset.textContent = tr('恢复原片动作', 'Restore recorded motion');
      u.retry.textContent = tr('重新加载', 'Retry');
      u.error.hidden = !this.mediaFailed && this.infoState !== 'failed' && this.infoState !== 'loading';
      u.retry.hidden = !this.mediaFailed && this.infoState === 'loading';
      u.problem.textContent = this.mediaFailed ? tr('视频未能载入。','The video could not load.') : this.infoState === 'failed' ? tr('可继续观看对比视频，交互模型未能载入。', 'The comparison is available. The interactive model could not load.') : tr('正在载入交互模型…', 'Loading interactive model…');
      u.controls.hidden = !this.renderer || !this.frameReady || !!this.mediaFailed;
      if (this.infoState === 'loading' && this.renderer && !this.frameReady && !this.mediaFailed) {
        u.problem.textContent = tr('正在载入视频…', 'Loading video…');
      }
      if (this.track && this.renderer) { this.populateJoints(); this.updateJointUI(); }
      this.positionMarkers();
    }
  }
  if (!customElements.get('spatial-player')) customElements.define('spatial-player', SpatialPlayer);
})();
