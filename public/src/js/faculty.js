export const facultyData = [
  {
    id: 1,
    name: "Ritam Roy",
    department: "STEM and Literature",
    education: ["10 + 2 , CBSE"],
    rating: 5,
    image: "/public/assets/images/owners/Ritam.jpeg",
    linkedinUrl: "#",
    expertise: ["English", "Mathematics", "Science", "Literature"],
    bio: "Expert in STEM and Literature education"
  },
  {
    id: 2,
    name: "Sankha Saha",
    department: "Mathematics, Statistics, Technology",
    education: ["B.Sc Statistics, CU","M.Sc Data Sc., AUB"],
    rating: 5,
    image: "/public/assets/images/owners/Sankha.jpeg",
    linkedinUrl: "#",
    expertise: ["Mathematics", "Statistics", "Data Science", "Technology"],
    bio: "Expert in Mathematics, Statistics, Technology and Innovation"
  },
  {
    id: 3,
    name: "Tanushree Biswas",
    department: "Zoology and Graphics Design",
    education: ["B.Sc in Zoology,NSOU"],
    rating: 4.5,
    image: "/public/assets/images/faculty/tanushree.png",
    linkedinUrl: "#",
    expertise: ["Graphics Design", "Illustration", "Adobe Creative Suite", "Zoology"],
    bio: "Experienced instructor with passion for teaching"
  },
  {
    id: 4,
    name: "Rajat Howlader",
    department: "Mathematics and Statistics",
    education: ["B.Sc in Statistics, CU"],
    rating: 4.5,
    image: "/public/assets/images/faculty/rajat.png",
    linkedinUrl: "https://www.linkedin.com/in/rajat-howlader-516a8a317",
    expertise: ["Machine Learning", "Data Analysis", "Python"],
    bio: "Research-focused educator specializing in Mathematics and Statistics"
  },
  {
    id: 5,
    name: "Jayanta Dey",
    department: "School Education",
    education: ["10 + 2 , CBSE"],
    rating: 4,
    image: "/public/assets/images/faculty/jayanta.png",
    linkedinUrl: "https://www.linkedin.com/in/joyanta-dey-8b1a943b2?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    expertise: ["Mathematics", "Science", "WBBSE Curriculum"],
    bio: "Dedicated teacher with expertise in early education and WBBSE curriculum"
  },
  {
    id: 6,
    name: "Rahul Sen",
    department: "School Education",
    education: ["B.Com Accountancy"],
    rating: 4.1,
    image: "/public/assets/images/faculty/rahul.png",
    linkedinUrl: "#",
    expertise: ["English", "Mathematics", "Science", "WBBSE Curriculum"],
    bio: "Expert in teaching early education and WBBSE curriculum"
  },
  {
    id: 7,
    name: "Payel Saha",
    department: "Full Stack Development",
    education: ["M.Tech", "B.Tech"],
    rating: 4.9,
    image: "/public/assets/images/faculty/female.jpg",
    linkedinUrl: "#",
    expertise: ["React", "Node.js", "Database Design"],
    bio: "Industry veteran with hands-on development experience"
  },
  {
    id: 8,
    name: "Vansh Bhatnagar",
    department: "Automation and robotics",
    education: ["B.Tech Electrical Engineering"],
    rating: 4.4,
    image: "/public/assets/images/faculty/vansh.png",
    linkedinUrl: "https://www.linkedin.com/in/vansh-bhatnagar-80ab051b5",
    expertise: ["Automation", "Robotics", "Control Systems"],
    bio: "Expert in automation and robotics with practical industry experience"
  }
];

export const ownerData = [
  {
    id: 1,
    name: "Ritam Roy",
    role: "Founder & CEO",
    image: "/public/assets/images/owners/Ritam.jpeg",
    linkedinUrl: "#",
    portfolioUrl: "#",
    expertise: ["Strategic Leadership", "Business Development", "Innovation"],
    bio: "Visionary leader dedicated to transforming education"
  },
  {
    id: 2,
    name: "Sankha Saha",
    role: "Co-Founder & CTO",
    image: "/public/assets/images/owners/Sankha.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/sankhasaha",
    portfolioUrl: "https://codrss.tech",
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
