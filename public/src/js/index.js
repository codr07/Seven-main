import { initializeProfileView, renderFacultyCards, renderOwnerCards } from "./faculty.js";

// Initialize faculty and owner sections
function initializeSections() {
  renderFacultyCards();
  renderOwnerCards();
  initializeProfileView();
}

// Run immediately if DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeSections);
} else {
  initializeSections();
}

// gsap.utils.toArray("#emerge, #flow, #grow").forEach(el => {
//   const speed = parseFloat(el.dataset.speed) || 1;

//   gsap.to(el, {
//     x: 250 * speed,
//     duration: 1.5,
//     ease: "back.inOut(1.7)",
//     scrollTrigger: {
//       trigger: ".u .right",
//       start: "top 45%",
//       end: "bottom 15%",
//       scrub: 3,
//     }
//   });
// })

gsap.to(".preload", {
  opacity: 0,
  display: "none",
  zIndex: -1,
  duration: 4.5,
  delay: 1.5,
  ease: "power2.out"
}),
gsap.from(".preload svg path", {
  fill: " transparent",
  stroke: "#000",
  strokeWidth: "3px",
  strokeDashoffset: 100,
  strokeDasharray: 50,
  duration: 3.5,
  delay: 0.5,
  ease: "power2.out"
})