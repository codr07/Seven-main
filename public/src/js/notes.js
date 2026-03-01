const notes = [
  {
    category: "Coding Language notes",
    items: [
      {
        title: "Python CheatSheet",
        thumbnail: "https://memgraph.com/images/blog/in-memory-databases-that-work-great-with-python/cover.png",
        shortDescription: "Quick reference guide for Python syntax, built-ins, and practical coding patterns.",
        type: "Coding Language notes",
        price: "₹1,999",
        link: "#topmate#Link",
        view_details: {
          cover: "public/assets/images/img/thumb.png",
          title: "Python CheatSheet",
          short_desc:
            "Quick reference guide for Python syntax, built-ins, and practical coding patterns.",
          description: [
          "Quick reference guide for Python syntax, built-ins, and practical coding patterns.",
          "Covers essential concepts like data structures, control flow, functions, and modules.",
          "Receive targeted improvement strategies and revision guidance to boost confidence before final exams."
        ],
          why_choose_this_course:
            "Ideal for students seeking a concise, exam-focused resource to quickly review key Python concepts and coding patterns before their final exams.",
          certification_available: false,
          certification_cost: "N/A",
          public_review:
            "This Python CheatSheet was a lifesaver during my exam prep! It condensed all the essential syntax and coding patterns into one easy-to-use guide. The targeted improvement strategies helped me focus on my weak areas, and I felt much more confident going into the exam. Highly recommend for any student looking for a quick review resource!",
        }
      },
      {
        title: "Regression Analysis Notes",
        thumbnail: "/public/assets/images/img/thumb.png",
        shortDescription: "Compact notes on core regression concepts, assumptions, metrics, and interpretation.",
        type: "Statistics Notes",
        price: "₹2,999",
        link: "#topmate#Link",
        view_details: {
          cover: "public/assets/images/img/thumb.png",
          title: "Regression Analysis Notes",
          short_desc:
            "Compact notes on core regression concepts, assumptions, metrics, and interpretation.",
          description: [
          "Compact notes on core regression concepts, assumptions, metrics, and interpretation.",
          "Covers essential concepts like linear regression, logistic regression, and model evaluation.",
          "Receive targeted improvement strategies and revision guidance to boost confidence before final exams."
        ],
          why_choose_this_course:
            "Ideal for students seeking a concise, exam-focused resource to quickly review key regression analysis concepts before their final exams.",
          certification_available: false,
          certification_cost: "N/A",
          public_review:
            "These Regression Analysis Notes were incredibly helpful during my exam prep! The concise format made it easy to review all the key concepts quickly. The targeted improvement strategies helped me identify my weak areas and focus my revision efforts more effectively. Highly recommend!",
        }
      },
    ]
  }
];

const NOTES_FALLBACK_IMAGE = "/public/assets/images/img/thumb.png";

function getNoteTitle(note) {
  return note.title || note.name || "Untitled Note";
}

function getNoteType(note, fallbackCategory = "Notes") {
  return note.type || fallbackCategory || "Notes";
}

function normalizeNoteItem(note) {
  const title = getNoteTitle(note);
  const shortDescription =
    note.shortDescription ||
    note.short_desc ||
    note.Short_desc ||
    "Concise, exam-focused notes designed for faster revision.";

  return {
    ...note,
    title,
    type: getNoteType(note),
    shortDescription,
    price: note.price || "TBD",
    link: note.link || "#",
  };
}

const normalizedNotes = notes.map((group) => ({
  ...group,
  items: Array.isArray(group.items) ? group.items.map(normalizeNoteItem) : [],
}));

function buildNotesByType(groups) {
  const groupedByType = new Map();

  groups.forEach((group) => {
    group.items.forEach((note) => {
      const noteType = getNoteType(note, group.category);

      if (!groupedByType.has(noteType)) {
        groupedByType.set(noteType, {
          category: noteType,
          items: [],
        });
      }

      groupedByType.get(noteType).items.push(note);
    });
  });

  return Array.from(groupedByType.values());
}

