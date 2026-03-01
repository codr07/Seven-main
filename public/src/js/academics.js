const academics = [
  {
    category: "Academic Programs & Support",
    items: [
      {
        title: "Classes 1-4",
        shortDescription:
          "Foundational tutoring with personalized attention to build strong basics in core subjects for Classes 1 to 4.",
        price: "Contact for details",
        link: "/contact.html",
      },
      {
        title: "Classes 5-10",
        shortDescription:
          "Structured academic support for Classes 5 to 10, focused on concept clarity, regular practice, and exam readiness.",
        price: "Contact for details",
        link: "/contact.html",
      },
      {
        title: "Classes 11-12",
        shortDescription:
          "Specialized coaching for all stream students in Classes 11 and 12, including board and competitive exam preparation.",
        price: "Contact for details",
        link: "/contact.html",
      },
      {
        title: "UG & PG Programs",
        shortDescription:
          "Undergraduate: BCA, B.Tech, B.Sc Maths, Statistics, and BA English. Postgraduate: M.Sc Data Science, MCA, and M.Tech.",
        price: "Contact for details",
        link: "/contact.html",
      },
      {
        title: "Personalized Tutoring",
        shortDescription:
          "One-on-one sessions tailored to your needs to improve understanding, study habits, and confidence.",
        price: "Contact for details",
        link: "/contact.html",
      },
      {
        title: "Study Resources",
        shortDescription:
          "Access practice exams, flashcards, and interactive quizzes for exam preparation and better performance.",
        price: "Contact for details",
        link: "/contact.html",
      },
      {
        title: "Academic Coaching",
        shortDescription:
          "Goal-based coaching to improve time management, strategy, and long-term academic growth.",
        price: "Contact for details",
        link: "/contact.html",
      },
      {
        title: "Expert-Led Workshops",
        shortDescription:
          "Interactive workshops on practical topics delivered by industry experts and experienced educators.",
        price: "Contact for details",
        link: "/contact.html",
      },
      {
        title: "Progress Tracking & Analytics",
        shortDescription:
          "Track strengths and improvement areas with detailed analytics and performance insights.",
        price: "Contact for details",
        link: "/contact.html",
      },
      {
        title: "Mentorship Program",
        shortDescription:
          "Connect with mentors for guided academic and professional development.",
        price: "Contact for details",
        link: "/contact.html",
      },
    ],
  },
];

const ACADEMICS_FALLBACK_IMAGE = "/public/assets/images/img/thumb.png";

const ACADEMICS_CATEGORY_META = {
  "Academic Programs & Support": {
    icon: "ri-graduation-cap-line",
    label: "Academics",
  },
};

function getAcademicTitle(item) {
  return item.title || item.name || "Untitled Academic Item";
}

function normalizeAcademicItem(item) {
  const title = getAcademicTitle(item);
  const shortDescription =
    item.shortDescription ||
    item.short_desc ||
    item.Short_desc ||
    "Structured academic support designed for measurable learning outcomes.";

  return {
    ...item,
    title,
    shortDescription,
    price: item.price || "Contact for details",
    link: item.link || "/contact.html",
  };
}

const normalizedAcademics = academics.map((group) => ({
  ...group,
  items: Array.isArray(group.items)
    ? group.items.map(normalizeAcademicItem)
    : [],
}));

function hashSeed(seedText) {
  return seedText.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
}

function createAcademicThumbnail(seedText, title, categoryLabel) {
  const seed = hashSeed(seedText);
  const hueA = seed % 360;
  const hueB = (seed * 1.7) % 360;
  const initials =
    title
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0]?.toUpperCase() || "")
      .join("") || "A";

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="hsl(${hueA}, 85%, 55%)"/>
          <stop offset="100%" stop-color="hsl(${hueB}, 85%, 45%)"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="675" fill="url(#bg)"/>
      <rect x="36" y="36" width="1128" height="603" rx="24" fill="rgba(0,0,0,0.16)"/>
      <text x="70" y="150" font-size="46" font-family="Arial, sans-serif" fill="white" opacity="0.9">${categoryLabel}</text>
      <text x="70" y="325" font-size="170" font-family="Arial, sans-serif" font-weight="700" fill="white">${initials}</text>
      <text x="70" y="530" font-size="58" font-family="Arial, sans-serif" font-weight="600" fill="white">${title}</text>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function getUniqueAcademicCoverImage(item, category, index) {
  if (item.thumbnail || item.coverImage) {
    return item.thumbnail || item.coverImage;
  }

  const title = getAcademicTitle(item);
  const seedText = `${category}-${index}-${title}`;
  return createAcademicThumbnail(seedText, title, category);
}

