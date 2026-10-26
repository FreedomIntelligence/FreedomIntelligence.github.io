(function () {
  // Multiple Code links can point to the same repository; fetch each count once.
  const repositories = new Map();
  document.querySelectorAll('[data-github-repo]').forEach(function (link) {
    const name = link.dataset.githubRepo;
    if (!repositories.has(name)) repositories.set(name, []);
    repositories.get(name).push(link);
  });
  repositories.forEach(async function (links, name) {
    const controller = new AbortController();
    const timeout = setTimeout(function () { controller.abort(); }, 5000);
    try {
      const response = await fetch('https://api.github.com/repos/' + name, {
        signal: controller.signal,
        headers: { Accept: 'application/vnd.github+json' }
      });
      if (!response.ok) return;
      const repo = await response.json();
      if (!Number.isInteger(repo.stargazers_count) || repo.stargazers_count < 0) return;
      links.forEach(function (link) {
        link.querySelector('[data-star-count]').textContent = repo.stargazers_count.toLocaleString('en-US');
        link.title = 'GitHub Stars · ' + new Date().toISOString().slice(0, 10);
      });
    } catch (_error) {
      // Retain dated counts if the network is unavailable or GitHub rate limits requests.
    } finally {
      clearTimeout(timeout);
    }
  });

  const filters = document.getElementById('publication-filters');
  if (!filters) return;
  const papers = Array.from(document.querySelectorAll('#publication-list > li'));
  const venues = document.getElementById('publication-venues');
  const year = document.getElementById('publication-year');
  const topic = document.getElementById('publication-topic');
  const empty = document.getElementById('publication-empty');
  let selectedVenue = '';
  const labels = {
    '': ['全部', 'All'], Journals: ['期刊', 'Journals'], Preprints: ['预印本', 'Preprints'],
    Healthcare: ['医疗 AI', 'Healthcare'], Multilingual: ['多语言', 'Multilingual'],
    'Speech & multimodal': ['语音与多模态', 'Speech & multimodal'],
    'Agents & reasoning': ['智能体与推理', 'Agents & reasoning'],
    'Training & efficiency': ['训练与效率', 'Training & efficiency'],
    'Learning & interpretation': ['学习与可解释性', 'Learning & interpretation'],
    Applications: ['应用', 'Applications'], 'Language & learning': ['语言与学习', 'Language & learning']
  };
  function label(value) {
    const pair = labels[value];
    return pair ? pair[document.documentElement.dataset.language === 'zh' ? 0 : 1] : value;
  }
  function addOption(select, value) {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = label(value);
    select.appendChild(option);
  }
  const otherVenues = new Set(['ACM MM', 'IJCAI', 'SIGIR', 'WWW', 'ICCV', 'AAAI']);
  function venueGroup(paper) { return otherVenues.has(paper.dataset.venue) ? 'Other AI conferences' : paper.dataset.venue; }
  const venueOrder = ['NeurIPS', 'ICLR', 'ICML', 'ACL', 'EMNLP', 'NAACL', 'COLM', 'Other AI conferences', 'CHI', 'Journals', 'Preprints'];
  const availableVenues = new Set(papers.map(function (paper) { return venueGroup(paper); }));
  [''].concat(venueOrder.filter(function (venue) { return availableVenues.has(venue); })).forEach(function (venue) {
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.venue = venue;
    button.textContent = label(venue);
    button.setAttribute('aria-pressed', String(!venue));
    button.setAttribute('aria-controls', 'publication-list');
    button.addEventListener('click', function () { selectedVenue = venue; update(); });
    venues.appendChild(button);
  });
  Array.from(new Set(papers.map(function (paper) { return paper.dataset.year; }))).sort().reverse().forEach(function (value) { addOption(year, value); });
  Array.from(new Set(papers.flatMap(function (paper) { return paper.dataset.topics.split('|'); }))).sort().forEach(function (value) { addOption(topic, value); });
  function update() {
    let count = 0;
    papers.forEach(function (paper) {
      const matches = (!selectedVenue || venueGroup(paper) === selectedVenue) &&
        (!year.value || paper.dataset.year === year.value) &&
        (!topic.value || paper.dataset.topics.split('|').includes(topic.value));
      paper.hidden = !matches;
      if (matches) count += 1;
    });
    venues.querySelectorAll('button').forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.venue === selectedVenue));
    });
    document.querySelectorAll('[data-publication-count]').forEach(function (node) { node.textContent = count; });
    empty.hidden = count !== 0;
  }
  function translateControls() {
    venues.querySelectorAll('button').forEach(function (button) { button.textContent = label(button.dataset.venue); });
    [year, topic].forEach(function (select) {
      Array.from(select.options).forEach(function (option) { option.textContent = label(option.value); });
    });
  }
  year.addEventListener('change', update);
  topic.addEventListener('change', update);
  document.getElementById('publication-reset').addEventListener('click', function () {
    selectedVenue = ''; year.value = ''; topic.value = ''; update();
  });
  new MutationObserver(translateControls).observe(document.documentElement, { attributes: true, attributeFilter: ['data-language'] });
  translateControls();
  update();
  filters.hidden = false;
})();
