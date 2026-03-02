import { escapeHtml, sanitizeUrl } from "./security.js";

const services = [
  {
    category: "Academics and Certification",
    items: [
      {
        coverImage: "public/assets/images/img/thumb.png",
        title: "Mock and Rock (Mock Exams)",
        description: [
          "Attempt real exam-style mock tests designed around current academic and certification patterns.",
          "Get section-wise performance breakdowns to identify weak areas, time-management gaps, and scoring trends.",
          "Receive targeted improvement strategies and revision guidance to boost confidence before final exams."
        ],
        price: "₹500 - ₹2000",
        link: "contact.html",
        view_details: {
          cover: "public/assets/images/img/thumb.png",
          title: "Mock and Rock (Mock Exams)",
          short_desc:
            "Attempt real exam-style mock tests designed around current academic and certification patterns.",
          description: [
          "Attempt real exam-style mock tests designed around current academic and certification patterns.",
          "Get section-wise performance breakdowns to identify weak areas, time-management gaps, and scoring trends.",
          "Receive targeted improvement strategies and revision guidance to boost confidence before final exams."
        ],
          why_choose_this_course:
            "This course is ideal for students preparing for competitive exams or certifications who want to simulate the actual test environment, identify their strengths and weaknesses, and receive actionable feedback to improve their performance before the final exam.",
          certification_available: false,
          certification_cost: "N/A",
          public_review:
            "Students consistently rate this course highly for its in-depth coverage of mock exam preparation and practical feedback.",
        }
      },
      {
        coverImage: "public/assets/images/img/thumb.png",
        title: "Project Documentation",
        description: [
          "Create complete project reports with proper structure, professional language, and institution-ready formatting.",
          "Include system architecture, flowcharts, modules, and technical explanations in a clean and readable way.",
          "Get support for editing, proofreading, and final polishing before submission or presentation."
        ],
        price: "₹500 - ₹2000",
        link: "contact.html",
        view_details: {
          cover: "public/assets/images/img/thumb.png",
          title: "Project Documentation",
          short_desc:
            "Create complete project reports with proper structure, professional language, and institution-ready formatting.",
          description: [
            "Create complete project reports with proper structure, professional language, and institution-ready formatting.",
            "Include system architecture, flowcharts, modules, and technical explanations in a clean and readable way.",
            "Get support for editing, proofreading, and final polishing before submission or presentation."
          ],
          why_choose_this_course:
            "This service is best for students and teams who want professionally structured, institution-ready documentation with clear technical presentation.",
          certification_available: false,
          certification_cost: "N/A",
          public_review:
            "Users value the clarity, formatting quality, and polished final output that improves academic and project submissions.",
        }
      },
      {
        coverImage: "public/assets/images/img/thumb.png",
        title: "Thesis Documentation",
        description: [
          "Develop end-to-end thesis documents with strong research structure, clarity, and academic tone.",
          "Apply required citation style, chapter formatting, references, and review-friendly layout standards.",
          "Prepare a polished final version suitable for departmental evaluation, viva, and archive submission."
        ],
        price: "₹2000 onwards",
        link: "contact.html",
        view_details: {
          cover: "public/assets/images/img/thumb.png",
          title: "Thesis Documentation",
          short_desc:
            "Develop end-to-end thesis documents with strong research structure, clarity, and academic tone.",
          description: [
            "Develop end-to-end thesis documents with strong research structure, clarity, and academic tone.",
            "Apply required citation style, chapter formatting, references, and review-friendly layout standards.",
            "Prepare a polished final version suitable for departmental evaluation, viva, and archive submission."
          ],
          why_choose_this_course:
            "This service is ideal for final-year scholars who need complete thesis support with academic compliance, readability, and submission-ready quality.",
          certification_available: false,
          certification_cost: "N/A",
          public_review:
            "Learners highlight this service for reducing thesis stress and delivering well-structured, review-friendly final documents.",
        }
      }
    ]
  },
  {
    category: "Web Services",
    addons: [
      "Admin Panel - Rs. 12,000",
      "Custom Database - Rs. 10,000",
      "Payment Gateway - Rs. 8,000",
      "Blog / CMS - Rs. 10,000",
      "Advanced SEO - Rs. 12,000",
      "AI Chatbot - Rs. 15,000",
      "API Integration - Rs. 8,000",
      "3D UI - Rs. 25,000",
      "Analytics Dashboard - Rs. 20,000",
      "ERP Integration - Rs. 40,000"
    ],
    items: [
      {
        coverImage: "public/assets/images/img/thumb.png",
        title: "Developer Portfolio Website",
        description: [
          "Basic: Rs. 4,999 - 9,999.",
          "Professional: Rs. 15,000 - 30,000.",
          "Premium: Rs. 60,000 - 1,20,000.",
          "Enterprise: Rs. 1,80,000 - 3,50,000."
        ],
        price: "Rs. 4,999 - 3,50,000",
        link: "contact.html",
        view_details: {
          cover: "public/assets/images/img/thumb.png",
          title: "Developer Portfolio Website",
          short_desc:
            "Build a modern developer portfolio website tailored to your skills, projects, and professional brand.",
          description: [
            "Basic: Rs. 4,999 - 9,999.",
            "Professional: Rs. 15,000 - 30,000.",
            "Premium: Rs. 60,000 - 1,20,000.",
            "Enterprise: Rs. 1,80,000 - 3,50,000."
          ],
          why_choose_this_course:
            "Perfect for developers who want a strong first impression with responsive design, project highlights, and recruiter-friendly presentation.",
          certification_available: false,
          certification_cost: "N/A",
          public_review:
            "Clients appreciate the clean UI, performance, and conversion-focused portfolio structure.",
        }
      },
      {
        coverImage: "public/assets/images/img/thumb.png",
        title: "IT Executive / Corporate Portfolio",
        description: [
          "Basic: Rs. 8,000 - 15,000.",
          "Professional: Rs. 30,000 - 60,000.",
          "Premium: Rs. 1,20,000 - 2,50,000.",
          "Enterprise: Rs. 3,00,000 - 6,00,000."
        ],
        price: "Rs. 8,000 - 6,00,000",
        link: "contact.html",
        view_details: {
          cover: "public/assets/images/img/thumb.png",
          title: "IT Executive / Corporate Portfolio",
          short_desc:
            "Create a premium corporate portfolio website with polished branding and stakeholder-focused messaging.",
          description: [
            "Basic: Rs. 8,000 - 15,000.",
            "Professional: Rs. 30,000 - 60,000.",
            "Premium: Rs. 1,20,000 - 2,50,000.",
            "Enterprise: Rs. 3,00,000 - 6,00,000."
          ],
          why_choose_this_course:
            "Best suited for professionals and executives who need a premium digital presence that reflects authority and credibility.",
          certification_available: false,
          certification_cost: "N/A",
          public_review:
            "Business users rate this service highly for brand consistency, professional look, and communication clarity.",
        }
      },
      {
        coverImage: "public/assets/images/img/thumb.png",
        title: "Ecommerce Development",
        description: [
          "Basic: Rs. 20,000 - 40,000.",
          "Advanced: Rs. 80,000 - 1,50,000.",
          "Premium: Rs. 2,50,000 - 6,00,000.",
          "Enterprise: Rs. 8,00,000 - 25,00,000."
        ],
        price: "Rs. 20,000 - 25,00,000",
        link: "contact.html",
        view_details: {
          cover: "public/assets/images/img/thumb.png",
          title: "Ecommerce Development",
          short_desc:
            "Launch an end-to-end ecommerce platform with scalable architecture, optimized checkout, and growth-ready features.",
          description: [
            "Basic: Rs. 20,000 - 40,000.",
            "Advanced: Rs. 80,000 - 1,50,000.",
            "Premium: Rs. 2,50,000 - 6,00,000.",
            "Enterprise: Rs. 8,00,000 - 25,00,000."
          ],
          why_choose_this_course:
            "Ideal for businesses planning reliable online sales with secure payment flow, catalog scalability, and conversion-focused UX.",
          certification_available: false,
          certification_cost: "N/A",
          public_review:
            "Store owners praise this service for robust execution, smooth user journey, and measurable business outcomes.",
        }
      },
      {
        coverImage: "public/assets/images/img/thumb.png",
        title: "LMS Platform Development",
        description: [
          "Basic: Rs. 40,000 - 75,000.",
          "Advanced: Rs. 1,50,000 - 3,00,000.",
          "Premium: Rs. 5,00,000 - 12,00,000.",
          "Enterprise: Rs. 15,00,000 - 50,00,000."
        ],
        price: "Rs. 40,000 - 50,00,000",
        link: "contact.html",
        view_details: {
          cover: "public/assets/images/img/thumb.png",
          title: "LMS Platform Development",
          short_desc:
            "Build a complete learning management platform with course delivery, user roles, tracking, and assessment workflows.",
          description: [
            "Basic: Rs. 40,000 - 75,000.",
            "Advanced: Rs. 1,50,000 - 3,00,000.",
            "Premium: Rs. 5,00,000 - 12,00,000.",
            "Enterprise: Rs. 15,00,000 - 50,00,000."
          ],
          why_choose_this_course:
            "Recommended for educators and organizations that need a flexible, scalable LMS with strong learner and admin experiences.",
          certification_available: false,
          certification_cost: "N/A",
          public_review:
            "Institutes report improved learner engagement and smoother content operations after deployment.",
        }
      }
    ]
  },
  {
    category: "Public Commercial",
    items: [
      {
        coverImage: "public/assets/images/img/thumb.png",
        title: "Custom Desktop Design",
        description: [
          "Design a personalized desktop setup with custom themes, widgets, icons, and wallpaper styling.",
          "Optimize layout, color harmony, and visual hierarchy for both aesthetics and daily usability.",
          "Get a complete look-and-feel package aligned with your workflow, personality, and device setup."
        ],
        price: "₹2000",
        link: "contact.html",
        view_details: {
          cover: "public/assets/images/img/thumb.png",
          title: "Custom Desktop Design",
          short_desc:
            "Design a personalized desktop setup with custom themes, widgets, icons, and wallpaper styling.",
          description: [
            "Design a personalized desktop setup with custom themes, widgets, icons, and wallpaper styling.",
            "Optimize layout, color harmony, and visual hierarchy for both aesthetics and daily usability.",
            "Get a complete look-and-feel package aligned with your workflow, personality, and device setup."
          ],
          why_choose_this_course:
            "Great for creators and professionals who want a premium desktop experience optimized for both appearance and productivity.",
          certification_available: false,
          certification_cost: "N/A",
          public_review:
            "Users love the personalized styling and noticeable improvement in their day-to-day visual workflow.",
        }
      },
      {
        coverImage: "public/assets/images/img/thumb.png",
        title: "Poster and Related Design",
        description: [
          "Create eye-catching poster concepts tailored for events, campaigns, launches, and promotions.",
          "Balance typography, visual assets, and messaging for high impact in print and digital formats.",
          "Deliver ready-to-use design outputs optimized for social media, banners, and physical prints."
        ],
        price: "₹500 - ₹1000",
        link: "contact.html",
        view_details: {
          cover: "public/assets/images/img/thumb.png",
          title: "Poster and Related Design",
          short_desc:
            "Create eye-catching poster concepts tailored for events, campaigns, launches, and promotions.",
          description: [
            "Create eye-catching poster concepts tailored for events, campaigns, launches, and promotions.",
            "Balance typography, visual assets, and messaging for high impact in print and digital formats.",
            "Deliver ready-to-use design outputs optimized for social media, banners, and physical prints."
          ],
          why_choose_this_course:
            "Ideal for brands and event teams looking for fast, high-impact visuals that communicate clearly across channels.",
          certification_available: false,
          certification_cost: "N/A",
          public_review:
            "Clients consistently mention strong visual appeal, timely delivery, and platform-ready outputs.",
        }
      },
      {
        coverImage: "public/assets/images/img/thumb.png",
        title: "Album Design",
        description: [
          "Build premium album layouts with consistent visual storytelling, pacing, and aesthetic continuity.",
          "Arrange photos, titles, and decorative elements using balanced composition and clean typography.",
          "Produce print-ready and digital-ready album files with polished finishing and professional quality."
        ],
        price: "₹2000 - ₹5000",
        link: "contact.html",
        view_details: {
          cover: "public/assets/images/img/thumb.png",
          title: "Album Design",
          short_desc:
            "Build premium album layouts with consistent visual storytelling, pacing, and aesthetic continuity.",
          description: [
            "Build premium album layouts with consistent visual storytelling, pacing, and aesthetic continuity.",
            "Arrange photos, titles, and decorative elements using balanced composition and clean typography.",
            "Produce print-ready and digital-ready album files with polished finishing and professional quality."
          ],
          why_choose_this_course:
            "Perfect for clients who want elegant storytelling-oriented album layouts for personal, brand, or event collections.",
          certification_available: false,
          certification_cost: "N/A",
          public_review:
            "Customers praise the premium composition style and polished final presentation in both print and digital formats.",
        }
      }
    ]
  }
];

