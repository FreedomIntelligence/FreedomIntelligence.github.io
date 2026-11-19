// Plain static servers can return the entire MP4 for a byte-range request.
// In that case give the decoder a seekable local URL backed by that response.
async function roomhubVideoSource(url) {
  if (!/^https?:$/.test(new URL(url, document.baseURI).protocol)) return url;
  try {
    const response = await fetch(url, {headers: {Range: 'bytes=0-0'}});
    if (response.status === 200) return URL.createObjectURL(await response.blob());
    await response.body?.cancel();
  } catch {
    // Native media loading also handles hosts which do not allow fetch.
  }
  return url;
}
