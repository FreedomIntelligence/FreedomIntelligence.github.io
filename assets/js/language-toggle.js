(function () {
  const STORAGE_KEY = "freedom-language";
  const DEFAULT_LANGUAGE = "en";
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

  function getStoredLanguage() {
    try {
      return localStorage.getItem(STORAGE_KEY);
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

  function applyLanguage(language) {
    const selectedLanguage = language === "zh" ? "zh" : DEFAULT_LANGUAGE;
    const nextLanguage = selectedLanguage === "zh" ? "en" : "zh";
    const label = LABELS[selectedLanguage];
    const nextLabel = LABELS[nextLanguage];

    document.documentElement.dataset.language = selectedLanguage;
    document.documentElement.lang = label.htmlLang;

    document.querySelectorAll("#language-toggle").forEach((button) => {
      const text = button.querySelector("[data-language-label]");
      if (text) {
        text.textContent = label.button;
      }
      button.setAttribute("title", nextLabel.title);
      button.setAttribute("aria-label", nextLabel.title);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const initialLanguage = getStoredLanguage() || document.documentElement.dataset.language || DEFAULT_LANGUAGE;
    applyLanguage(initialLanguage);

    document.querySelectorAll("#language-toggle").forEach((button) => {
      button.addEventListener("click", () => {
        const currentLanguage = document.documentElement.dataset.language === "zh" ? "zh" : DEFAULT_LANGUAGE;
        const nextLanguage = currentLanguage === "zh" ? "en" : "zh";
        applyLanguage(nextLanguage);
        storeLanguage(nextLanguage);
      });
    });
  });
})();
