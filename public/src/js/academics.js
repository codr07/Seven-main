import { escapeHtml, sanitizeUrl } from "./security.js";

const academics = [
  {
    category: "Academic Programs & Support",
    items: [
      {
        cover: "public/assets/images/img/thumb.png",
        title: "Classes 1-4",
        shortDescription:
          "Foundational tutoring with personalized attention to build strong basics in core subjects for Classes 1 to 4.",
        price: "Contact for details",
        link: "/contact.html",
        viewDetails: {
          cover: "public/assets/images/img/thumb.png",
          title: "Classes 1-4 - Foundational Tutoring",
          short_desc:
            "Our Classes 1-4 program focuses on building a strong foundation in core subjects like Math, English, and Science. With personalized attention and engaging teaching methods, we help young learners develop essential skills and confidence for their academic journey.",
          details: [
            "Personalized Attention: Small class sizes and one-on-one sessions to cater to individual learning needs.",
            "Engaging Curriculum: Interactive lessons and activities designed to make learning fun and effective.",
            "Experienced Educators: Skilled teachers with expertise in early childhood education.",
            "Progress Tracking: Regular assessments and feedback to monitor growth and areas for improvement.",
          ],
          why_choose_this_course:
            "Our Classes 1-4 program is designed to nurture young minds with a strong academic foundation. We focus on personalized learning, engaging content, and expert guidance to ensure every child thrives in their early educational years.",
          certification_available: false,
          certification_cost: "₹400",
          public_review:
            "This program has been a game-changer for my child! The personalized attention and engaging lessons have made a huge difference in their confidence and academic performance. Highly recommend for parents looking to give their kids a strong start!",
        }
      },
      {
        title: "Classes 5-6",
        cover: "public/assets/images/img/thumb.png",
        shortDescription:
          "Structured academic support for Classes 5 to 6, focused on concept clarity, regular practice, and exam readiness.",
        price: "Contact for details",
        link: "/contact.html",
        viewDetails: {
          cover: "public/assets/images/img/thumb.png",
          title: "Classes 5-6 - Structured Academic Support",
          short_desc:
            "Our Classes 5-6 program strengthens core concepts and develops exam confidence through structured teaching, regular practice, and focused guidance.",
          details: [
            "Concept Clarity: Topic-wise teaching to build strong fundamentals across key school subjects.",
            "Regular Practice: Worksheets, assignments, and revision plans to improve consistency.",
            "Exam Readiness: Test strategies and time-management techniques for better scores.",
            "Doubt Resolution: Dedicated sessions to clear doubts and reinforce weak areas.",
          ],
          why_choose_this_course:
            "This program is ideal for students who need strong academic discipline, continuous support, and measurable improvement from middle to secondary school levels.",
          certification_available: false,
          certification_cost: "₹500",
          public_review:
            "The structured approach helped my child become more confident and consistent in studies. The regular tests and feedback made a clear difference.",
        },
      },
      {
        title: "Classes 7-8",
        cover: "public/assets/images/img/thumb.png",
        shortDescription:
          "Structured academic support for Classes 7 to 8, focused on concept clarity, regular practice, and exam readiness.",
        price: "Contact for details",
        link: "/contact.html",
        viewDetails: {
          cover: "public/assets/images/img/thumb.png",
          title: "Classes 7-8 - Structured Academic Support",
          short_desc:
            "Our Classes 7-8 program strengthens core concepts and develops exam confidence through structured teaching, regular practice, and focused guidance.",
          details: [
            "Concept Clarity: Topic-wise teaching to build strong fundamentals across key school subjects.",
            "Regular Practice: Worksheets, assignments, and revision plans to improve consistency.",
            "Exam Readiness: Test strategies and time-management techniques for better scores.",
            "Doubt Resolution: Dedicated sessions to clear doubts and reinforce weak areas.",
          ],
          why_choose_this_course:
            "This program is ideal for students who need strong academic discipline, continuous support, and measurable improvement from middle to secondary school levels.",
          certification_available: false,
          certification_cost: "₹550",
          public_review:
            "The structured approach helped my child become more confident and consistent in studies. The regular tests and feedback made a clear difference.",
        },
      },
      {
        title: "Classes 9-10",
        cover: "public/assets/images/img/thumb.png",
        shortDescription:
          "Structured academic support for Classes 9 to 10, focused on concept clarity, regular practice, and exam readiness.",
        price: "Contact for details",
        link: "/contact.html",
        viewDetails: {
          cover: "public/assets/images/img/thumb.png",
          title: "Classes 9-10 - Structured Academic Support",
          short_desc:
            "Our Classes 9-10 program strengthens core concepts and develops exam confidence through structured teaching, regular practice, and focused guidance.",
          details: [
            "Concept Clarity: Topic-wise teaching to build strong fundamentals across key school subjects.",
            "Regular Practice: Worksheets, assignments, and revision plans to improve consistency.",
            "Exam Readiness: Test strategies and time-management techniques for better scores.",
            "Doubt Resolution: Dedicated sessions to clear doubts and reinforce weak areas.",
          ],
          why_choose_this_course:
            "This program is ideal for students who need strong academic discipline, continuous support, and measurable improvement from middle to secondary school levels.",
          certification_available: false,
          certification_cost: "₹600",
          public_review:
            "The structured approach helped my child become more confident and consistent in studies. The regular tests and feedback made a clear difference.",
        },
      },
      {
        title: "Classes 11",
        cover: "public/assets/images/img/thumb.png",
        shortDescription:
          "Specialized coaching for all stream students in Classes 11 and 12, including board and competitive exam preparation.",
        price: "Contact for details",
        link: "/contact.html",
        viewDetails: {
          cover: "public/assets/images/img/thumb.png",
          title: "Classes 11 - Specialized Coaching",
          short_desc:
            "Our Classes 11 coaching provides in-depth subject support for Science, Commerce, and Arts streams with strong focus on board and entrance exam preparation.",
          details: [
            "Stream-Specific Support: Tailored teaching for PCM, PCB, Commerce, and Humanities.",
            "Board Preparation: Chapter completion plans aligned with school syllabus and boards.",
            "Competitive Orientation: Foundation support for major entrance examinations.",
            "Performance Reviews: Frequent evaluations with personalized improvement plans.",
          ],
          why_choose_this_course:
            "This course combines conceptual depth, exam strategy, and targeted mentoring to help students perform confidently in high-stakes academic years.",
          certification_available: false,
          certification_cost: "₹800",
          public_review:
            "The coaching is focused and practical. I improved my board preparation and exam strategy a lot through regular practice and mentoring.",
        },
      },
      {
        title: "Classes 12",
        cover: "public/assets/images/img/thumb.png",
        shortDescription:
          "Structured academic support for Classes 12, focused on concept clarity, regular practice, and exam readiness.",
        price: "Contact for details",
        link: "/contact.html",
        viewDetails: {
          cover: "public/assets/images/img/thumb.png",
          title: "Classes 12 - Structured Academic Support",
          short_desc:
            "Our Classes 12 program strengthens core concepts and develops exam confidence through structured teaching, regular practice, and focused guidance.",
          details: [
            "Concept Clarity: Topic-wise teaching to build strong fundamentals across key school subjects.",
            "Regular Practice: Worksheets, assignments, and revision plans to improve consistency.",
            "Exam Readiness: Test strategies and time-management techniques for better scores.",
            "Doubt Resolution: Dedicated sessions to clear doubts and reinforce weak areas.",
          ],
          why_choose_this_course:
            "This program is ideal for students who need strong academic discipline, continuous support, and measurable improvement from middle to secondary school levels.",
          certification_available: false,
          certification_cost: "₹1000",
          public_review:
            "The structured approach helped my child become more confident and consistent in studies. The regular tests and feedback made a clear difference.",
        },
      },
      {
        title: "UG & PG Programs",
        cover: "public/assets/images/img/thumb.png",
        shortDescription:
          "Undergraduate: BCA, B.Tech, B.Sc Maths, Statistics, and BA English. Postgraduate: M.Sc Data Science, MCA, and M.Tech.",
        price: "Contact for details",
        link: "/contact.html",
        viewDetails: {
          cover: "public/assets/images/img/thumb.png",
          title: "UG & PG Programs - Advanced Academic Guidance",
          short_desc:
            "We provide comprehensive guidance for UG and PG learners across technical and non-technical programs, with academic mentoring and subject-focused support.",
          details: [
            "Program Coverage: Support for BCA, B.Tech, B.Sc, BA, MCA, M.Sc, and M.Tech tracks.",
            "Subject Depth: Advanced concept sessions for university-level coursework.",
            "Project Assistance: Guidance for assignments, mini-projects, and final submissions.",
            "Career Alignment: Academic pathways connected to career and skill goals.",
          ],
          why_choose_this_course:
            "This offering is designed for college students seeking deeper understanding, better grades, and practical direction in their academic journey.",
          certification_available: false,
          certification_cost: "₹1200",
          public_review:
            "Excellent support for my university subjects and projects. The mentors are knowledgeable and explain advanced topics very clearly.",
        },
      },
      {
        title: "Online Tutoring",
        cover: "public/assets/images/img/thumb.png",
        shortDescription:
          "One-on-one sessions tailored to your needs to improve understanding, study habits, and confidence.",
        price: "Contact for details",
        link: "/contact.html",
        viewDetails: {
          cover: "public/assets/images/img/thumb.png",
          title: "Personalized Tutoring - One-on-One Learning",
          short_desc:
            "Our personalized tutoring sessions focus on individual pace, strengths, and goals to deliver targeted academic improvement.",
          details: [
            "Individual Learning Plans: Customized lessons based on student needs and goals.",
            "Flexible Scheduling: Convenient session timings for school and college students.",
            "Focused Improvement: Intensive support for weak subjects and exam preparation.",
            "Confidence Building: Encouraging mentorship with regular progress discussions.",
          ],
          why_choose_this_course:
            "Perfect for learners who need dedicated attention, adaptive teaching, and fast academic progress through one-on-one guidance.",
          certification_available: false,
          certification_cost: "5% Discount on all",
          public_review:
            "The one-on-one format helped me understand difficult topics quickly. The sessions are very focused and motivating.",
        },
      },
      {
        title: "Progress Tracking & Analytics",
        cover: "public/assets/images/img/thumb.png",
        shortDescription:
          "Track strengths and improvement areas with detailed analytics and performance insights.",
        price: "Contact for details",
        link: "/contact.html",
        viewDetails: {
          cover: "public/assets/images/img/thumb.png",
          title: "Progress Tracking & Analytics - Performance Insights",
          short_desc:
            "We provide data-backed academic tracking to identify strengths, weaknesses, and actionable next steps for continuous improvement.",
          details: [
            "Performance Dashboards: Clear reports for tests and learning trends.",
            "Strength Analysis: Highlight areas of strong understanding.",
            "Gap Identification: Detect topics requiring focused attention.",
            "Action Plans: Personalized recommendations for next-stage improvement.",
          ],
          why_choose_this_course:
            "This feature ensures smarter learning decisions by converting performance data into practical strategies for better outcomes.",
          certification_available: false,
          certification_cost: "To be discussed",
          public_review:
            "The analytics reports made it easy to understand where to focus. It helped us plan studies in a much smarter way.",
        },
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

function escapeSvgText(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function createAcademicThumbnail(seedText, title, categoryLabel) {
  const seed = hashSeed(seedText);
  const hueA = seed % 360;
  const hueB = (seed * 1.7) % 360;
  const safeTitle = escapeSvgText(title);
  const safeCategoryLabel = escapeSvgText(categoryLabel);
  const initials =
    title
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0]?.toUpperCase() || "")
      .join("") || "A";
  const safeInitials = escapeSvgText(initials);

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
      <text x="70" y="150" font-size="46" font-family="Arial, sans-serif" fill="white" opacity="0.9">${safeCategoryLabel}</text>
      <text x="70" y="325" font-size="170" font-family="Arial, sans-serif" font-weight="700" fill="white">${safeInitials}</text>
      <text x="70" y="530" font-size="58" font-family="Arial, sans-serif" font-weight="600" fill="white">${safeTitle}</text>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function getUniqueAcademicCoverImage(item, category, index) {
  if (item.cover || item.thumbnail || item.coverImage) {
    return item.cover || item.thumbnail || item.coverImage;
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

function createAcademicSlug(title = "") {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function createAcademicImage(coverImage, title, badgeMeta) {
  const imageWrap = document.createElement("div");
  imageWrap.className =
    "relative w-full h-44 rounded-lg border border-black/10 overflow-hidden mb-4";

  const image = document.createElement("img");
  image.className = "w-full h-full object-cover";
  image.src = sanitizeUrl(coverImage, { allowDataImage: true, fallback: ACADEMICS_FALLBACK_IMAGE });
  image.alt = escapeHtml(title);
  image.loading = "lazy";

  const badge = document.createElement("span");
  badge.className =
    "absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-black/80 text-white px-3 py-1 text-xs font-semibold";
  const icon = document.createElement("i");
  icon.className = badgeMeta.icon;
  badge.append(icon, escapeHtml(badgeMeta.label));

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
      const typeSpan = document.createElement("span");
      typeSpan.className = "inline-flex items-center gap-2 rounded-full border border-black/20 px-3 py-1 text-sm font-medium text-gray-700";
      typeSpan.innerHTML = '<span class="h-2 w-2 rounded-full bg-red-500"></span>Type: Academic';
      const priceSpan = document.createElement("span");
      priceSpan.className = "text-lg font-bold text-gray-900";
      priceSpan.textContent = item.price;
      meta.append(typeSpan, priceSpan);

      const actionButton = document.createElement("a");
      actionButton.href = sanitizeUrl(card.dataset.link || "/contact.html");
      actionButton.className =
        "inline-flex items-center justify-center rounded-lg border border-black/20 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-black hover:text-white transition-colors";
      actionButton.textContent = "Book a Session";
      actionButton.setAttribute("aria-label", `Book session for ${item.title}`);

      const academicSlug = createAcademicSlug(item.title);

      const viewButton = document.createElement("a");
      viewButton.href = `academics-details.html?academic=${encodeURIComponent(academicSlug)}`;
      viewButton.className =
        "inline-flex items-center justify-center rounded-lg border border-black/20 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-black hover:text-white transition-colors";
      viewButton.textContent = "View Details";
      viewButton.setAttribute("aria-label", `View details for ${item.title}`);

      const actions = document.createElement("div");
      actions.className = "mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3";
      actions.append(viewButton, actionButton);

      card.append(imageWrap, title, shortDescription, meta, actions);
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

export { normalizedAcademics, createAcademicSlug };
