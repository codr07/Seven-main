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

function getNoteCoverImage(note) {
  return note.thumbnail || note.coverImage || NOTES_FALLBACK_IMAGE;
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

  notes.forEach((group) => {
    const section = document.createElement("section");
    section.className = "w-full flex flex-col gap-5";

    const heading = document.createElement("h2");
    heading.className = "text-3xl font-bold text-gray-800";
    heading.textContent = group.category;
    section.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "grid grid-cols-1 md:grid-cols-2 gap-6 w-full";

    group.items.forEach((note) => {
      const card = document.createElement("article");
      card.className = "bg-white/70 backdrop-blur-sm rounded-xl border border-black/10 p-5 shadow-sm flex flex-col justify-between h-full transition-transform hover:scale-105";
      card.dataset.link = note.link;

      const badgeMeta = getNotesCategoryMeta(group.category);
      const imageWrap = createNoteImage(getNoteCoverImage(note), note.title, badgeMeta);

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

      const buyButton = document.createElement("a");
      buyButton.href = card.dataset.link || "#";
      buyButton.className = "mt-4 inline-flex items-center justify-center rounded-lg border border-black/20 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-black hover:text-white transition-colors";
      buyButton.textContent = "Buy notes";
      buyButton.setAttribute("aria-label", `Buy ${note.title}`);

      card.append(imageWrap, title, shortDescription, meta, buyButton);
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
