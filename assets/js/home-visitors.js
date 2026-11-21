// A dedicated homepage counter. Local previews and forks never send visits.
(function () {
  'use strict';
  if (window.location.hostname !== 'freedomintelligence.github.io') return;
  if (!['/', '/index.html'].includes(window.location.pathname)) return;
  const image = document.getElementById('home-visitors-map');
  if (!image || image.hasAttribute('src')) return;
  image.addEventListener('load', function () {
    image.parentElement.hidden = false;
  }, { once: true });
  image.addEventListener('error', function () {
    document.getElementById('home-visitors-unavailable').hidden = false;
  }, { once: true });
  // Do not reload on a language/theme change or add another counting image.
  image.src = image.dataset.src;
}());
