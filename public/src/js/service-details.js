import { normalizedServices, createServiceSlug } from "./services.js";
import { escapeHtml, sanitizeSlugParam, sanitizeUrl } from "./security.js";

function getServiceFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const slug = sanitizeSlugParam(params.get("service") || "");

  const allServices = normalizedServices.flatMap((group) =>
    group.items.map((item, index) => ({
      ...item,
      category: group.category,
      slug: createServiceSlug(item.title),
      coverImage: item.view_details?.cover || item.thumbnail || item.coverImage,
      details: Array.isArray(item.view_details?.description) && item.view_details.description.length > 0
        ? item.view_details.description
        : Array.isArray(item.description) && item.description.length > 0
        ? item.description
        : [
            item.shortDescription || "Tailored service designed for practical and measurable outcomes.",
            "Personalized workflow and guidance based on your exact requirement.",
            "Delivery support and post-handover clarity for smooth execution."
          ],
      detailTitle: item.view_details?.title || item.title,
      detailShortDesc:
        item.view_details?.short_desc ||
        item.shortDescription ||
        item.short_desc ||
        "Tailored service designed for practical and measurable outcomes.",
      whyChoose:
        item.view_details?.why_choose_this_course ||
        "This service is designed for practical, outcome-driven delivery with personalized support.",
      publicReview:
        item.view_details?.public_review ||
        "Clients appreciate the clarity, quality, and delivery support provided in this service.",
      addons: Array.isArray(group.addons) ? group.addons : [],
      rank: index + 1,
    }))
  );

  return allServices.find((service) => service.slug === slug) || null;
}

function renderMissing(container) {
  container.innerHTML = `
    <div class="rounded-xl border border-red-200 bg-red-50 p-6 text-red-800">
      <h1 class="text-2xl font-bold">Service not found</h1>
      <p class="mt-2 text-sm">The requested service page is unavailable. Please return to the services page and try again.</p>
    </div>
  `;
}

function renderServiceDetails(container, service) {
  const detailPoints = Array.isArray(service.details) ? service.details : [];
  const safeCover = sanitizeUrl(service.coverImage || "public/assets/images/img/thumb.png", {
    allowDataImage: true,
    fallback: "/public/assets/images/img/thumb.png",
  });
  const safeTitle = escapeHtml(service.title);
  const safeCategory = escapeHtml(service.category);
  const safeDetailTitle = escapeHtml(service.detailTitle);
  const safeDetailShortDesc = escapeHtml(service.detailShortDesc);
  const safeWhyChoose = escapeHtml(service.whyChoose);
  const safePublicReview = escapeHtml(service.publicReview);
  const safePrice = escapeHtml(service.price || "TBD");
  const safeRank = escapeHtml(service.rank);
  const safeLink = sanitizeUrl(service.link || "#");
  const safeDetailPoints = detailPoints.map((point) => `<li>${escapeHtml(point)}</li>`).join("");
  const addonMarkup = service.addons.length
    ? `<ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">${service.addons
        .map((addon) => `<li>${escapeHtml(addon)}</li>`)
        .join("")}</ul>`
    : "<p class='mt-3 text-sm text-gray-700'>Add-ons are not applicable for this service.</p>";

  container.innerHTML = `
    <section class="overflow-hidden rounded-2xl border border-black/15 bg-white/80 shadow-lg backdrop-blur-sm">
      <div class="relative h-56 w-full sm:h-72 lg:h-80">
        <img src="${safeCover}" alt="${safeTitle}" class="h-full w-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent"></div>
        <div class="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
          <span class="mb-3 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900">${safeCategory}</span>
          <h1 class="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">${safeDetailTitle}</h1>
          <p class="mt-2 max-w-3xl text-sm text-white/95 sm:text-base">${safeDetailShortDesc}</p>
        </div>
      </div>

      <div class="grid gap-6 p-5 sm:p-7 lg:grid-cols-3">
        <div class="lg:col-span-2 space-y-6">
          <div class="rounded-xl border border-black/10 bg-white p-5">
            <h2 class="text-lg font-bold text-gray-900">Service Scope</h2>
            <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
              ${safeDetailPoints}
            </ul>
          </div>

          <div class="rounded-xl border border-black/10 bg-white p-5">
            <h2 class="text-lg font-bold text-gray-900">Available Add-ons</h2>
            ${addonMarkup}
          </div>

          <div class="rounded-xl border border-black/10 bg-white p-5">
            <h2 class="text-lg font-bold text-gray-900">Why Choose This Service</h2>
            <p class="mt-3 text-sm leading-relaxed text-gray-700">${safeWhyChoose}</p>
          </div>

          <div class="rounded-xl border border-black/10 bg-white p-5">
            <h2 class="text-lg font-bold text-gray-900">Public Review</h2>
            <p class="mt-3 text-sm leading-relaxed text-gray-700">${safePublicReview}</p>
          </div>
        </div>

        <aside class="space-y-4">
          <div class="rounded-xl border border-black/10 bg-white p-5">
            <p class="text-xs font-semibold uppercase tracking-wide text-gray-500">Price</p>
            <p class="mt-1 text-2xl font-bold text-gray-900">${safePrice}</p>
          </div>

          <div class="rounded-xl border border-black/10 bg-white p-5">
            <p class="text-xs font-semibold uppercase tracking-wide text-gray-500">Service Code</p>
            <p class="mt-1 text-base font-bold text-gray-900">SV-${safeRank}</p>
          </div>

          <a href="${safeLink}" target="_blank" rel="noopener noreferrer" class="inline-flex w-full items-center justify-center rounded-lg border border-black/20 bg-black px-4 py-3 text-sm font-semibold text-white hover:bg-white hover:text-black transition-colors">
            Buy Service
          </a>
        </aside>
      </div>
    </section>
  `;
}

function initServiceDetailsPage() {
  const container = document.getElementById("serviceDetailsPage");
  if (!container) {
    return;
  }

  const service = getServiceFromQuery();
  if (!service) {
    renderMissing(container);
    return;
  }

  renderServiceDetails(container, service);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initServiceDetailsPage);
} else {
  initServiceDetailsPage();
}
