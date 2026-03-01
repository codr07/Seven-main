import { escapeHtml, sanitizeUrl } from "./security.js";

export const starsData = [
  {
    id: 1,
    name: "Raju Roy",
    designationNow: "Software Engineer at XYZ Corp",
    pic: "/public/assets/images/faculty/male.jpg",
    servicesTaken: ["Full Stack Development", "Interview Prep"],
    starReview: 5,
    textReview: "5EVEN transformed my career. The mentorship was exceptional and helped me land my dream job!"
  },
  {
    id: 2,
    name: "Sushant Sharma",
    designationNow: "Data Scientist at ABC Analytics",
    pic: "/public/assets/images/faculty/male.jpg",
    servicesTaken: ["Machine Learning", "Python Programming"],
    starReview: 5,
    textReview: "Outstanding learning experience. The practical projects prepared me perfectly for industry challenges."
  },
  {
    id: 3,
    name: "Priya Patel",
    designationNow: "AI Research Engineer at Tech Innovations",
    pic: "/public/assets/images/faculty/female.jpg",
    servicesTaken: ["AI Solutions", "Research Paper Writing"],
    starReview: 4.5,
    textReview: "Excellent curriculum and dedicated faculty. Highly recommended for anyone serious about tech careers."
  }
];

export function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let starsHTML = '';
  
  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i class="ri-star-fill text-yellow-500"></i>';
  }
  
  if (hasHalfStar) {
    starsHTML += '<i class="ri-star-half-line text-yellow-500"></i>';
  }
  
  return starsHTML;
}

export function renderStarCards() {
  const starsGrid = document.querySelector('.stars-grid');
  
  if (!starsGrid) {
    console.warn('Stars grid not found');
    return;
  }
  
  console.log('Rendering star cards:', starsData.length);
  
  starsGrid.innerHTML = starsData.map(star => {
    const safeName = escapeHtml(star.name);
    const safeDesignation = escapeHtml(star.designationNow);
    const safeReview = escapeHtml(star.textReview);
    const safeRating = escapeHtml(star.starReview);
    const safePic = sanitizeUrl(star.pic, { allowDataImage: true, fallback: "/public/assets/images/faculty/male.jpg" });
    const fallback = sanitizeUrl(`https://via.placeholder.com/128x128?text=${encodeURIComponent(star.name || "User")}`);

    return `
    <div class="star-card flex flex-col gap-4 p-6 border-2 border-dashed border-black/90 rounded-lg hover:shadow-lg transition-shadow items-center justify-center">
      <img src="${safePic}" data-fallback-src="${fallback}" alt="${safeName}" class="w-32 h-32 object-cover rounded-full">
      <div class="star-info flex flex-col gap-3 items-center justify-center text-center">
        <div>
          <p class="text-xl font-bold">${safeName}</p>
          <p class="text-sm text-gray-600">${safeDesignation}</p>
        </div>
        
        <div class="services flex flex-wrap gap-2 justify-center">
          ${star.servicesTaken.map(service => `<span class="badge-small text-xs px-2 py-1 bg-gray-100 rounded-full">${escapeHtml(service)}</span>`).join('')}
        </div>
        
        <div class="flex flex-col items-center gap-1">
          <div class="flex gap-1 justify-center">
            ${renderStars(star.starReview)}
          </div>
          <span class="text-xs text-gray-500">${safeRating} / 5</span>
        </div>
        
        <p class="text-sm text-gray-700 italic">"${safeReview}"</p>
      </div>
    </div>
  `;
  }).join('');

  starsGrid.querySelectorAll("img[data-fallback-src]").forEach((img) => {
    img.addEventListener("error", () => {
      const fallback = img.dataset.fallbackSrc;
      if (fallback && img.src !== fallback) {
        img.src = fallback;
      }
    }, { once: true });
  });
}

function initializeStarsPage() {
  renderStarCards();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeStarsPage);
} else {
  initializeStarsPage();
}
