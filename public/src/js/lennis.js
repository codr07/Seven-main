const state = {
  currentY: window.scrollY || 0,
  targetY: window.scrollY || 0,
  isPaused: false,
  isTouching: false,
  touchStartY: 0,
  touchStartTarget: 0,
  lerp: 0.14,
  wheelMultiplier: 1.25,
  keyboardStep: 120
};

const clampTarget = (value) => {
  const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  return Math.max(0, Math.min(value, maxScroll));
};

const shouldUseNativeScroll = (target) => {
  return Boolean(target?.closest('[data-native-scroll="true"]'));
};

const animate = () => {
  if (!state.isPaused) {
    state.currentY += (state.targetY - state.currentY) * state.lerp;

    if (Math.abs(state.targetY - state.currentY) < 0.35) {
      state.currentY = state.targetY;
    }

    window.scrollTo(0, state.currentY);
  }

  requestAnimationFrame(animate);
};

window.addEventListener('wheel', (event) => {
  if (state.isPaused || shouldUseNativeScroll(event.target)) {
    return;
  }

  event.preventDefault();
  state.targetY = clampTarget(state.targetY + (event.deltaY * state.wheelMultiplier));
}, { passive: false });

window.addEventListener('touchstart', (event) => {
  if (state.isPaused || shouldUseNativeScroll(event.target)) {
    return;
  }

  state.isTouching = true;
  state.touchStartY = event.touches[0].clientY;
  state.touchStartTarget = state.targetY;
}, { passive: true });

window.addEventListener('touchmove', (event) => {
  if (state.isPaused || !state.isTouching || shouldUseNativeScroll(event.target)) {
    return;
  }

  const touchY = event.touches[0].clientY;
  const delta = state.touchStartY - touchY;
  state.targetY = clampTarget(state.touchStartTarget + delta);
  event.preventDefault();
}, { passive: false });

window.addEventListener('touchend', () => {
  state.isTouching = false;
}, { passive: true });

window.addEventListener('keydown', (event) => {
  if (state.isPaused) {
    return;
  }

  const activeElement = document.activeElement;
  const isTyping = activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA' || activeElement.isContentEditable);

  if (isTyping) {
    return;
  }

  let delta = 0;

  if (event.key === 'ArrowDown') {
    delta = state.keyboardStep;
  } else if (event.key === 'ArrowUp') {
    delta = -state.keyboardStep;
  } else if (event.key === 'PageDown') {
    delta = window.innerHeight * 0.9;
  } else if (event.key === 'PageUp') {
    delta = -window.innerHeight * 0.9;
  } else if (event.key === 'Home') {
    state.targetY = 0;
    event.preventDefault();
    return;
  } else if (event.key === 'End') {
    state.targetY = clampTarget(Number.MAX_SAFE_INTEGER);
    event.preventDefault();
    return;
  } else if (event.code === 'Space') {
    delta = event.shiftKey ? -window.innerHeight * 0.9 : window.innerHeight * 0.9;
  }

  if (delta !== 0) {
    event.preventDefault();
    state.targetY = clampTarget(state.targetY + delta);
  }
}, { passive: false });

window.addEventListener('resize', () => {
  state.targetY = clampTarget(state.targetY);
}, { passive: true });

window.customSmoothScroll = {
  pause() {
    state.isPaused = true;
  },
  resume() {
    state.currentY = window.scrollY || state.currentY;
    state.targetY = state.currentY;
    state.isPaused = false;
  },
  scrollTo(y) {
    state.targetY = clampTarget(y);
  },
  setLerp(value) {
    state.lerp = Math.max(0.03, Math.min(0.35, Number(value) || state.lerp));
  }
};

animate();