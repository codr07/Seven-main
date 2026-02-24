// Initialize Lenis
const lenis = new Lenis({
  lerp : 0.4,
  smooth: true,

});

window.lenis = lenis;

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);