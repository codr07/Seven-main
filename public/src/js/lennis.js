// Initialize Lenis
const lenis = new Lenis({
  lerp : 0.4,
  smooth: true,

});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);