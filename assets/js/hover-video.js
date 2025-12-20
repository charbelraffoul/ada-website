(function () {
  var prefersReducedMotion = false;
  try {
    prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch (e) {
    prefersReducedMotion = false;
  }

  if (prefersReducedMotion) return;

  function ensureSource(video) {
    if (!video) return false;
    if (video.querySelector('source')) return true;

    var src = video.getAttribute('data-src');
    if (!src) return false;

    var source = document.createElement('source');
    source.src = src;
    source.type = 'video/mp4';
    video.appendChild(source);
    return true;
  }

  function markReady(video) {
    if (!video || !video.classList) return;
    video.classList.add('is-ready');
  }

  function unmarkReady(video) {
    if (!video || !video.classList) return;
    video.classList.remove('is-ready');
  }

  function playVideo(video) {
    if (!video) return;
    if (!ensureSource(video)) return;

    // Mark ready when we have the first frame.
    // Use {once:true} so we don't accumulate listeners.
    try {
      video.addEventListener('loadeddata', function () {
        markReady(video);
      }, { once: true });
    } catch (e) {
      // Ignore (older browsers)
    }

    // If we just appended a <source>, load it.
    if (video.readyState === 0) {
      video.load();
    } else if (video.readyState >= 2) {
      // HAVE_CURRENT_DATA
      markReady(video);
    }

    var p = video.play();
    // Avoid unhandled promise rejections in browsers that block autoplay.
    if (p && typeof p.catch === 'function') {
      p.catch(function () {});
    }
  }

  function stopVideo(video) {
    if (!video) return;
    try {
      video.pause();
      video.currentTime = 0;
    } catch (e) {}
    unmarkReady(video);
  }

  function initCard(card) {
    var video = card.querySelector('.boss-video');
    if (!video) return;

    function start() {
      if (card.classList) card.classList.add('is-hover');
      playVideo(video);
    }

    function stop() {
      if (card.classList) card.classList.remove('is-hover');
      stopVideo(video);
    }

    // Desktop hover
    card.addEventListener('mouseenter', start);
    card.addEventListener('mouseleave', stop);

    // Keyboard accessibility: focus within card
    card.addEventListener('focusin', start);
    card.addEventListener('focusout', stop);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var cards = document.querySelectorAll('[data-hover-video]');
    for (var i = 0; i < cards.length; i++) {
      initCard(cards[i]);
    }
  });
})();
