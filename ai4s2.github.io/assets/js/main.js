const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const toggle = document.querySelector("[data-nav-toggle]");

function syncHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
}

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});

nav.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

const mediaGallery = document.querySelector("[data-media-gallery]");
const mediaFilters = document.querySelector("[data-media-filters]");
const mediaCount = document.querySelector("[data-media-count]");
const mediaStatus = document.querySelector("[data-media-status]");

function formatBytes(bytes) {
  if (!Number.isFinite(bytes) || bytes <= 0) {
    return "0 KB";
  }

  const units = ["B", "KB", "MB", "GB"];
  let value = bytes;
  let unitIndex = 0;

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }

  const digits = unitIndex === 0 ? 0 : value >= 10 ? 1 : 2;
  return `${value.toFixed(digits)} ${units[unitIndex]}`;
}

function flattenMedia(collections) {
  return collections.flatMap((collection) =>
    collection.items.map((item) => ({
      ...item,
      collectionId: collection.id,
      collectionTitle: collection.title,
    })),
  );
}

function renderMediaCards(items) {
  if (!mediaGallery) {
    return;
  }

  mediaGallery.innerHTML = "";
  const fragment = document.createDocumentFragment();

  items.forEach((item) => {
    const card = document.createElement("a");
    card.className = "media-card";
    card.href = item.src;
    card.target = "_blank";
    card.rel = "noreferrer";
    card.setAttribute("aria-label", `Open ${item.name}`);

    const thumb = document.createElement("div");
    thumb.className = "media-thumb";

    const image = document.createElement("img");
    image.src = item.thumb || item.src;
    image.alt = item.alt || item.name;
    image.loading = "lazy";
    image.decoding = "async";
    thumb.appendChild(image);

    const body = document.createElement("div");
    body.className = "media-card-body";

    const title = document.createElement("span");
    title.className = "media-card-title";
    title.textContent = item.name;

    const meta = document.createElement("span");
    meta.className = "media-card-meta";
    meta.textContent = `${item.collectionTitle} · ${formatBytes(item.bytes)}`;

    body.append(title, meta);
    card.append(thumb, body);
    fragment.appendChild(card);
  });

  mediaGallery.appendChild(fragment);
}

function renderMediaFilters(collections, allItems) {
  if (!mediaFilters) {
    return;
  }

  const filterOptions = [
    { id: "all", label: `All assets (${allItems.length})`, items: allItems },
    ...collections.map((collection) => ({
      id: collection.id,
      label: `${collection.title} (${collection.itemCount})`,
      items: allItems.filter((item) => item.collectionId === collection.id),
    })),
  ];

  mediaFilters.innerHTML = "";

  filterOptions.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = `media-filter${index === 0 ? " is-active" : ""}`;
    button.type = "button";
    button.textContent = option.label;
    button.addEventListener("click", () => {
      mediaFilters.querySelectorAll(".media-filter").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      renderMediaCards(option.items);
    });
    mediaFilters.appendChild(button);
  });
}

async function loadMediaLibrary() {
  if (!mediaGallery || !mediaFilters || !mediaCount) {
    return;
  }

  try {
    const response = await fetch("./assets/media/ppt/manifest.json");
    if (!response.ok) {
      throw new Error(`Manifest request failed: ${response.status}`);
    }

    const manifest = await response.json();
    const collections = manifest.collections || [];
    const allItems = flattenMedia(collections);

    mediaCount.textContent = `${allItems.length} original PPT media assets across ${collections.length} decks`;
    renderMediaFilters(collections, allItems);
    renderMediaCards(allItems);

    if (mediaStatus) {
      mediaStatus.textContent = "Images are lazy-loaded and open as original files in a new tab.";
    }
  } catch (error) {
    mediaCount.textContent = "Media assets are unavailable right now.";
    if (mediaStatus) {
      mediaStatus.textContent = error.message;
    }
  }
}

loadMediaLibrary();
