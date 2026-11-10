(function () {
  const STORAGE_KEY = "freedom-language";
  const DEFAULT_LANGUAGE = "en";
  const LANGUAGE_ALIASES = {
    en: "en", english: "en", zh: "zh", cn: "zh", chinese: "zh",
    "zh-cn": "zh", "zh-hans": "zh", zh_hans: "zh",
  };
  const LANGUAGE_PARAMS = ["lang", "language", "locale", "hl"];
  const originalLinks = new WeakMap();
  const LABELS = {
    en: {
      button: "中文",
      title: "Switch to Chinese",
      htmlLang: "en",
    },
    zh: {
      button: "EN",
      title: "Switch to English",
      htmlLang: "zh-CN",
    },
  };

  function normalizeLanguage(language) {
    return LANGUAGE_ALIASES[String(language || "").trim().toLowerCase()] || null;
  }

  function getStoredLanguage() {
    try {
      return normalizeLanguage(localStorage.getItem(STORAGE_KEY));
    } catch (_error) {
      return null;
    }
  }

  function storeLanguage(language) {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch (_error) {
      // Ignore storage failures, for example in private browsing.
    }
  }

  function getUrlLanguage(url = new URL(window.location.href)) {
    for (const param of LANGUAGE_PARAMS) {
      const language = normalizeLanguage(url.searchParams.get(param));
      if (language) return language;
    }
    return null;
  }

  function getInitialLanguage() {
    return getUrlLanguage() || getStoredLanguage() ||
      normalizeLanguage(document.documentElement.dataset.defaultLanguage) ||
      DEFAULT_LANGUAGE;
  }

  function syncUrlLanguage(language) {
    const url = new URL(window.location.href);
    LANGUAGE_PARAMS.forEach((param) => url.searchParams.delete(param));
    url.searchParams.set("lang", language);
    window.history.replaceState(window.history.state, "", url);
  }

  function syncInternalLinks(language) {
    document.querySelectorAll("a[href]").forEach((link) => {
      if (!originalLinks.has(link)) originalLinks.set(link, link.getAttribute("href"));
      const href = originalLinks.get(link);
      if (!href || href.startsWith("#") || link.hasAttribute("download")) return;
      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin || !/^https?:$/.test(url.protocol)) return;
      // Leave files and links requesting a specific language unchanged.
      if (/\.[^/]+$/.test(url.pathname) && !/\.html?$/i.test(url.pathname)) return;
      if (getUrlLanguage(url)) return;
      url.searchParams.set("lang", language);
      link.setAttribute("href", url.pathname + url.search + url.hash);
    });
  }

  function applyLanguage(language) {
    const selectedLanguage = language === "zh" ? "zh" : DEFAULT_LANGUAGE;
    const bilingualProfile = Boolean(document.querySelector(".benyou-profile"));
    const label = bilingualProfile && selectedLanguage === "zh"
      ? { ...LABELS.zh, button: "en", title: "Switch to Chinese and English" }
      : LABELS[selectedLanguage];
    document.documentElement.dataset.language = selectedLanguage;
    document.documentElement.lang = label.htmlLang;
    storeLanguage(selectedLanguage);
    syncInternalLinks(selectedLanguage);

    document.querySelectorAll("#language-toggle").forEach((button) => {
      const text = button.querySelector("[data-language-label]");
      if (text) {
        text.textContent = label.button;
      }
      button.setAttribute("title", label.title);
      button.setAttribute("aria-label", label.title);
    });

    // Sync browser tab title with the visible h1 title
    const titleEl = document.querySelector(
      "h1.post-title, h1.blog-header-title",
    );
    if (titleEl) {
      const titleSpan = titleEl.querySelector(
        `[data-lang="${selectedLanguage}"]`,
      );
      if (titleSpan) {
        const siteName = document.title.split(" | ").slice(1).join(" | ");
        document.title = siteName
          ? `${titleSpan.textContent.trim()} | ${siteName}`
          : titleSpan.textContent.trim();
      }
    }
  }

  // Run in <head> so navigation and body start in the same language, without a flash.
  const initialLanguage = getInitialLanguage();
  document.documentElement.dataset.language = initialLanguage;
  document.documentElement.lang = LABELS[initialLanguage].htmlLang;

  document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(initialLanguage);

    document.querySelectorAll("#language-toggle").forEach((button) => {
      button.addEventListener("click", () => {
        const currentLanguage =
          document.documentElement.dataset.language === "zh"
            ? "zh"
            : DEFAULT_LANGUAGE;
        const nextLanguage = currentLanguage === "zh" ? "en" : "zh";
        applyLanguage(nextLanguage);
        syncUrlLanguage(nextLanguage);
      });
    });
  });

  window.addEventListener("popstate", () => applyLanguage(getInitialLanguage()));
  window.addEventListener("pageshow", (event) => {
    if (event.persisted) applyLanguage(getInitialLanguage());
  });
})();