const notesByType = buildNotesByType(normalizedNotes);

function hashSeed(seedText) {
  return seedText.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
}

function createNoteThumbnail(seedText, title, categoryLabel) {
  const seed = hashSeed(seedText);
  const hueA = seed % 360;
  const hueB = (seed * 1.8) % 360;
  const initials =
    title
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0]?.toUpperCase() || "")
      .join("") || "N";

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

function getUniqueNoteCoverImage(note, category, index) {
  if (note.thumbnail || note.coverImage) {
    return note.thumbnail || note.coverImage;
  }

  const title = getNoteTitle(note);
  const seedText = `${category}-${index}-${title}`;
  return createNoteThumbnail(seedText, title, category);
}

function getNoteShortDescription(note) {
  if (note.shortDescription) {
    return note.shortDescription;
  }

  return "Concise, exam-focused notes designed for faster revision.";
}

function getNotesCategoryMeta(category) {
  const normalizedCategory = String(category || "").toLowerCase();

  if (normalizedCategory.includes("stat")) {
    return { icon: "ri-bar-chart-line", label: category || "Notes" };
  }

  if (normalizedCategory.includes("code") || normalizedCategory.includes("language")) {
    return { icon: "ri-book-open-line", label: category || "Notes" };
  }

  return {
    icon: "ri-sticky-note-line",
    label: category || "Notes",
  };
}

function createNoteSlug(title = "") {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function createNoteImage(coverImage, title, badgeMeta) {
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

function renderNotes() {
  const container = document.getElementById("notesContainer");

  if (!container) {
    return;
  }

  notesByType.forEach((group) => {
    const section = document.createElement("section");
    section.className = "w-full flex flex-col gap-5";

    const heading = document.createElement("h2");
    heading.className = "text-3xl font-bold text-gray-800";
    heading.textContent = group.category;
    section.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "grid grid-cols-1 md:grid-cols-2 gap-6 w-full";

    group.items.forEach((note, index) => {
      const card = document.createElement("article");
      card.className = "bg-white/70 backdrop-blur-sm rounded-xl border border-black/10 p-5 shadow-sm flex flex-col justify-between h-full transition-transform hover:scale-105";
      card.dataset.link = note.link;

      const noteType = getNoteType(note, group.category);
      const badgeMeta = getNotesCategoryMeta(noteType);
      const imageWrap = createNoteImage(getUniqueNoteCoverImage(note, noteType, index) || NOTES_FALLBACK_IMAGE, note.title, badgeMeta);

      const title = document.createElement("h3");
      title.className = "text-xl font-semibold mb-2 text-gray-900";
      title.textContent = note.title;

      const shortDescription = document.createElement("p");
      shortDescription.className = "text-sm text-gray-700 leading-relaxed mb-4";
      shortDescription.textContent = getNoteShortDescription(note);

      const meta = document.createElement("div");
      meta.className =
        "sm:flex items-center sm:justify-between sm:w-full mt-2 pt-3 border-t border-black/10";
      meta.innerHTML = `
        <span class="inline-flex items-center gap-2 rounded-full border border-black/20 px-3 py-1 text-sm font-medium text-gray-700">
          <span class="h-2 w-2 rounded-full bg-red-500"></span>
          Type: ${noteType}
        </span>
        <span class="text-lg font-bold text-gray-900">${note.price}</span>
      `;

      const noteSlug = createNoteSlug(note.title);

      const viewButton = document.createElement("a");
      viewButton.href = `notes-details.html?note=${encodeURIComponent(noteSlug)}`;
      viewButton.className =
        "mt-4 inline-flex items-center justify-center rounded-lg border border-black/20 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-black hover:text-white transition-colors";
      viewButton.textContent = "View Note";
      viewButton.setAttribute("aria-label", `View ${note.title}`);

      card.append(imageWrap, title, shortDescription, meta, viewButton);
      grid.appendChild(card);
    });

    section.appendChild(grid);
    container.appendChild(section);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderNotes);
} else {
  renderNotes();
}

export { normalizedNotes, createNoteSlug };
