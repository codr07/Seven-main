// Initialize Lenis
const lenis = new Lenis({
  autoraf: true,

});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);