function getAcademicsCategoryMeta(category) {
  return (
    ACADEMICS_CATEGORY_META[category] || {
      icon: "ri-book-open-line",
      label: "Academics",
    }
  );
}

function createAcademicImage(coverImage, title, badgeMeta) {
  const imageWrap = document.createElement("div");
  imageWrap.className =
    "relative w-full h-44 rounded-lg border border-black/10 overflow-hidden mb-4";

  const image = document.createElement("img");
  image.className = "w-full h-full object-cover";
  image.src = coverImage;
  image.alt = title;
  image.loading = "lazy";

  const badge = document.createElement("span");
  badge.className =
    "absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-black/80 text-white px-3 py-1 text-xs font-semibold";
  badge.innerHTML = `<i class="${badgeMeta.icon}"></i>${badgeMeta.label}`;

  imageWrap.append(image, badge);
  return imageWrap;
}

function renderAcademics() {
  const container = document.querySelector(".main.academics");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  normalizedAcademics.forEach((group) => {
    const section = document.createElement("section");
    section.className = "w-full flex flex-col gap-5";

    const heading = document.createElement("h2");
    heading.className = "text-3xl font-bold text-gray-800";
    heading.textContent = group.category;
    section.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "grid grid-cols-1 md:grid-cols-2 gap-6 w-full";

    group.items.forEach((item, index) => {
      const card = document.createElement("article");
      card.className =
        "bg-white/70 backdrop-blur-sm rounded-xl border border-black/10 p-5 shadow-sm flex flex-col justify-between h-full transition-transform hover:scale-105";
      card.dataset.link = item.link;

      const badgeMeta = getAcademicsCategoryMeta(group.category);
      const imageWrap = createAcademicImage(
        getUniqueAcademicCoverImage(item, group.category, index) ||
          ACADEMICS_FALLBACK_IMAGE,
        item.title,
        badgeMeta,
      );

      const title = document.createElement("h3");
      title.className = "text-xl font-semibold mb-2 text-gray-900";
      title.textContent = item.title;

      const shortDescription = document.createElement("p");
      shortDescription.className = "text-sm text-gray-700 leading-relaxed mb-4";
      shortDescription.textContent = item.shortDescription;

      const meta = document.createElement("div");
      meta.className =
        "sm:flex items-center sm:justify-between sm:w-full mt-2 pt-3 border-t border-black/10";
      meta.innerHTML = `
        <span class="inline-flex items-center gap-2 rounded-full border border-black/20 px-3 py-1 text-sm font-medium text-gray-700">
          <span class="h-2 w-2 rounded-full bg-red-500"></span>
          Type: Academic
        </span>
        <span class="text-lg font-bold text-gray-900">${item.price}</span>
      `;

      const actionButton = document.createElement("a");
      actionButton.href = card.dataset.link || "/contact.html";
      actionButton.className =
        "mt-4 inline-flex items-center justify-center rounded-lg border border-black/20 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-black hover:text-white transition-colors";
      actionButton.textContent = "Book a Session";
      actionButton.setAttribute("aria-label", `Book session for ${item.title}`);

      card.append(imageWrap, title, shortDescription, meta, actionButton);
      grid.appendChild(card);
    });

    section.appendChild(grid);
    container.appendChild(section);
  });

  const book = document.createElement("div");
  book.className = "book flex items-center relative w-full justify-center mt-2";
  book.innerHTML = `
    <a href="/contact.html" class="flex items-center gap-5 text-white bg-blue-600 px-4 py-2 rounded-lg items-center justify-center">
      <div class="beep flex items-center gap-2 justify-center">
        <div class="dot"></div>
      </div>
      Book a Session
    </a>
  `;
  container.appendChild(book);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderAcademics);
} else {
  renderAcademics();
}
