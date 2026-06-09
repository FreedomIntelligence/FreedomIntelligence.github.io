(function () {
  var blockedHost = ['polyfill', 'io'].join('.');

  function isBlockedUrl(value) {
    try {
      var hostname = new URL(value, window.location.href).hostname;
      return hostname === blockedHost || hostname.endsWith('.' + blockedHost);
    } catch (error) {
      return false;
    }
  }

  function isBlockedNode(node) {
    if (!node || !node.tagName) return false;
    var tag = node.tagName.toLowerCase();
    return (tag === 'script' && isBlockedUrl(node.src)) ||
      (tag === 'link' && isBlockedUrl(node.href));
  }

  function removeBlockedNodes(root) {
    if (!root || !root.querySelectorAll) return;
    root.querySelectorAll('script[src], link[href]').forEach(function (node) {
      if (isBlockedNode(node)) node.remove();
    });
  }

  var originalSetAttribute = Element.prototype.setAttribute;
  Element.prototype.setAttribute = function (name, value) {
    var lowerName = String(name).toLowerCase();
    var lowerTag = this.tagName ? this.tagName.toLowerCase() : '';
    if ((lowerTag === 'script' && lowerName === 'src' && isBlockedUrl(value)) ||
        (lowerTag === 'link' && lowerName === 'href' && isBlockedUrl(value))) {
      return;
    }
    return originalSetAttribute.call(this, name, value);
  };

  ['appendChild', 'insertBefore'].forEach(function (method) {
    var original = Node.prototype[method];
    Node.prototype[method] = function (node) {
      if (isBlockedNode(node)) return node;
      return original.apply(this, arguments);
    };
  });

  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      mutation.addedNodes.forEach(function (node) {
        if (isBlockedNode(node)) {
          node.remove();
        } else {
          removeBlockedNodes(node);
        }
      });
    });
  });

  observer.observe(document.documentElement, { childList: true, subtree: true });
  document.addEventListener('DOMContentLoaded', function () {
    removeBlockedNodes(document);
  });
})();
