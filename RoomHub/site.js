const page = document.documentElement;
const languageButton = document.querySelector('#language');
const tabs = [...document.querySelectorAll('.tabs [role="tab"]')];
const tablist = document.querySelector('.tabs');
const narrowLayout = matchMedia('(max-width: 760px)');

const translations = [...document.querySelectorAll('[data-en], [data-aria-en], [data-alt-en]')].map(node => ({
  node,
  text: node.dataset.en ? node.innerHTML : null,
  label: node.getAttribute('aria-label'),
  alt: node.getAttribute('alt')
}));

function setLanguage(language) {
  const english = language === 'en';
  page.lang = english ? 'en' : 'zh-CN';
  for (const {node, text, label, alt} of translations) {
    if (text !== null) {
      if (english) node.textContent = node.dataset.en;
      else node.innerHTML = text;
    }
    if (node.dataset.ariaEn) node.setAttribute('aria-label', english ? node.dataset.ariaEn : label);
    if (node.dataset.altEn) node.setAttribute('alt', english ? node.dataset.altEn : alt);
  }
  document.title = english ? 'roomhub · From video to interactive worlds' : 'roomhub · 从视频到可交互的世界';
  languageButton.setAttribute('aria-label', english ? '切换到中文' : 'Switch to English');
  document.dispatchEvent(new Event('roomhub-language'));
  try { localStorage.setItem('room-studies-language', language); } catch {}
}
languageButton.addEventListener('click', () => setLanguage(page.lang === 'en' ? 'zh-CN' : 'en'));
try { if (localStorage.getItem('room-studies-language') === 'en') setLanguage('en'); } catch {}

function selectTab(selected, focus = false) {
  for (const tab of tabs) {
    const active = tab === selected;
    const panel = document.getElementById(tab.getAttribute('aria-controls'));
    if (!active && !panel.hidden) {
      panel.querySelector('spatial-player')?.deactivate?.();
    }
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
    panel.hidden = !active;
    if (active) panel.querySelector('spatial-player')?.activate?.();
  }
  if (focus) selected.focus();
}

for (const tab of tabs) {
  tab.addEventListener('click', () => {
    selectTab(tab);
    updateSceneAddress(tab);
  });
  tab.addEventListener('keydown', event => {
    const index = tabs.indexOf(tab);
    const vertical = tablist.getAttribute('aria-orientation') === 'vertical';
    const positions = {
      [vertical ? 'ArrowDown' : 'ArrowRight']: (index + 1) % tabs.length,
      [vertical ? 'ArrowUp' : 'ArrowLeft']: (index + tabs.length - 1) % tabs.length,
      Home: 0,
      End: tabs.length - 1
    };
    if (!(event.key in positions)) return;
    event.preventDefault();
    selectTab(tabs[positions[event.key]], true);
    updateSceneAddress(tabs[positions[event.key]]);
  });
}
function setOrientation() { tablist.setAttribute('aria-orientation', narrowLayout.matches ? 'horizontal' : 'vertical'); }
setOrientation();
narrowLayout.addEventListener('change', setOrientation);

function updateSceneAddress(tab) {
  const hash = '#' + tab.dataset.address;
  try { history.replaceState(null, '', hash); } catch {}
}
function poseSceneFromAddress() {
  const address = location.hash === '#study' ? 'garden-study' : location.hash.slice(1);
  const selected = tabs.find(tab => tab.dataset.address === address);
  if (!selected) return;
  selectTab(selected);
  requestAnimationFrame(() => document.getElementById('scenes').scrollIntoView({behavior:'instant'}));
}
document.querySelector('.jump').addEventListener('click', event => {
  if (event.currentTarget.hash === location.hash) poseSceneFromAddress();
});
window.addEventListener('hashchange', poseSceneFromAddress);
poseSceneFromAddress();
