const services = [
  {
    category: "Academics and Certification",
    items: [
      {
        title: "Mock and Rock (Mock Exams)",
        description: [
          "Attempt real exam-style mock tests designed around current academic and certification patterns.",
          "Get section-wise performance breakdowns to identify weak areas, time-management gaps, and scoring trends.",
          "Receive targeted improvement strategies and revision guidance to boost confidence before final exams."
        ],
        price: "₹500 - ₹2000",
        link: "#topmate#MockAndRock"
      },
      {
        title: "Project Documentation",
        description: [
          "Create complete project reports with proper structure, professional language, and institution-ready formatting.",
          "Include system architecture, flowcharts, modules, and technical explanations in a clean and readable way.",
          "Get support for editing, proofreading, and final polishing before submission or presentation."
        ],
        price: "₹500 - ₹1000",
        link: "#topmate#ProjectDocumentation"
      },
      {
        title: "Thesis Documentation",
        description: [
          "Develop end-to-end thesis documents with strong research structure, clarity, and academic tone.",
          "Apply required citation style, chapter formatting, references, and review-friendly layout standards.",
          "Prepare a polished final version suitable for departmental evaluation, viva, and archive submission."
        ],
        price: "₹1500 - ₹2000",
        link: "#topmate#ThesisDocumentation"
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
        title: "Developer Portfolio Website",
        description: [
          "Basic: Rs. 4,999 - 9,999.",
          "Professional: Rs. 15,000 - 30,000.",
          "Premium: Rs. 60,000 - 1,20,000.",
          "Enterprise: Rs. 1,80,000 - 3,50,000."
        ],
        price: "Rs. 4,999 - 3,50,000",
        link: "#topmate#DeveloperPortfolioWebsite"
      },
      {
        title: "IT Executive / Corporate Portfolio",
        description: [
          "Basic: Rs. 8,000 - 15,000.",
          "Professional: Rs. 30,000 - 60,000.",
          "Premium: Rs. 1,20,000 - 2,50,000.",
          "Enterprise: Rs. 3,00,000 - 6,00,000."
        ],
        price: "Rs. 8,000 - 6,00,000",
        link: "#topmate#CorporatePortfolio"
      },
      {
        title: "Ecommerce Development",
        description: [
          "Basic: Rs. 20,000 - 40,000.",
          "Advanced: Rs. 80,000 - 1,50,000.",
          "Premium: Rs. 2,50,000 - 6,00,000.",
          "Enterprise: Rs. 8,00,000 - 25,00,000."
        ],
        price: "Rs. 20,000 - 25,00,000",
        link: "#topmate#EcommerceDevelopment"
      },
      {
        title: "LMS Platform Development",
        description: [
          "Basic: Rs. 40,000 - 75,000.",
          "Advanced: Rs. 1,50,000 - 3,00,000.",
          "Premium: Rs. 5,00,000 - 12,00,000.",
          "Enterprise: Rs. 15,00,000 - 50,00,000."
        ],
        price: "Rs. 40,000 - 50,00,000",
        link: "#topmate#LMSDevelopment"
      }
    ]
  },
  {
    category: "Public Commercial",
    items: [
      {
        title: "Custom Desktop Design",
        description: [
          "Design a personalized desktop setup with custom themes, widgets, icons, and wallpaper styling.",
          "Optimize layout, color harmony, and visual hierarchy for both aesthetics and daily usability.",
          "Get a complete look-and-feel package aligned with your workflow, personality, and device setup."
        ],
        price: "₹2000",
        link: "#topmate#CustomDesktop"
      },
      {
        title: "Poster and Related Design",
        description: [
          "Create eye-catching poster concepts tailored for events, campaigns, launches, and promotions.",
          "Balance typography, visual assets, and messaging for high impact in print and digital formats.",
          "Deliver ready-to-use design outputs optimized for social media, banners, and physical prints."
        ],
        price: "₹500 - ₹1000",
        link: "#topmate#PosterDesign"
      },
      {
        title: "Album Design",
        description: [
          "Build premium album layouts with consistent visual storytelling, pacing, and aesthetic continuity.",
          "Arrange photos, titles, and decorative elements using balanced composition and clean typography.",
          "Produce print-ready and digital-ready album files with polished finishing and professional quality."
        ],
        price: "₹2000 - ₹5000",
        link: "#topmate#AlbumDesign"
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
      <text x="70" y="150" font-size="46" font-family="Arial, sans-serif" fill="white" opacity="0.9">${categoryLabel}</text>
      <text x="70" y="325" font-size="170" font-family="Arial, sans-serif" font-weight="700" fill="white">${initials}</text>
      <text x="70" y="530" font-size="58" font-family="Arial, sans-serif" font-weight="600" fill="white">${title}</text>
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
  image.src = coverImage;
  image.alt = title;
  image.loading = "lazy";

  const badge = document.createElement("span");
  badge.className = "absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-black/80 text-white px-3 py-1 text-xs font-semibold";
  badge.innerHTML = `<i class="${badgeMeta.icon}"></i>${badgeMeta.label}`;

  imageWrap.append(image, badge);
  return imageWrap;
}

function createAddonsMarkup(addons) {
  return addons
    .map(
      (addon) => `<label class="flex items-start gap-2 text-sm text-gray-700"><input type="checkbox" name="Add-ons[]" value="${addon}" class="mt-1"><span>${addon}</span></label>`
    )
    .join("");
}

function injectWebServiceForm(target, addons) {
  target.innerHTML = `
    <div class="w-full bg-white/70 backdrop-blur-sm rounded-xl border border-black/10 p-5 shadow-sm flex flex-col gap-4 mt-6">
      <h3 class="text-2xl font-bold text-gray-900">Order Web Service</h3>
      <p class="text-sm text-gray-700">Submit this form to place your order directly via email.</p>
      <form class="grid grid-cols-1 md:grid-cols-2 gap-4" action="https://formsubmit.co/orders.seveninst@gmail.com?subject=Web%20Service%20Order" method="post">
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
      meta.innerHTML = `<span class="text-lg font-bold text-gray-900">${service.price}</span>`;

      const actions = document.createElement("div");
      actions.className = "mt-4 grid grid-cols-2 gap-3";

      const serviceSlug = createServiceSlug(service.title);

      const viewButton = document.createElement("a");
      viewButton.href = `service-details.html?service=${encodeURIComponent(serviceSlug)}`;
      viewButton.className = "inline-flex items-center justify-center rounded-lg border border-black/20 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-black hover:text-white transition-colors";
      viewButton.textContent = "View Service";
      viewButton.setAttribute("aria-label", `View ${service.title}`);

      const buyButton = document.createElement("a");
      buyButton.href = card.dataset.link || "#";
      buyButton.className = "inline-flex items-center justify-center rounded-lg border border-black/20 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-black hover:text-white transition-colors";
      buyButton.textContent = "Buy service";
      buyButton.setAttribute("aria-label", `Buy ${service.title}`);

      actions.append(viewButton, buyButton);
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

    container.appendChild(section);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderServices);
} else {
  renderServices();
}

export { normalizedServices, createServiceSlug };
