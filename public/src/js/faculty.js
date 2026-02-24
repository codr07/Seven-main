export const facultyData = [
  {
    id: 1,
    name: "Tanushree Biswas",
    department: "Zoology and Graphics Design",
    education: ["B.Sc in Zoology,NSOU"],
    rating: 4.5,
    image: "/public/assets/images/faculty/tanushree.png",
    linkedinUrl: "https://www.linkedin.com/in/tanushree-biswas-07365432a",
    expertise: ["Graphics Design", "Illustration", "Adobe Creative Suite", "Zoology"],
    bio: "Experienced instructor with passion for teaching"
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    gamesPlayed: [
      {
        category: "FPS",
        game: "Call of Duty Mobile",
        logoUrl: "https://www.svgrepo.com/show/515388/call-of-duty.svg",
        modeIcons: {
          mp: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/intel-cards/icons/jup_icon_mode_mp_control.png",
          br: "https://static.wikia.nocookie.net/callofduty/images/a/a3/BattleRoyale_Logo_Warzone_MW.png"
        },
        rankIcons: {
          mpLegendary: "/public/assets/components/icons/mp leggy.jpeg",
          brLegendary: "/public/assets/components/icons/br leggy.jpeg"
        },
        data: {
          mpRankCurrent: "Legendary",
          mpLegendaries: 2,
          brRankCurrent: "Legendary",
          brLegendaries: 1
        }
      }
    ],
    expertise: ["Strategic Leadership", "Business Development", "Innovation"],
    bio: "Visionary leader dedicated to transforming education"
  },
  {
    id: 2,
    name: "Sankha Saha",
    role: "Co-Founder & CTO",
    education: ["B.Sc Statistics, CU", "M.Sc Data Science, AUB"],
    image: "/public/assets/images/owners/Sankha.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/sankhasaha",
    portfolioUrl: "https://codrss.tech",
    gamesPlayed: [
      {
        category: "FPS",
        game: "Call of Duty Mobile",
        logoUrl: "https://www.svgrepo.com/show/515388/call-of-duty.svg",
        modeIcons: {
          mp: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/intel-cards/icons/jup_icon_mode_mp_control.png",
          br: "https://static.wikia.nocookie.net/callofduty/images/a/a3/BattleRoyale_Logo_Warzone_MW.png"
        },
        rankIcons: {
          mpLegendary: "/public/assets/components/icons/mp leggy.jpeg",
          brLegendary: "/public/assets/components/icons/br leggy.jpeg"
        },
        data: {
          mpRankCurrent: "Legendary",
          mpLegendaries: 9,
          brRankCurrent: "Legendary",
          brLegendaries: 12
        }
      },
      {
        category: "FPS",
        game: "Valorant",
        logoUrl: "https://images.icon-icons.com/3660/PNG/512/valorant_logo_play_riot_games_icon_228477.png",
        rankIcons: {
          peak: "https://cdn3.emoji.gg/emojis/6329-valorant-immortal-2.png",
          current: "https://cdn3.emoji.gg/emojis/4071-valorant-ascendant-3.png"
        },
        data: {
          serverName: "Mumbai",
          peakRankActSeason: "Immortal 2 #231 (Episode 8, Act 2)",
          currentRank: "Ascendant 3"
        }
      },
      {
        category: "FPS",
        game: "Counter-Strike 2",
        logoUrl: "https://ih1.redbubble.net/image.4940990177.8257/raf,360x360,075,t,fafafa:ca443f4786.jpg",
        data: {
          serverName: "India West",
          peakRankActSeason: "Legendary Eagle Master (Premier Season 1)",
          currentRank: "Legendary Eagle"
        }
      },
      {
        category: "Sports",
        game: "FIFA",
        logoUrl: "https://vectorseek.com/wp-content/uploads/2023/06/FIFA-Mobile-Logo-Vector-01.jpg",
        data: {
          peakOvr: 154,
          peakOvrSeasonYear: "Fifa Mobile (2021)",
          currentOvr: 112
        }
      },
      {
        category: "Strategy",
        game: "Chess",
        logoUrl: "https://www.shutterstock.com/image-vector/chess-pieces-vector-illustration-king-600nw-1940151418.jpg",
        data: {
          peakRating: 2100,
          currentRating: 1950
        }
      }
    ],
    research: [
      "Time Series Forecasting of High-Volatility Stock Prices for Major Technology Conglomerates: A Comparative Study Using Gated Recurrent Unit (GRU) Architectures",
      "Democratizing Machine Learning: A Foundational Study on AutoML Frameworks for Accessible AI",
      "Mitigating Feature Mapping and Barren Plateau Challenges in Quantum Support Vector Machines for Classical Dataset Classification"
    ],
    books: [
      "Coffee with C"
    ],
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
      <div class="flex flex-col sm:flex-row gap-3 w-full">
        <button type="button" data-profile-type="faculty" data-profile-id="${faculty.id}" class="view-profile-btn btn flex-1 bg-black text-white px-4 py-2 rounded-md text-center text-sm hover:bg-gray-800 transition">View Profile</button>
        <a href="${faculty.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="btn flex-1 bg-black text-white px-4 py-2 rounded-md text-center text-sm hover:bg-gray-800 transition">LinkedIn</a>
      </div>
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
        ${owner.education ? `<p class="text-sm text-gray-600"><span class="font-semibold">Education:</span> ${owner.education.join(", ")}</p>` : ''}
        <p class="text-sm text-gray-600"><span class="font-semibold">Expertise:</span> ${owner.expertise.join(", ")}</p>
        <p class="text-sm text-gray-600">${owner.bio}</p>
      </div>
      <div class="flex gap-3 w-full">
        <button type="button" data-profile-type="owner" data-profile-id="${owner.id}" class="view-profile-btn btn flex-1 bg-black text-white px-4 py-2 rounded-md text-center text-sm hover:bg-gray-800 transition">View Profile</button>
        <a href="${owner.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="btn flex-1 bg-black text-white px-4 py-2 rounded-md text-center text-sm hover:bg-gray-800 transition">LinkedIn</a>
      </div>
    </div>
  `).join('');
}

function createProfileModalIfNeeded() {
  if (document.getElementById('profile-modal')) {
    return;
  }

  const modal = document.createElement('div');
  modal.id = 'profile-modal';
  modal.className = 'fixed inset-0 z-50 hidden items-center justify-center bg-black/60 p-4';
  modal.innerHTML = `
    <div class="profile-modal-content bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto overscroll-contain rounded-xl border-2 border-dashed border-black/90 p-6 md:p-8 relative" data-native-scroll="true">
      <button type="button" class="close-profile-modal absolute top-4 right-4 text-xl font-bold px-3 py-1 border border-black rounded-md hover:bg-black hover:text-white transition">×</button>
      <div class="profile-modal-body"></div>
    </div>
  `;

  document.body.appendChild(modal);

  const modalContent = modal.querySelector('.profile-modal-content');
  if (modalContent) {
    modalContent.style.webkitOverflowScrolling = 'touch';
    modalContent.style.touchAction = 'pan-y';
  }

  modal.addEventListener('click', (event) => {
    if (event.target === modal || event.target.classList.contains('close-profile-modal')) {
      closeProfileModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeProfileModal();
    }
  });
}

function getProfileData(type, id) {
  if (type === 'faculty') {
    return facultyData.find((faculty) => faculty.id === id);
  }

  if (type === 'owner') {
    return ownerData.find((owner) => owner.id === id);
  }

  return null;
}

function buildProfileModalHtml(profile, type) {
  const headingLabel = type === 'faculty' ? 'Faculty Profile' : `${profile.role} Profile`;
  const secondaryLabel = type === 'faculty' ? 'Department' : 'Role';
  const secondaryValue = type === 'faculty' ? profile.department : profile.role;
  const renderGameData = (entry) => {
    if (entry.game === 'Call of Duty Mobile') {
      return `
        <p class="text-xs md:text-sm whitespace-nowrap flex items-center gap-2 min-w-max"><img src="${entry.modeIcons?.mp || ''}" alt="MP" class="w-4 h-4 object-contain"> MP Rank current: ${entry.rankIcons?.mpLegendary ? `<img src="${entry.rankIcons.mpLegendary}" alt="MP Legendary" class="w-4 h-4 rounded-sm object-cover">` : ''} ${entry.data.mpRankCurrent}</p>
        <p class="text-xs md:text-sm whitespace-nowrap min-w-max">Number of MP Legendaries: ${entry.data.mpLegendaries}</p>
        <p class="text-xs md:text-sm whitespace-nowrap flex items-center gap-2 min-w-max"><img src="${entry.modeIcons?.br || ''}" alt="BR" class="w-4 h-4 object-contain"> BR Rank current: ${entry.rankIcons?.brLegendary ? `<img src="${entry.rankIcons.brLegendary}" alt="BR Legendary" class="w-4 h-4 rounded-sm object-cover">` : ''} ${entry.data.brRankCurrent}</p>
        <p class="text-xs md:text-sm whitespace-nowrap min-w-max">Number of BR Legendaries: ${entry.data.brLegendaries}</p>
      `;
    }

    if (entry.game === 'Valorant') {
      return `
        <p class="text-xs md:text-sm whitespace-nowrap min-w-max">Server name: ${entry.data.serverName}</p>
        <p class="text-xs md:text-sm whitespace-nowrap flex items-center gap-2 min-w-max">Peak Rank with Act and season: ${entry.rankIcons?.peak ? `<img src="${entry.rankIcons.peak}" alt="Peak Rank" class="w-4 h-4 object-contain">` : ''} ${entry.data.peakRankActSeason}</p>
        <p class="text-xs md:text-sm whitespace-nowrap flex items-center gap-2 min-w-max">Current Rank: ${entry.rankIcons?.current ? `<img src="${entry.rankIcons.current}" alt="Current Rank" class="w-4 h-4 object-contain">` : ''} ${entry.data.currentRank}</p>
      `;
    }

    if (entry.game === 'Counter-Strike 2') {
      return `
        <p class="text-xs md:text-sm whitespace-nowrap min-w-max">Server name: ${entry.data.serverName}</p>
        <p class="text-xs md:text-sm whitespace-nowrap min-w-max">Peak Rank with Act and season: ${entry.data.peakRankActSeason}</p>
        <p class="text-xs md:text-sm whitespace-nowrap min-w-max">Current Rank: ${entry.data.currentRank}</p>
      `;
    }

    if (entry.game === 'FIFA') {
      return `
        <p class="text-xs md:text-sm whitespace-nowrap min-w-max">Peak OVR with season/year: ${entry.data.peakOvr} - ${entry.data.peakOvrSeasonYear}</p>
        <p class="text-xs md:text-sm whitespace-nowrap min-w-max">Current OVR: ${entry.data.currentOvr}</p>
      `;
    }

    if (entry.game === 'Chess') {
      return `
        <p class="text-xs md:text-sm whitespace-nowrap min-w-max">Peak Rating: ${entry.data.peakRating}</p>
        <p class="text-xs md:text-sm whitespace-nowrap min-w-max">Current Rating: ${entry.data.currentRating}</p>
      `;
    }

    return '';
  };
  const educationBlock = profile.education
    ? `<p class="text-base text-gray-700"><span class="font-semibold">Education:</span> ${profile.education.join(', ')}</p>`
    : '';
  const ratingBlock = type === 'faculty'
    ? `
      <div class="flex items-center gap-3 mt-2">
        <span class="font-semibold text-gray-700">Rating:</span>
        <div class="flex gap-1">${renderStars(profile.rating)}</div>
      </div>
    `
    : '';
  const gamesBlock = profile.gamesPlayed && profile.gamesPlayed.length
    ? `
      <div class="mt-2">
        <p class="font-semibold text-gray-800">Games Played & Ranks</p>
        <div class="mt-2 flex flex-col gap-2">
          ${profile.gamesPlayed.map((entry) => `
            <div class="border border-dashed border-black/60 rounded-md p-3">
              <div class="flex items-start justify-between gap-3">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-md border border-dashed border-black/70 flex items-center justify-center overflow-hidden bg-white">
                    <img src="${entry.logoUrl || '/public/assets/images/img/thumb.png'}" alt="${entry.game} logo" class="w-8 h-8 object-contain" loading="lazy">
                  </div>
                  <div>
                    <p class="font-semibold text-gray-800">${entry.game}</p>
                    <p class="text-xs text-gray-600">${entry.category}</p>
                  </div>
                </div>
                <i class="ri-gamepad-line text-xl text-gray-700"></i>
              </div>
              <div class="mt-1 flex flex-col gap-1 text-gray-700 overflow-x-auto pb-1">
                ${renderGameData(entry)}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `
    : '';
  const researchBlock = profile.research && profile.research.length
    ? `
      <div class="mt-2 border border-dashed border-black/40 rounded-md p-3 bg-gray-50/60">
        <p class="font-semibold text-gray-800">Research</p>
        <ul class="mt-2 list-disc pl-6 flex flex-col gap-3 text-gray-700 leading-7 text-[15px]">
          ${profile.research.map((topic) => `<li class="break-words pr-2">${topic}</li>`).join('')}
        </ul>
      </div>
    `
    : '';
  const booksBlock = profile.books && profile.books.length
    ? `
      <div class="mt-2 border border-dashed border-black/40 rounded-md p-3 bg-gray-50/60">
        <p class="font-semibold text-gray-800">Written Books</p>
        <ul class="mt-2 list-disc pl-6 flex flex-col gap-3 text-gray-700 leading-7 text-[15px]">
          ${profile.books.map((book) => `<li class="break-words pr-2">${book}</li>`).join('')}
        </ul>
      </div>
    `
    : '';

  return `
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
      <div class="md:col-span-1 flex flex-col items-center gap-4">
        <img src="${profile.image}" alt="${profile.name}" class="w-52 h-52 object-cover rounded-full border-2 border-dashed border-black/90">
        <div class="w-full flex flex-col gap-3">
          <a href="${profile.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="btn w-full bg-black text-white px-4 py-2 rounded-md text-center text-sm hover:bg-gray-800 transition">LinkedIn</a>
          ${profile.portfolioUrl ? `<a href="${profile.portfolioUrl}" target="_blank" rel="noopener noreferrer" class="btn w-full bg-black text-white px-4 py-2 rounded-md text-center text-sm hover:bg-gray-800 transition">Portfolio</a>` : ''}
        </div>
      </div>
      <div class="md:col-span-2 flex flex-col gap-4">
        <p class="text-sm uppercase tracking-wide text-gray-500">${headingLabel}</p>
        <h4 class="text-3xl font-bold">${profile.name}</h4>
        <p class="text-base text-gray-700"><span class="font-semibold">${secondaryLabel}:</span> ${secondaryValue}</p>
        ${educationBlock}
        ${ratingBlock}
        <p class="text-base text-gray-700"><span class="font-semibold">Expertise:</span> ${profile.expertise.join(', ')}</p>
        ${gamesBlock}
        ${researchBlock}
        ${booksBlock}
        <div class="mt-2">
          <p class="font-semibold text-gray-800">Bio</p>
          <p class="text-gray-700 leading-relaxed mt-1">${profile.bio}</p>
        </div>
      </div>
    </div>
  `;
}

function openProfileModal(type, id) {
  createProfileModalIfNeeded();

  const profile = getProfileData(type, id);
  const modal = document.getElementById('profile-modal');
  const modalBody = modal?.querySelector('.profile-modal-body');

  if (!profile || !modal || !modalBody) {
    return;
  }

  modalBody.innerHTML = buildProfileModalHtml(profile, type);
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';

  if (window.customSmoothScroll && typeof window.customSmoothScroll.pause === 'function') {
    window.customSmoothScroll.pause();
  }
}

function closeProfileModal() {
  const modal = document.getElementById('profile-modal');

  if (!modal) {
    return;
  }

  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';

  if (window.customSmoothScroll && typeof window.customSmoothScroll.resume === 'function') {
    window.customSmoothScroll.resume();
  }
}

export function initializeProfileView() {
  createProfileModalIfNeeded();

  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('.view-profile-btn');

    if (!trigger) {
      return;
    }

    const profileType = trigger.dataset.profileType;
    const profileId = Number(trigger.dataset.profileId);

    if (!profileType || Number.isNaN(profileId)) {
      return;
    }

    openProfileModal(profileType, profileId);
  });
}
