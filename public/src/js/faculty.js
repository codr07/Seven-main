export const facultyData = [
  {
    id: 1,
    name: "Faculty Name",
    department: "Computer Science",
    education: ["M.Tech", "B.Tech"],
    rating: 4.5,
    image: "/public/assets/images/faculty/faculty1.jpg",
    linkedinUrl: "#",
    expertise: ["DSA", "Web Development", "Cloud Computing"],
    bio: "Experienced instructor with passion for teaching"
  },
  {
    id: 2,
    name: "Faculty Name",
    department: "Data Science",
    education: ["Ph.D", "M.Tech"],
    rating: 5,
    image: "/public/assets/images/faculty/faculty2.jpg",
    linkedinUrl: "#",
    expertise: ["Machine Learning", "Data Analysis", "Python"],
    bio: "Research-focused educator specializing in AI"
  },
  {
    id: 3,
    name: "Faculty Name",
    department: "Full Stack Development",
    education: ["M.Tech", "B.Tech"],
    rating: 4,
    image: "/public/assets/images/faculty/faculty3.jpg",
    linkedinUrl: "#",
    expertise: ["React", "Node.js", "Database Design"],
    bio: "Industry veteran with hands-on development experience"
  },
  {
    id: 4,
    name: "Faculty Name",
    department: "Cyber Security",
    education: ["M.Tech", "B.Tech"],
    rating: 4.5,
    image: "/public/assets/images/faculty/faculty4.jpg",
    linkedinUrl: "#",
    expertise: ["Cyber Security", "Network Security", "Ethical Hacking"],
    bio: "Expert in cybersecurity with extensive industry experience"
  },
  {
    id: 5,
    name: "Faculty Name",
    department: "Full Stack Development",
    education: ["M.Tech", "B.Tech"],
    rating: 4,
    image: "/public/assets/images/faculty/faculty5.jpg",
    linkedinUrl: "#",
    expertise: ["React", "Node.js", "Database Design"],
    bio: "Industry veteran with hands-on development experience"
  },
  {
    id: 6,
    name: "Faculty Name",
    department: "Full Stack Development",
    education: ["M.Tech", "B.Tech"],
    rating: 4,
    image: "/public/assets/images/faculty/faculty6.jpg",
    linkedinUrl: "#",
    expertise: ["React", "Node.js", "Database Design"],
    bio: "Industry veteran with hands-on development experience"
  }
];

export const ownerData = [
  {
    id: 1,
    name: "Owner Name",
    role: "Founder & CEO",
    image: "/public/assets/images/owners/owner1.jpg",
    linkedinUrl: "#",
    portfolioUrl: "#",
    expertise: ["Strategic Leadership", "Business Development", "Innovation"],
    bio: "Visionary leader dedicated to transforming education"
  },
  {
    id: 2,
    name: "Owner Name",
    role: "Co-Founder & CTO",
    image: "/public/assets/images/img/thumb.png",
    linkedinUrl: "#",
    portfolioUrl: "#",
    expertise: ["Technology Strategy", "Product Development", "Architecture"],
    bio: "Tech innovator passionate about educational technology"
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

export function renderFacultyCards() {
  const facultyGrid = document.querySelector('.faculty-grid');
  
  if (!facultyGrid) {
    console.warn('Faculty grid not found');
    return;
  }
  
  console.log('Rendering faculty cards:', facultyData.length);
  
  facultyGrid.innerHTML = facultyData.map(faculty => `
    <div class="faculty-card flex flex-col gap-4 p-6 border-2 border-dashed border-black/90 rounded-lg hover:shadow-lg transition-shadow items-center justify-center">
      <img src="${faculty.image}" alt="${faculty.name}" class="w-32 h-32 object-cover rounded-full">
      <div class="faculty-info flex flex-col gap-2 items-center justify-center text-center">
        <p class="text-xl font-bold">${faculty.name}</p>
        <p class="text-sm text-gray-600"><span class="font-semibold">Department:</span> ${faculty.department}</p>
        <p class="text-sm text-gray-600"><span class="font-semibold">Education:</span> ${faculty.education.join(", ")}</p>
        <div class="flex flex-col items-center gap-2">
          <span class="text-sm text-gray-600 font-semibold">Rating:</span>
          <div class="flex gap-1 justify-center">
            ${renderStars(faculty.rating)}
          </div>
        </div>
      </div>
      <a href="${faculty.linkedinUrl}" class="btn bg-black text-white px-4 py-2 rounded-md text-center text-sm hover:bg-gray-800 transition w-full">View LinkedIn Profile</a>
    </div>
  `).join('');
}

export function renderOwnerCards() {
  const ownerGrid = document.querySelector('.owner-grid');
  
  if (!ownerGrid) {
    console.warn('Owner grid not found');
    return;
  }
  
  console.log('Rendering owner cards:', ownerData.length);
  
  ownerGrid.innerHTML = ownerData.map(owner => `
    <div class="owner-card flex flex-col gap-4 p-6 border-2 border-dashed border-black/90 rounded-lg hover:shadow-lg transition-shadow items-center justify-center">
      <img src="${owner.image}" alt="${owner.name}" class="w-32 h-32 object-cover rounded-full">
      <div class="owner-info flex flex-col gap-2 items-center justify-center text-center">
        <p class="text-xl font-bold">${owner.name}</p>
        <p class="text-sm text-gray-600"><span class="font-semibold">Role:</span> ${owner.role}</p>
        <p class="text-sm text-gray-600"><span class="font-semibold">Expertise:</span> ${owner.expertise.join(", ")}</p>
        <p class="text-sm text-gray-600">${owner.bio}</p>
      </div>
      <div class="flex gap-3 w-full">
        <a href="${owner.linkedinUrl}" class="btn flex-1 bg-black text-white px-4 py-2 rounded-md text-center text-sm hover:bg-gray-800 transition">LinkedIn</a>
        <a href="${owner.portfolioUrl}" class="btn flex-1 bg-black text-white px-4 py-2 rounded-md text-center text-sm hover:bg-gray-800 transition">Portfolio</a>
      </div>
    </div>
  `).join('');
}
