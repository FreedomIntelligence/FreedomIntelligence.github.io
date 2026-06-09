(function () {
  function closeAll(except) {
    document.querySelectorAll('.wechat-popover.is-open').forEach(function (popover) {
      if (popover !== except) popover.classList.remove('is-open');
    });
  }

  document.addEventListener('click', function (event) {
    var trigger = event.target.closest('.wechat-trigger');
    var activePopover = event.target.closest('.wechat-popover');

    if (trigger && activePopover) {
      event.preventDefault();
      var willOpen = !activePopover.classList.contains('is-open');
      closeAll(activePopover);
      activePopover.classList.toggle('is-open', willOpen);
      return;
    }

    if (!activePopover) closeAll();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeAll();
  });
})();