const SERVICE_FALLBACK_IMAGE = "/public/assets/images/img/thumb.png";

const SERVICE_CATEGORY_META = {
  "Academics and Certification": { icon: "ri-graduation-cap-line", label: "Academic" },
  "Web Services": { icon: "ri-global-line", label: "Web" },
  "Public Commercial": { icon: "ri-store-2-line", label: "Commercial" }
};

function getServiceTitle(service) {
  return service.title || service.name || "Untitled Service";
}

function normalizeServiceItem(service) {
  const title = getServiceTitle(service);
  const shortDescription =
    service.shortDescription ||
    service.short_desc ||
    service.Short_desc ||
    (Array.isArray(service.description) && service.description.length > 0
      ? service.description[0]
      : "Tailored service designed for practical and measurable outcomes.");

  return {
    ...service,
    title,
    shortDescription,
    price: service.price || "TBD",
    link: service.link || "#",
  };
}

const normalizedServices = services.map((group) => ({
  ...group,
  items: Array.isArray(group.items)
    ? group.items.map(normalizeServiceItem)
    : [],
}));

function hashSeed(seedText) {
  return seedText.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
}

function createServiceThumbnail(seedText, title, categoryLabel) {
  const seed = hashSeed(seedText);
  const hueA = seed % 360;
  const hueB = (seed * 1.8) % 360;
  const initials =
    title
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0]?.toUpperCase() || "")
      .join("") || "S";

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
      <text x="70" y="150" font-size="46" font-family="Arial, sans-serif" fill="white" opacity="0.9">${escapeHtml(categoryLabel)}</text>
      <text x="70" y="325" font-size="170" font-family="Arial, sans-serif" font-weight="700" fill="white">${escapeHtml(initials)}</text>
      <text x="70" y="530" font-size="58" font-family="Arial, sans-serif" font-weight="600" fill="white">${escapeHtml(title)}</text>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function getUniqueServiceCoverImage(service, category, index) {
  if (service.thumbnail || service.coverImage) {
    return service.thumbnail || service.coverImage;
  }

  const title = getServiceTitle(service);
  const seedText = `${category}-${index}-${title}`;
  return createServiceThumbnail(seedText, title, category);
}

