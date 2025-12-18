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

  function playVideo(video) {
    if (!video) return;
    if (!ensureSource(video)) return;

    // If we just appended a <source>, load it.
    if (video.readyState === 0) {
      video.load();
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
  }

  function initCard(card) {
    var video = card.querySelector('.boss-video');
    if (!video) return;

    // Desktop hover
    card.addEventListener('mouseenter', function () {
      playVideo(video);
    });

    card.addEventListener('mouseleave', function () {
      stopVideo(video);
    });

    // Keyboard accessibility: focus within card
    card.addEventListener('focusin', function () {
      playVideo(video);
    });

    card.addEventListener('focusout', function () {
      stopVideo(video);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var cards = document.querySelectorAll('[data-hover-video]');
    for (var i = 0; i < cards.length; i++) {
      initCard(cards[i]);
    }
  });
})();
