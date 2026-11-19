(() => {
  'use strict';

  const types = {f4:Float32Array, f8:Float64Array, u2:Uint16Array, u4:Uint32Array};
  let inflateScript;

  function getInflate() {
    if (window.pako?.ungzip) return Promise.resolve(window.pako.ungzip);
    if (!inflateScript) {
      inflateScript = new Promise((resolve, reject) => {
        const tag = document.createElement('script');
        const path = 'assets/spatial-common/pako-inflate.min.js';
        tag.src = window.roomhubAssetURL?.(path) || path;
        tag.onload = () => {
          if (window.pako?.ungzip) resolve(window.pako.ungzip);
          else reject(new Error('场景解压器未能启动。'));
        };
        tag.onerror = () => reject(new Error('场景解压器未能加载。'));
        document.head.append(tag);
      }).catch(error => {
        inflateScript = undefined;
        throw error;
      });
    }
    return inflateScript;
  }

  function checkAbort(signal) {
    if (signal?.aborted) throw new DOMException('Aborted', 'AbortError');
  }

  async function readPayload(path, signal) {
    const embedded = window.roomhubSpatialBytes || window.roomhubAssetBytes;
    if (embedded) {
      const data = await embedded(path);
      return data instanceof Uint8Array ? data : new Uint8Array(data);
    }
    const response = await fetch(window.roomhubAssetURL?.(path) || path, {signal});
    if (!response.ok) throw new Error('模型文件读取失败 (' + response.status + ')');
    return new Uint8Array(await response.arrayBuffer());
  }

  function readScene(bytes) {
    if (bytes.length < 8 || bytes[0] !== 83 || bytes[1] !== 86 || bytes[2] !== 77 || bytes[3] !== 49) {
      throw new Error('模型文件格式无效。');
    }
    const headerLength = new DataView(bytes.buffer, bytes.byteOffset, 8).getUint32(4, true);
    const payloadOffset = 8 + Math.ceil(headerLength / 8) * 8;
    if (bytes.byteOffset % 8) bytes = new Uint8Array(bytes);
    const header = JSON.parse(new TextDecoder().decode(bytes.subarray(8, 8 + headerLength)));
    const tables = header.tables.map(([type, offset, count]) => {
      if (type === 'range') {
        const indices = offset + count <= 65536 ? new Uint16Array(count) : new Uint32Array(count);
        for (let i = 0; i < count; i++) indices[i] = offset + i;
        return indices;
      }
      const ArrayType = types[type];
      if (!ArrayType || offset < 0 || count < 0 || payloadOffset + offset + count * ArrayType.BYTES_PER_ELEMENT > bytes.length) {
        throw new Error('模型网格数据不完整。');
      }
      return new ArrayType(bytes.buffer, bytes.byteOffset + payloadOffset + offset, count);
    });
    for (const mesh of header.scene.meshes) {
      for (const field of ['positions','normals','material_uv']) {
        if (typeof mesh[field] === 'number') mesh[field] = tables[mesh[field]];
      }
      for (const group of mesh.groups) group.indices = tables[group.indices];
    }
    return header.scene;
  }

  window.roomhubLoadScene = async (path, signal) => {
    checkAbort(signal);
    let bytes = await readPayload(path, signal);
    checkAbort(signal);
    if (bytes[0] === 0x1f && bytes[1] === 0x8b) {
      if (typeof DecompressionStream === 'function') {
        const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
        bytes = new Uint8Array(await new Response(stream).arrayBuffer());
      } else {
        const inflate = await getInflate();
        checkAbort(signal);
        bytes = inflate(bytes);
      }
    }
    checkAbort(signal);
    return readScene(bytes);
  };
})();