function getServiceShortDescription(service) {
  if (service.shortDescription) {
    return service.shortDescription;
  }

  if (Array.isArray(service.description) && service.description.length > 0) {
    return service.description[0];
  }

  return "Tailored service designed for practical and measurable outcomes.";
}

function getServiceCategoryMeta(category) {
  return SERVICE_CATEGORY_META[category] || { icon: "ri-service-line", label: "Service" };
}

function createServiceSlug(title = "") {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function createServiceImage(coverImage, title, badgeMeta) {
  const imageWrap = document.createElement("div");
  imageWrap.className = "relative w-full h-44 rounded-lg border border-black/10 overflow-hidden mb-4";

  const image = document.createElement("img");
  image.className = "w-full h-full object-cover";
  image.src = sanitizeUrl(coverImage, { allowDataImage: true, fallback: SERVICE_FALLBACK_IMAGE });
  image.alt = escapeHtml(title);
  image.loading = "lazy";

  const badge = document.createElement("span");
  badge.className = "absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-black/80 text-white px-3 py-1 text-xs font-semibold";
  const icon = document.createElement("i");
  icon.className = badgeMeta.icon;
  badge.append(icon, escapeHtml(badgeMeta.label));

  imageWrap.append(image, badge);
  return imageWrap;
}

function createAddonsMarkup(addons) {
  return addons
    .map(
      (addon) => `<label class="flex items-start gap-2 text-sm text-gray-700"><input type="checkbox" name="Add-ons[]" value="${escapeHtml(addon)}" class="mt-1"><span>${escapeHtml(addon)}</span></label>`
    )
    .join("");
}

function injectWebServiceForm(target, addons) {
  target.innerHTML = `
    <div class="w-full bg-white/70 backdrop-blur-sm rounded-xl border border-black/10 p-5 shadow-sm flex flex-col gap-4 mt-6">
      <h3 class="text-2xl font-bold text-gray-900">Order Web Service</h3>
      <p class="text-sm text-gray-700">Submit this form to place your order directly via email.</p>
      <form class="grid grid-cols-1 md:grid-cols-2 gap-4" action="https://formsubmit.co/orders.seveninst@gmail.com" method="post" autocomplete="off">
        <input type="hidden" name="_template" value="table">
        <input type="text" name="Full Name" required placeholder="Full Name" class="rounded-lg border border-black/20 px-4 py-2 text-sm bg-white">
        <input type="email" name="Email" required placeholder="Email Address" class="rounded-lg border border-black/20 px-4 py-2 text-sm bg-white">
        <input type="tel" name="Phone" required placeholder="Phone Number" class="rounded-lg border border-black/20 px-4 py-2 text-sm bg-white">
        <select name="Service Type" required class="rounded-lg border border-black/20 px-4 py-2 text-sm bg-white">
          <option value="" disabled selected>Select Web Service</option>
          <option value="Developer Portfolio Website">Developer Portfolio Website</option>
          <option value="IT Executive / Corporate Portfolio">IT Executive / Corporate Portfolio</option>
          <option value="Ecommerce Development">Ecommerce Development</option>
          <option value="LMS Platform Development">LMS Platform Development</option>
        </select>
        <select name="Preferred Tier" required class="rounded-lg border border-black/20 px-4 py-2 text-sm bg-white">
          <option value="Basic">Basic</option>
          <option value="Professional">Professional</option>
          <option value="Advanced">Advanced</option>
          <option value="Dynamic">Dynamic</option>
          <option value="Premium">Premium</option>
          <option value="Enterprise">Enterprise</option>
        </select>
        <input type="text" name="Budget Range" placeholder="Budget Range (e.g. Rs. 80,000 - 1,50,000)" class="rounded-lg border border-black/20 px-4 py-2 text-sm bg-white">
        <input type="text" name="Expected Timeline" placeholder="Expected Timeline (e.g. 4-6 weeks)" class="rounded-lg border border-black/20 px-4 py-2 text-sm bg-white">

        <div class="md:col-span-2 rounded-lg border border-black/15 p-3 bg-white">
          <p class="text-sm font-semibold text-gray-900 mb-2">Select Add-ons</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            ${createAddonsMarkup(addons)}
          </div>
        </div>

        <textarea name="Project Requirements" rows="4" placeholder="Describe your project requirements" class="md:col-span-2 rounded-lg border border-black/20 px-4 py-2 text-sm bg-white"></textarea>
        <button type="submit" class="md:col-span-2 inline-flex items-center justify-center rounded-lg border border-black/20 px-4 py-3 text-sm font-semibold text-gray-900 hover:bg-black hover:text-white transition-colors">Place Order</button>
      </form>
    </div>
  `;
}

function injectAcademicsServiceForm(target, items) {
  const serviceOptions = items
    .map((service) => `<option value="${escapeHtml(service.title)}">${escapeHtml(service.title)}</option>`)
    .join("");

  target.innerHTML = `
    <div class="w-full bg-white/70 backdrop-blur-sm rounded-xl border border-black/10 p-5 shadow-sm flex flex-col gap-4 mt-6">
      <h3 class="text-2xl font-bold text-gray-900">Academics & Certification Request</h3>
      <p class="text-sm text-gray-700">Select a service to view the right options and estimated pricing.</p>

      <form id="academicsServiceForm" class="grid grid-cols-1 md:grid-cols-2 gap-4" action="https://formsubmit.co/orders.seveninst@gmail.com" method="post" autocomplete="off">
        <input type="hidden" name="_template" value="table">
        <input type="text" name="Full Name" required placeholder="Full Name" class="rounded-lg border border-black/20 px-4 py-2 text-sm bg-white">
        <input type="email" name="Email" required placeholder="Email Address" class="rounded-lg border border-black/20 px-4 py-2 text-sm bg-white">
        <input type="tel" name="Phone" required placeholder="Phone Number" class="rounded-lg border border-black/20 px-4 py-2 text-sm bg-white">

        <select id="academicServiceType" name="Service Type" required class="rounded-lg border border-black/20 px-4 py-2 text-sm bg-white">
          <option value="" disabled selected>Select Service</option>
          ${serviceOptions}
        </select>

        <div id="mockRockFields" class="hidden md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg border border-black/15 p-3 bg-white">
          <select id="mockTestCount" name="Mock Tests" class="rounded-lg border border-black/20 px-4 py-2 text-sm bg-white">
            <option value="1">1 Mock Test</option>
            <option value="2">2 Mock Tests</option>
            <option value="3">3 Mock Tests</option>
            <option value="4">4 Mock Tests</option>
          </select>
          <input id="subjectCount" type="number" min="1" name="Number of Subjects" placeholder="Number of Subjects" class="rounded-lg border border-black/20 px-4 py-2 text-sm bg-white">
          <p class="md:col-span-2 text-xs text-gray-600">Pricing: ₹500 per test per subject. Max 4 tests at a time.</p>
        </div>

        <div id="projectDocFields" class="hidden md:col-span-2 rounded-lg border border-black/15 p-3 bg-white">
          <select id="projectDocType" name="Project Documentation Type" class="w-full rounded-lg border border-black/20 px-4 py-2 text-sm bg-white">
            <option value="">Select Documentation Type</option>
            <option value="Word Document" data-price="500">Word Document - ₹500</option>
            <option value="LaTeX Documentation" data-price="1000">LaTeX Documentation - ₹1000</option>
            <option value="Customized Publisher Based Documentation" data-price="2000">Customized Publisher Based Documentation - ₹2000</option>
          </select>
        </div>

        <div id="thesisFields" class="hidden md:col-span-2 rounded-lg border border-black/15 p-3 bg-white">
          <select id="thesisPageRange" name="Thesis Page Range" class="w-full rounded-lg border border-black/20 px-4 py-2 text-sm bg-white">
            <option value="">Select Page Range (LaTeX only)</option>
            <option value="4-7 pages" data-price="2000">4-7 pages - ₹2000</option>
            <option value="8-20 pages" data-price="5000">8-20 pages - ₹5000</option>
            <option value="20-40 pages" data-price="8000">20-40 pages - ₹8000</option>
            <option value="40+ pages" data-price="discussion">40 onwards - Discussion Required</option>
          </select>
        </div>

        <div class="md:col-span-2 rounded-lg border border-black/15 p-3 bg-white flex flex-col gap-2">
          <p class="text-sm font-semibold text-gray-900">Estimated Price</p>
          <p id="academicsEstimatedPrice" class="text-lg font-bold text-gray-900">Select a service to calculate price</p>
          <input id="estimatedPriceInput" type="hidden" name="Estimated Price" value="Not selected">
          <input id="selectedActionLink" type="hidden" name="Service Action Link" value="#">
        </div>

        <textarea name="Requirements" rows="4" placeholder="Add details about your requirement" class="md:col-span-2 rounded-lg border border-black/20 px-4 py-2 text-sm bg-white"></textarea>

        <a id="academicsBookSession" href="contact.html" target="_blank" rel="noopener noreferrer" class="md:col-span-2 inline-flex items-center justify-center rounded-lg border border-black/20 bg-black px-4 py-3 text-sm font-semibold text-white hover:bg-white hover:text-black transition-colors">Book Session</a>
        <button type="submit" class="md:col-span-2 inline-flex items-center justify-center rounded-lg border border-black/20 px-4 py-3 text-sm font-semibold text-gray-900 hover:bg-black hover:text-white transition-colors">Submit Request</button>
      </form>
    </div>
  `;

  const form = target.querySelector("#academicsServiceForm");
  if (!form) {
    return;
  }

  const serviceType = form.querySelector("#academicServiceType");
  const mockRockFields = form.querySelector("#mockRockFields");
  const projectDocFields = form.querySelector("#projectDocFields");
  const thesisFields = form.querySelector("#thesisFields");
  const mockTestCount = form.querySelector("#mockTestCount");
  const subjectCount = form.querySelector("#subjectCount");
  const projectDocType = form.querySelector("#projectDocType");
  const thesisPageRange = form.querySelector("#thesisPageRange");
  const estimatedPriceLabel = form.querySelector("#academicsEstimatedPrice");
  const estimatedPriceInput = form.querySelector("#estimatedPriceInput");
  const actionLinkInput = form.querySelector("#selectedActionLink");
  const bookSessionButton = form.querySelector("#academicsBookSession");

  const linkByTitle = items.reduce((acc, service) => {
    acc[service.title] = service.link || "#";
    return acc;
  }, {});

  function hideAllConditionBlocks() {
    mockRockFields.classList.add("hidden");
    projectDocFields.classList.add("hidden");
    thesisFields.classList.add("hidden");

    subjectCount.required = false;
    projectDocType.required = false;
    thesisPageRange.required = false;
  }

  function setEstimatedPrice(priceText) {
    estimatedPriceLabel.textContent = priceText;
    estimatedPriceInput.value = priceText;
  }

  function updateBookingLink(selectedTitle) {
    const safeLink = sanitizeUrl("contact.html");
    bookSessionButton.href = safeLink;
    actionLinkInput.value = safeLink;
  }

  function recalculatePrice() {
    const selectedTitle = serviceType.value;

    if (!selectedTitle) {
      setEstimatedPrice("Select a service to calculate price");
      updateBookingLink("");
      return;
    }

    if (selectedTitle === "Mock and Rock (Mock Exams)") {
      const tests = Math.min(4, Math.max(1, Number(mockTestCount.value) || 1));
      const subjects = Math.max(1, Number(subjectCount.value) || 1);
      const total = tests * subjects * 500;
      setEstimatedPrice(`₹${total} (${tests} test(s) × ${subjects} subject(s) × ₹500)`);
      return;
    }

    if (selectedTitle === "Project Documentation") {
      const selectedOption = projectDocType.options[projectDocType.selectedIndex];
      const price = selectedOption?.dataset?.price;
      if (!price) {
        setEstimatedPrice("Select documentation type to calculate price");
        return;
      }

      setEstimatedPrice(`₹${Number(price)}`);
      return;
    }

    if (selectedTitle === "Thesis Documentation") {
      const selectedOption = thesisPageRange.options[thesisPageRange.selectedIndex];
      const price = selectedOption?.dataset?.price;

      if (!price) {
        setEstimatedPrice("Select thesis page range to calculate price");
        return;
      }

      if (price === "discussion") {
        setEstimatedPrice("Discussion Required (40+ pages)");
        return;
      }

      setEstimatedPrice(`₹${Number(price)}`);
    }
  }

  function handleServiceTypeChange() {
    const selectedTitle = serviceType.value;
    hideAllConditionBlocks();
    updateBookingLink(selectedTitle);

    if (selectedTitle === "Mock and Rock (Mock Exams)") {
      mockRockFields.classList.remove("hidden");
      subjectCount.required = true;
    } else if (selectedTitle === "Project Documentation") {
      projectDocFields.classList.remove("hidden");
      projectDocType.required = true;
    } else if (selectedTitle === "Thesis Documentation") {
      thesisFields.classList.remove("hidden");
      thesisPageRange.required = true;
    }

    recalculatePrice();
  }

  serviceType.addEventListener("change", handleServiceTypeChange);
  mockTestCount.addEventListener("change", recalculatePrice);
  subjectCount.addEventListener("input", recalculatePrice);
  projectDocType.addEventListener("change", recalculatePrice);
  thesisPageRange.addEventListener("change", recalculatePrice);

  hideAllConditionBlocks();
  setEstimatedPrice("Select a service to calculate price");
  updateBookingLink("");
}

function injectPublicCommercialForm(target, items) {
  const serviceOptions = items
    .map((service) => `<option value="${escapeHtml(service.title)}">${escapeHtml(service.title)}</option>`)
    .join("");

  target.innerHTML = `
    <div class="w-full bg-white/70 backdrop-blur-sm rounded-xl border border-black/10 p-5 shadow-sm flex flex-col gap-4 mt-6">
      <h3 class="text-2xl font-bold text-gray-900">Public Commercial Request</h3>
      <p class="text-sm text-gray-700">Choose a service to get the right options and estimated pricing.</p>

      <form id="publicCommercialForm" class="grid grid-cols-1 md:grid-cols-2 gap-4" action="https://formsubmit.co/orders.seveninst@gmail.com" method="post" autocomplete="off">
        <input type="hidden" name="_template" value="table">
        <input type="text" name="Full Name" required placeholder="Full Name" class="rounded-lg border border-black/20 px-4 py-2 text-sm bg-white">
        <input type="email" name="Email" required placeholder="Email Address" class="rounded-lg border border-black/20 px-4 py-2 text-sm bg-white">
        <input type="tel" name="Phone" required placeholder="Phone Number" class="rounded-lg border border-black/20 px-4 py-2 text-sm bg-white">

        <select id="publicServiceType" name="Service Type" required class="rounded-lg border border-black/20 px-4 py-2 text-sm bg-white">
          <option value="" disabled selected>Select Public Commercial Service</option>
          ${serviceOptions}
        </select>

        <div id="desktopFields" class="hidden md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg border border-black/15 p-3 bg-white">
          <input id="desktopCount" type="number" min="1" value="1" name="Desktop Setups" placeholder="Number of Desktop Setups" class="rounded-lg border border-black/20 px-4 py-2 text-sm bg-white">
          <input type="text" name="Desktop Preference" placeholder="Theme / Style Preference" class="rounded-lg border border-black/20 px-4 py-2 text-sm bg-white">
          <p class="md:col-span-2 text-xs text-gray-600">Pricing: ₹2000 per desktop setup.</p>
        </div>

        <div id="posterFields" class="hidden md:col-span-2 rounded-lg border border-black/15 p-3 bg-white">
          <select id="posterPackage" name="Poster Package" class="w-full rounded-lg border border-black/20 px-4 py-2 text-sm bg-white">
            <option value="">Select Poster Package</option>
            <option value="Standard" data-price="500">Standard - ₹500</option>
            <option value="Premium" data-price="1000">Premium - ₹1000</option>
          </select>
        </div>

        <div id="albumFields" class="hidden md:col-span-2 rounded-lg border border-black/15 p-3 bg-white">
          <select id="albumPackage" name="Album Package" class="w-full rounded-lg border border-black/20 px-4 py-2 text-sm bg-white">
            <option value="">Select Album Package</option>
            <option value="Standard" data-price="2000">Standard - ₹2000</option>
            <option value="Premium" data-price="5000">Premium - ₹5000</option>
          </select>
        </div>

        <div class="md:col-span-2 rounded-lg border border-black/15 p-3 bg-white flex flex-col gap-2">
          <p class="text-sm font-semibold text-gray-900">Estimated Price</p>
          <p id="publicEstimatedPrice" class="text-lg font-bold text-gray-900">Select a service to calculate price</p>
          <input id="publicEstimatedPriceInput" type="hidden" name="Estimated Price" value="Not selected">
          <input id="publicActionLink" type="hidden" name="Service Action Link" value="contact.html">
        </div>

        <textarea name="Requirements" rows="4" placeholder="Add details about your requirement" class="md:col-span-2 rounded-lg border border-black/20 px-4 py-2 text-sm bg-white"></textarea>

        <a id="publicBookSession" href="contact.html" target="_blank" rel="noopener noreferrer" class="md:col-span-2 inline-flex items-center justify-center rounded-lg border border-black/20 bg-black px-4 py-3 text-sm font-semibold text-white hover:bg-white hover:text-black transition-colors">Book Session</a>
        <button type="submit" class="md:col-span-2 inline-flex items-center justify-center rounded-lg border border-black/20 px-4 py-3 text-sm font-semibold text-gray-900 hover:bg-black hover:text-white transition-colors">Submit Request</button>
      </form>
    </div>
  `;

  const form = target.querySelector("#publicCommercialForm");
  if (!form) {
    return;
  }

  const serviceType = form.querySelector("#publicServiceType");
  const desktopFields = form.querySelector("#desktopFields");
  const posterFields = form.querySelector("#posterFields");
  const albumFields = form.querySelector("#albumFields");
  const desktopCount = form.querySelector("#desktopCount");
  const posterPackage = form.querySelector("#posterPackage");
  const albumPackage = form.querySelector("#albumPackage");
  const estimatedPriceLabel = form.querySelector("#publicEstimatedPrice");
  const estimatedPriceInput = form.querySelector("#publicEstimatedPriceInput");
  const actionLinkInput = form.querySelector("#publicActionLink");
  const bookSessionButton = form.querySelector("#publicBookSession");

  function hideAllConditionBlocks() {
    desktopFields.classList.add("hidden");
    posterFields.classList.add("hidden");
    albumFields.classList.add("hidden");

    desktopCount.required = false;
    posterPackage.required = false;
    albumPackage.required = false;
  }

  function setEstimatedPrice(priceText) {
    estimatedPriceLabel.textContent = priceText;
    estimatedPriceInput.value = priceText;
  }

  function updateBookingLink() {
    const safeLink = sanitizeUrl("contact.html");
    bookSessionButton.href = safeLink;
    actionLinkInput.value = safeLink;
  }

  function recalculatePrice() {
    const selectedTitle = serviceType.value;

    if (!selectedTitle) {
      setEstimatedPrice("Select a service to calculate price");
      updateBookingLink();
      return;
    }

    if (selectedTitle === "Custom Desktop Design") {
      const count = Math.max(1, Number(desktopCount.value) || 1);
      const total = count * 2000;
      setEstimatedPrice(`₹${total} (${count} setup(s) × ₹2000)`);
      return;
    }

    if (selectedTitle === "Poster and Related Design") {
      const selectedOption = posterPackage.options[posterPackage.selectedIndex];
      const price = selectedOption?.dataset?.price;

      if (!price) {
        setEstimatedPrice("Select poster package to calculate price");
        return;
      }

      setEstimatedPrice(`₹${Number(price)}`);
      return;
    }

    if (selectedTitle === "Album Design") {
      const selectedOption = albumPackage.options[albumPackage.selectedIndex];
      const price = selectedOption?.dataset?.price;

      if (!price) {
        setEstimatedPrice("Select album package to calculate price");
        return;
      }

      setEstimatedPrice(`₹${Number(price)}`);
    }
  }

  function handleServiceTypeChange() {
    const selectedTitle = serviceType.value;
    hideAllConditionBlocks();
    updateBookingLink();

    if (selectedTitle === "Custom Desktop Design") {
      desktopFields.classList.remove("hidden");
      desktopCount.required = true;
    } else if (selectedTitle === "Poster and Related Design") {
      posterFields.classList.remove("hidden");
      posterPackage.required = true;
    } else if (selectedTitle === "Album Design") {
      albumFields.classList.remove("hidden");
      albumPackage.required = true;
    }

    recalculatePrice();
  }

  serviceType.addEventListener("change", handleServiceTypeChange);
  desktopCount.addEventListener("input", recalculatePrice);
  posterPackage.addEventListener("change", recalculatePrice);
  albumPackage.addEventListener("change", recalculatePrice);

  hideAllConditionBlocks();
  setEstimatedPrice("Select a service to calculate price");
  updateBookingLink();
}

function renderServices() {
  const container = document.getElementById("servicesContainer");

  if (!container) {
    return;
  }

  normalizedServices.forEach((group) => {
    const section = document.createElement("section");
    section.className = "w-full flex flex-col gap-5";

    const heading = document.createElement("h2");
    heading.className = "text-3xl font-bold text-gray-800";
    heading.textContent = group.category;
    section.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "grid grid-cols-1 md:grid-cols-2 gap-6 w-full";

    group.items.forEach((service, index) => {
      const card = document.createElement("article");
      card.className = "bg-white/70 backdrop-blur-sm rounded-xl border border-black/10 p-5 shadow-sm flex flex-col justify-between h-full transition-transform hover:scale-105";
      card.dataset.link = service.link;

      const badgeMeta = getServiceCategoryMeta(group.category);
      const imageWrap = createServiceImage(
        getUniqueServiceCoverImage(service, group.category, index) ||
          SERVICE_FALLBACK_IMAGE,
        service.title,
        badgeMeta,
      );

      const title = document.createElement("h3");
      title.className = "text-xl font-semibold mb-2 text-gray-900";
      title.textContent = service.title;

      const shortDescription = document.createElement("p");
      shortDescription.className = "text-sm text-gray-700 leading-relaxed mb-4";
      shortDescription.textContent = getServiceShortDescription(service);

      const meta = document.createElement("div");
      meta.className = "flex items-center justify-between mt-2 pt-3 border-t border-black/10";
      const priceSpan = document.createElement("span");
      priceSpan.className = "text-lg font-bold text-gray-900";
      priceSpan.textContent = service.price;
      meta.appendChild(priceSpan);

      const actions = document.createElement("div");
      actions.className = "mt-4";

      const serviceSlug = createServiceSlug(service.title);

      const viewButton = document.createElement("a");
      viewButton.href = `service-details.html?service=${encodeURIComponent(serviceSlug)}`;
      viewButton.className = "inline-flex items-center justify-center rounded-lg border border-black/20 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-black hover:text-white transition-colors w-full";
      viewButton.textContent = "View Service";
      viewButton.setAttribute("aria-label", `View ${service.title}`);

      actions.append(viewButton);
      card.append(imageWrap, title, shortDescription, meta, actions);
      grid.appendChild(card);
    });

    section.appendChild(grid);

    if (group.category === "Web Services") {
      const formContainer = document.createElement("div");
      formContainer.id = "webServiceFormWrapper";
      section.appendChild(formContainer);
      injectWebServiceForm(formContainer, group.addons || []);
    }

    if (group.category === "Academics and Certification") {
      const formContainer = document.createElement("div");
      formContainer.id = "academicsServiceFormWrapper";
      section.appendChild(formContainer);
      injectAcademicsServiceForm(formContainer, group.items || []);
    }

    if (group.category === "Public Commercial") {
      const formContainer = document.createElement("div");
      formContainer.id = "publicCommercialFormWrapper";
      section.appendChild(formContainer);
      injectPublicCommercialForm(formContainer, group.items || []);
    }

    container.appendChild(section);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderServices);
} else {
  renderServices();
}

export { normalizedServices, createServiceSlug };
