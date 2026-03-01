import { normalizedAcademics, createAcademicSlug } from "./academics.js";

function getAcademicFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("academic") || "";

  const allAcademics = normalizedAcademics.flatMap((group) =>
    group.items.map((item, index) => {
      const view = item.viewDetails || item.view_details || {};

      return {
        ...item,
        category: group.category,
        slug: createAcademicSlug(item.title),
        coverImage:
          view.cover ||
          item.cover ||
          item.thumbnail ||
          item.coverImage ||
          "public/assets/images/img/thumb.png",
        detailTitle: view.title || item.title,
        detailShortDesc:
          view.short_desc ||
          view.shortDescription ||
          item.shortDescription ||
          "Structured academic support designed for measurable learning outcomes.",
        details: Array.isArray(view.details) && view.details.length > 0
          ? view.details
          : [
              item.shortDescription ||
                "Structured academic support designed for measurable learning outcomes.",
              "Personalized guidance based on student learning needs and goals.",
              "Regular progress evaluation with practical improvement roadmap.",
            ],
        whyChoose:
          view.why_choose_this_course ||
          view.whyChooseThisCourse ||
          "This academic offering is designed for practical, outcome-driven learning with personalized support.",
        publicReview:
          view.public_review ||
          view.publicReview ||
          "Parents and students appreciate the personalized guidance and measurable academic improvement.",
        certificationAvailable: Boolean(
          view.certification_available ?? view.certificationAvailable,
        ),
        certificationCost:
          view.certification_cost || view.certificationCost || "N/A",
        rank: index + 1,
      };
    }),
  );

  return allAcademics.find((academic) => academic.slug === slug) || null;
}

function certificationToggleMarkup(isAvailable) {
  return `
    <div class="inline-flex items-center gap-3">
      <span class="text-sm font-medium text-gray-700">Certification Available</span>
      <span class="relative inline-flex h-6 w-12 items-center rounded-full ${isAvailable ? "bg-green-500" : "bg-gray-400"}">
        <span class="inline-block h-5 w-5 transform rounded-full bg-white transition ${isAvailable ? "translate-x-6" : "translate-x-1"}"></span>
      </span>
      <span class="text-sm font-semibold ${isAvailable ? "text-green-700" : "text-gray-700"}">${isAvailable ? "Y" : "N"}</span>
    </div>
  `;
}

function renderMissing(container) {
  container.innerHTML = `
    <div class="rounded-xl border border-red-200 bg-red-50 p-6 text-red-800">
      <h1 class="text-2xl font-bold">Academic item not found</h1>
      <p class="mt-2 text-sm">The requested academic detail page is unavailable. Please return to the academics page and try again.</p>
    </div>
  `;
}

function renderAcademicDetails(container, academic) {
  const detailPoints = Array.isArray(academic.details) ? academic.details : [];

  container.innerHTML = `
    <section class="overflow-hidden rounded-2xl border border-black/15 bg-white/80 shadow-lg backdrop-blur-sm">
      <div class="relative h-56 w-full sm:h-72 lg:h-80">
        <img src="${academic.coverImage}" alt="${academic.detailTitle}" class="h-full w-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent"></div>
        <div class="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
          <span class="mb-3 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900">${academic.category}</span>
          <h1 class="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">${academic.detailTitle}</h1>
          <p class="mt-2 max-w-3xl text-sm text-white/95 sm:text-base">${academic.detailShortDesc}</p>
        </div>
      </div>

      <div class="grid gap-6 p-5 sm:p-7 lg:grid-cols-3">
        <div class="lg:col-span-2 space-y-6">
          <div class="rounded-xl border border-black/10 bg-white p-5">
            <h2 class="text-lg font-bold text-gray-900">Academic Details</h2>
            <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
              ${detailPoints.map((point) => `<li>${point}</li>`).join("")}
            </ul>
          </div>

          <div class="rounded-xl border border-black/10 bg-white p-5">
            <h2 class="text-lg font-bold text-gray-900">Why Choose This Program</h2>
            <p class="mt-3 text-sm leading-relaxed text-gray-700">${academic.whyChoose}</p>
          </div>

          <div class="rounded-xl border border-black/10 bg-white p-5">
            <h2 class="text-lg font-bold text-gray-900">Public Review</h2>
            <p class="mt-3 text-sm leading-relaxed text-gray-700">${academic.publicReview}</p>
          </div>
        </div>

        <aside class="space-y-4">
          <div class="rounded-xl border border-black/10 bg-white p-5">
            <p class="text-xs font-semibold uppercase tracking-wide text-gray-500">Price</p>
            <p class="mt-1 text-2xl font-bold text-gray-900">${academic.price || "Contact for details"}</p>
          </div>

          <div class="rounded-xl border border-black/10 bg-white p-5">
            <p class="text-xs font-semibold uppercase tracking-wide text-gray-500">Academic Code</p>
            <p class="mt-1 text-base font-bold text-gray-900">AC-${academic.rank}</p>
          </div>

          <div class="rounded-xl border border-black/10 bg-white p-5">
            ${certificationToggleMarkup(academic.certificationAvailable)}
            <p class="mt-3 text-sm text-gray-700"><span class="font-semibold">Monthly Cost:</span> ${academic.certificationCost}</p>
          </div>

          <a href="${academic.link || "contact.html"}" class="inline-flex w-full items-center justify-center rounded-lg border border-black/20 bg-black px-4 py-3 text-sm font-semibold text-white hover:bg-white hover:text-black transition-colors">
            Book a Session
          </a>
        </aside>
      </div>
    </section>
  `;
}

function initAcademicDetailsPage() {
  const container = document.getElementById("academicDetailsPage");
  if (!container) {
    return;
  }

  const academic = getAcademicFromQuery();
  if (!academic) {
    renderMissing(container);
    return;
  }

  renderAcademicDetails(container, academic);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAcademicDetailsPage);
} else {
  initAcademicDetailsPage();
}
