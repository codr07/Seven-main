import { normalizedCourses, createCourseSlug } from "./cources.js";

function getCourseFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("course") || "";

  const allCourses = normalizedCourses.flatMap((group) =>
    group.items.map((item) => ({
      ...item,
      category: group.category,
      slug: createCourseSlug(item.name)
    }))
  );

  return allCourses.find((course) => course.slug === slug) || null;
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
      <h1 class="text-2xl font-bold">Course not found</h1>
      <p class="mt-2 text-sm">The requested course page is unavailable. Please return to the courses page and try again.</p>
    </div>
  `;
}

function renderCourseDetails(container, course) {
  const view = course.view_details || {};
  const detailPoints = Array.isArray(view.details) ? view.details : [];

  container.innerHTML = `
    <section class="overflow-hidden rounded-2xl border border-black/15 bg-white/80 shadow-lg backdrop-blur-sm">
      <div class="relative h-56 w-full sm:h-72 lg:h-80">
        <img src="${view.cover || course.coverImage}" alt="${view.title || course.name}" class="h-full w-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent"></div>
        <div class="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
          <span class="mb-3 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900">${course.category}</span>
          <h1 class="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">${view.title || course.name}</h1>
          <p class="mt-2 max-w-3xl text-sm text-white/95 sm:text-base">${view.shortDescription || course.short_desc || ""}</p>
        </div>
      </div>

      <div class="grid gap-6 p-5 sm:p-7 lg:grid-cols-3">
        <div class="lg:col-span-2 space-y-6">
          <div class="rounded-xl border border-black/10 bg-white p-5">
            <h2 class="text-lg font-bold text-gray-900">Course Details</h2>
            <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
              ${detailPoints.map((point) => `<li>${point}</li>`).join("")}
            </ul>
          </div>

          <div class="rounded-xl border border-black/10 bg-white p-5">
            <h2 class="text-lg font-bold text-gray-900">Why Choose This Course</h2>
            <p class="mt-3 text-sm leading-relaxed text-gray-700">${view.whyChooseThisCourse || "Hands-on learning path designed for practical outcomes."}</p>
          </div>

          <div class="rounded-xl border border-black/10 bg-white p-5">
            <h2 class="text-lg font-bold text-gray-900">Public Review</h2>
            <p class="mt-3 text-sm leading-relaxed text-gray-700">${view.publicReview || "Learners love the practical structure and mentor support."}</p>
          </div>
        </div>

        <aside class="space-y-4">
          <div class="rounded-xl border border-black/10 bg-white p-5">
            <p class="text-xs font-semibold uppercase tracking-wide text-gray-500">Duration</p>
            <p class="mt-1 text-base font-bold text-gray-900">${course.duration}</p>
          </div>

          <div class="rounded-xl border border-black/10 bg-white p-5">
            <p class="text-xs font-semibold uppercase tracking-wide text-gray-500">Price</p>
            <p class="mt-1 text-2xl font-bold text-gray-900">${course.price}</p>
          </div>

          <div class="rounded-xl border border-black/10 bg-white p-5">
            ${certificationToggleMarkup(Boolean(view.certificationAvailable))}
            <p class="mt-3 text-sm text-gray-700"><span class="font-semibold">Certification Cost:</span> ${view.certificationCost || "N/A"}</p>
          </div>

          <a href="${course.link}" target="_blank" rel="noopener noreferrer" class="inline-flex w-full items-center justify-center rounded-lg border border-black/20 bg-black px-4 py-3 text-sm font-semibold text-white hover:bg-white hover:text-black transition-colors">
            Buy Now
          </a>
        </aside>
      </div>
    </section>
  `;
}

function initCourseDetailsPage() {
  const container = document.getElementById("courseDetailsPage");
  if (!container) {
    return;
  }

  const course = getCourseFromQuery();
  if (!course) {
    renderMissing(container);
    return;
  }

  renderCourseDetails(container, course);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCourseDetailsPage);
} else {
  initCourseDetailsPage();
}
