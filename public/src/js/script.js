document.addEventListener('DOMContentLoaded', () => {
  const canUseCustomCursor =
    window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const ensureCursor = () => {
    let cursor = document.querySelector('.cursor');
    if (!cursor) {
      cursor = document.createElement('div');
      cursor.className = 'cursor';
      document.body.prepend(cursor);
    }
    return cursor;
  };

  let cursor = null;
  if (!canUseCustomCursor) {
    const existingCursor = document.querySelector('.cursor');
    if (existingCursor) existingCursor.remove();
  } else {
    cursor = ensureCursor();
  }
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let rafId = null;

  if (canUseCustomCursor) {
    document.body.classList.add('custom-cursor-active');
  }

  const formatPageName = (value) => {
    if (!value) return 'Home';
    const normalized = value
      .replace(/\.html?$/i, '')
      .replace(/[-_]+/g, ' ')
      .trim();

    if (!normalized || normalized.toLowerCase() === 'index') return 'Home';

    return normalized
      .split(' ')
      .filter(Boolean)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const getTargetPageName = (url) => {
    try {
      const parsed = new URL(url, window.location.origin);
      const segment = parsed.pathname.split('/').pop() || 'index.html';
      return formatPageName(segment);
    } catch {
      return 'Loading';
    }
  };

  const getOrCreateTransitionOverlay = () => {
    let overlay = document.querySelector('.page-transition-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'page-transition-overlay';
      overlay.innerHTML = '<div class="page-transition-name">Loading</div>';
      document.body.appendChild(overlay);
    }
    return overlay;
  };

  const showPageTransition = (pageName) => {
    const overlay = getOrCreateTransitionOverlay();
    const nameNode = overlay.querySelector('.page-transition-name');
    if (nameNode) {
      nameNode.textContent = pageName;
    }
    requestAnimationFrame(() => {
      overlay.classList.add('show');
    });
  };

  const interactiveSelector = 'a, button, [role="button"], input[type="button"], input[type="submit"]';

  if (canUseCustomCursor) {
    const animateCursor = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;

      const xDelta = Math.abs(targetX - currentX);
      const yDelta = Math.abs(targetY - currentY);
      if (xDelta > 0.2 || yDelta > 0.2) {
        rafId = requestAnimationFrame(animateCursor);
      } else {
        rafId = null;
      }
    };

    document.addEventListener('pointermove', (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (!rafId) {
        rafId = requestAnimationFrame(animateCursor);
      }
    }, { passive: true });

    document.addEventListener('mouseover', (event) => {
      if (event.target.closest(interactiveSelector)) {
        cursor.classList.add('cursor-hover');
      }
    });

    document.addEventListener('mouseout', (event) => {
      if (event.target.closest(interactiveSelector)) {
        cursor.classList.remove('cursor-hover');
      }
    });
  }

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href]');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) {
      return;
    }

    if (link.target === '_blank' || link.hasAttribute('download')) return;

    let targetUrl;
    try {
      targetUrl = new URL(link.href, window.location.origin);
    } catch {
      return;
    }

    if (targetUrl.origin !== window.location.origin) return;

    const currentUrl = `${window.location.origin}${window.location.pathname}${window.location.search}`;
    const destinationUrl = `${targetUrl.origin}${targetUrl.pathname}${targetUrl.search}`;
    if (currentUrl === destinationUrl) return;

    event.preventDefault();
    showPageTransition(getTargetPageName(targetUrl.href));

    setTimeout(() => {
      window.location.href = targetUrl.href;
    }, 420);
  });

 

  const dropdownBtn = document.querySelector('#btn');
  const navlist = document.querySelector('.mob-nav-links');
  if (dropdownBtn && navlist) {
    dropdownBtn.addEventListener('click', () => {
      navlist.classList.toggle('show');
    });
  }
});


