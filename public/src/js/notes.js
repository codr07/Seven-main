const notes = [
  {
    category: "Coding Language notes",
    items: [
      {
        title: "Python CheatSheet",
        thumbnail: "https://memgraph.com/images/blog/in-memory-databases-that-work-great-with-python/cover.png",
        shortDescription: "Quick reference guide for Python syntax, built-ins, and practical coding patterns.",
        price: "₹1,999",
        link: "#topmate#Link"
      },
      {
        title: "Regression Analysis Notes",
        thumbnail: "/public/assets/images/img/thumb.png",
        shortDescription: "Compact notes on core regression concepts, assumptions, metrics, and interpretation.",
        price: "₹2,999",
        link: "#topmate#Link"
      }
    ]
  }
];

const NOTES_FALLBACK_IMAGE = "/public/assets/images/img/thumb.png";

const NOTES_CATEGORY_META = {
  "Coding Language notes": { icon: "ri-book-open-line", label: "Notes" }
};

function getNoteTitle(note) {
  return note.title || note.name || "Untitled Note";
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
    shortDescription,
    price: note.price || "TBD",
    link: note.link || "#",
  };
}

const normalizedNotes = notes.map((group) => ({
  ...group,
  items: Array.isArray(group.items) ? group.items.map(normalizeNoteItem) : [],
}));

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
  return NOTES_CATEGORY_META[category] || { icon: "ri-sticky-note-line", label: "Notes" };
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

  normalizedNotes.forEach((group) => {
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

      const badgeMeta = getNotesCategoryMeta(group.category);
      const imageWrap = createNoteImage(getUniqueNoteCoverImage(note, group.category, index) || NOTES_FALLBACK_IMAGE, note.title, badgeMeta);

      const title = document.createElement("h3");
      title.className = "text-xl font-semibold mb-2 text-gray-900";
      title.textContent = note.title;

      const shortDescription = document.createElement("p");
      shortDescription.className = "text-sm text-gray-700 leading-relaxed mb-4";
      shortDescription.textContent = getNoteShortDescription(note);

      const meta = document.createElement("div");
      meta.className = "flex items-center justify-between mt-2 pt-3 border-t border-black/10";
      meta.innerHTML = `
        <span class="text-lg font-bold text-gray-900">${note.price}</span>
      `;

      const actions = document.createElement("div");
      actions.className = "mt-4";

      const noteSlug = createNoteSlug(note.title);

      const viewButton = document.createElement("a");
      viewButton.href = `notes-details.html?note=${encodeURIComponent(noteSlug)}`;
      viewButton.className = "inline-flex items-center justify-center rounded-lg border border-black/20 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-black hover:text-white transition-colors";
      viewButton.textContent = "View Note";
      viewButton.setAttribute("aria-label", `View ${note.title}`);

      actions.append(viewButton);
      card.append(imageWrap, title, shortDescription, meta, actions);
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
