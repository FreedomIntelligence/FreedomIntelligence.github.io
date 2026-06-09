(function () {
  function closeAll(except) {
    document.querySelectorAll('.wechat-popover.is-open').forEach(function (popover) {
      if (popover === except) return;
      popover.classList.remove('is-open');
      var qr = popover.querySelector('.wechat-qr');
      if (qr) qr.hidden = true;
    });
  }

  function setOpen(popover, isOpen) {
    popover.classList.toggle('is-open', isOpen);
    var qr = popover.querySelector('.wechat-qr');
    if (qr) qr.hidden = !isOpen;
  }

  document.querySelectorAll('.wechat-popover').forEach(function (popover) {
    setOpen(popover, false);
  });

  document.addEventListener('click', function (event) {
    var trigger = event.target.closest('.wechat-trigger');
    var activePopover = event.target.closest('.wechat-popover');

    if (trigger && activePopover) {
      event.preventDefault();
      var willOpen = !activePopover.classList.contains('is-open');
      closeAll(activePopover);
      setOpen(activePopover, willOpen);
      return;
    }

    if (!activePopover) closeAll();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeAll();
  });
})();
