(function () {
  document.querySelectorAll('[data-github-repo]').forEach(async function (link) {
    const controller = new AbortController();
    const timeout = setTimeout(function () { controller.abort(); }, 5000);
    try {
      const response = await fetch('https://api.github.com/repos/' + link.dataset.githubRepo, {
        signal: controller.signal,
        headers: { Accept: 'application/vnd.github+json' }
      });
      if (!response.ok) return;
      const repo = await response.json();
      if (!Number.isInteger(repo.stargazers_count) || repo.stargazers_count < 0) return;
      link.querySelector('[data-star-count]').textContent = repo.stargazers_count.toLocaleString('en-US');
      link.title = 'GitHub Stars · ' + new Date().toISOString().slice(0, 10);
    } catch (_error) {
      // Keep the dated, verified count when GitHub is unavailable or rate limited.
    } finally {
      clearTimeout(timeout);
    }
  });
})();
