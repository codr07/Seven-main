import { normalizedNotes, createNoteSlug } from "./notes.js";
import { escapeHtml, sanitizeSlugParam, sanitizeUrl } from "./security.js";

function getNoteFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const slug = sanitizeSlugParam(params.get("note") || "");

  const allNotes = normalizedNotes.flatMap((group) =>
    group.items.map((item, index) => ({
      ...item,
      category: item.type || group.category,
      type: item.type || group.category,
      slug: createNoteSlug(item.title),
      coverImage: item.thumbnail || item.coverImage,
      details: Array.isArray(item.details) && item.details.length > 0
        ? item.details
        : [
            item.shortDescription || "Concise, exam-focused notes designed for faster revision.",
            "Structured for quick scanning and topic-wise preparation.",
            "Useful for assignments, viva, and last-minute exam revision."
          ],
      rank: index + 1,
    }))
  );

  return allNotes.find((note) => note.slug === slug) || null;
}

function renderMissing(container) {
  container.innerHTML = `
    <div class="rounded-xl border border-red-200 bg-red-50 p-6 text-red-800">
      <h1 class="text-2xl font-bold">Note not found</h1>
      <p class="mt-2 text-sm">The requested note is unavailable. Please return to the notes page and try again.</p>
    </div>
  `;
}

function renderNoteDetails(container, note) {
  const detailPoints = Array.isArray(note.details) ? note.details : [];
  const safeCover = sanitizeUrl(note.coverImage || "public/assets/images/img/thumb.png", {
    allowDataImage: true,
    fallback: "/public/assets/images/img/thumb.png",
  });
  const safeTitle = escapeHtml(note.title);
  const safeCategory = escapeHtml(note.category);
  const safeShortDescription = escapeHtml(
    note.shortDescription || "Concise, exam-focused notes designed for faster revision.",
  );
  const safePrice = escapeHtml(note.price || "TBD");
  const safeType = escapeHtml(note.type || note.category || "Notes");
  const safeLink = sanitizeUrl(note.link || "#");
  const safeDetailPoints = detailPoints.map((point) => `<li>${escapeHtml(point)}</li>`).join("");

  container.innerHTML = `
    <section class="overflow-hidden rounded-2xl border border-black/15 bg-white/80 shadow-lg backdrop-blur-sm">
      <div class="relative h-56 w-full sm:h-72 lg:h-80">
        <img src="${safeCover}" alt="${safeTitle}" class="h-full w-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent"></div>
        <div class="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
          <span class="mb-3 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900">${safeCategory}</span>
          <h1 class="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">${safeTitle}</h1>
          <p class="mt-2 max-w-3xl text-sm text-white/95 sm:text-base">${safeShortDescription}</p>
        </div>
      </div>

      <div class="grid gap-6 p-5 sm:p-7 lg:grid-cols-3">
        <div class="lg:col-span-2 space-y-6">
          <div class="rounded-xl border border-black/10 bg-white p-5">
            <h2 class="text-lg font-bold text-gray-900">What You Get</h2>
            <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
              ${safeDetailPoints}
            </ul>
          </div>

          <div class="rounded-xl border border-black/10 bg-white p-5">
            <h2 class="text-lg font-bold text-gray-900">Best For</h2>
            <p class="mt-3 text-sm leading-relaxed text-gray-700">Students who want a compact, practical study companion for faster revision and clearer concept recall.</p>
          </div>
        </div>

        <aside class="space-y-4">
          <div class="rounded-xl border border-black/10 bg-white p-5">
            <p class="text-xs font-semibold uppercase tracking-wide text-gray-500">Price</p>
            <p class="mt-1 text-2xl font-bold text-gray-900">${safePrice}</p>
          </div>

          <div class="rounded-xl border border-black/10 bg-white p-5">
            <p class="text-xs font-semibold uppercase tracking-wide text-gray-500">Collection</p>
            <p class="mt-1 text-base font-bold text-gray-900">${safeType}</p>
          </div>

          <a href="${safeLink}" target="_blank" rel="noopener noreferrer" class="inline-flex w-full items-center justify-center rounded-lg border border-black/20 bg-black px-4 py-3 text-sm font-semibold text-white hover:bg-white hover:text-black transition-colors">
            Buy Notes
          </a>
        </aside>
      </div>
    </section>
  `;
}

function initNoteDetailsPage() {
  const container = document.getElementById("noteDetailsPage");
  if (!container) {
    return;
  }

  const note = getNoteFromQuery();
  if (!note) {
    renderMissing(container);
    return;
  }

  renderNoteDetails(container, note);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initNoteDetailsPage);
} else {
  initNoteDetailsPage();
}
