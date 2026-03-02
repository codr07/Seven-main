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

function initServiceDetailRequestForm(container, service) {
  const form = container.querySelector("#serviceDetailRequestForm");
  if (!form) {
    return;
  }

  const title = service.title || "";
  const mockRockFields = form.querySelector("#detailMockRockFields");
  const projectDocFields = form.querySelector("#detailProjectDocFields");
  const thesisFields = form.querySelector("#detailThesisFields");
  const desktopFields = form.querySelector("#detailDesktopFields");
  const posterFields = form.querySelector("#detailPosterFields");
  const albumFields = form.querySelector("#detailAlbumFields");

  const mockTestCount = form.querySelector("#detailMockTestCount");
  const subjectCount = form.querySelector("#detailSubjectCount");
  const projectDocType = form.querySelector("#detailProjectDocType");
  const thesisPageRange = form.querySelector("#detailThesisPageRange");
  const desktopCount = form.querySelector("#detailDesktopCount");
  const posterPackage = form.querySelector("#detailPosterPackage");
  const albumPackage = form.querySelector("#detailAlbumPackage");

  const estimatedPriceLabel = form.querySelector("#detailEstimatedPrice");
  const estimatedPriceInput = form.querySelector("#detailEstimatedPriceInput");
  const bookSessionButton = form.querySelector("#detailBookSession");
  const actionLinkInput = form.querySelector("#detailActionLink");

  function hideAllConditionBlocks() {
    mockRockFields.classList.add("hidden");
    projectDocFields.classList.add("hidden");
    thesisFields.classList.add("hidden");
    desktopFields.classList.add("hidden");
    posterFields.classList.add("hidden");
    albumFields.classList.add("hidden");

    subjectCount.required = false;
    projectDocType.required = false;
    thesisPageRange.required = false;
    desktopCount.required = false;
    posterPackage.required = false;
    albumPackage.required = false;
  }

  function setEstimatedPrice(priceText) {
    estimatedPriceLabel.textContent = priceText;
    estimatedPriceInput.value = priceText;
  }

  function setBookingLink() {
    const safeLink = sanitizeUrl("contact.html");
    bookSessionButton.href = safeLink;
    actionLinkInput.value = safeLink;
  }

  function recalculatePrice() {
    if (title === "Mock and Rock (Mock Exams)") {
      const tests = Math.min(4, Math.max(1, Number(mockTestCount.value) || 1));
      const subjects = Math.max(1, Number(subjectCount.value) || 1);
      const total = tests * subjects * 500;
      setEstimatedPrice(`₹${total} (${tests} test(s) × ${subjects} subject(s) × ₹500)`);
      return;
    }

    if (title === "Project Documentation") {
      const selectedOption = projectDocType.options[projectDocType.selectedIndex];
      const price = selectedOption?.dataset?.price;

      if (!price) {
        setEstimatedPrice("Select documentation type to calculate price");
        return;
      }

      setEstimatedPrice(`₹${Number(price)}`);
      return;
    }

    if (title === "Thesis Documentation") {
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
      return;
    }

    if (title === "Custom Desktop Design") {
      const count = Math.max(1, Number(desktopCount.value) || 1);
      const total = count * 2000;
      setEstimatedPrice(`₹${total} (${count} setup(s) × ₹2000)`);
      return;
    }

    if (title === "Poster and Related Design") {
      const selectedOption = posterPackage.options[posterPackage.selectedIndex];
      const price = selectedOption?.dataset?.price;

      if (!price) {
        setEstimatedPrice("Select poster package to calculate price");
        return;
      }

      setEstimatedPrice(`₹${Number(price)}`);
      return;
    }

    if (title === "Album Design") {
      const selectedOption = albumPackage.options[albumPackage.selectedIndex];
      const price = selectedOption?.dataset?.price;

      if (!price) {
        setEstimatedPrice("Select album package to calculate price");
        return;
      }

      setEstimatedPrice(`₹${Number(price)}`);
      return;
    }

    setEstimatedPrice(service.price || "TBD");
  }

  hideAllConditionBlocks();

  if (title === "Mock and Rock (Mock Exams)") {
    mockRockFields.classList.remove("hidden");
    subjectCount.required = true;
    mockTestCount.addEventListener("change", recalculatePrice);
    subjectCount.addEventListener("input", recalculatePrice);
  } else if (title === "Project Documentation") {
    projectDocFields.classList.remove("hidden");
    projectDocType.required = true;
    projectDocType.addEventListener("change", recalculatePrice);
  } else if (title === "Thesis Documentation") {
    thesisFields.classList.remove("hidden");
    thesisPageRange.required = true;
    thesisPageRange.addEventListener("change", recalculatePrice);
  } else if (title === "Custom Desktop Design") {
    desktopFields.classList.remove("hidden");
    desktopCount.required = true;
    desktopCount.addEventListener("input", recalculatePrice);
  } else if (title === "Poster and Related Design") {
    posterFields.classList.remove("hidden");
    posterPackage.required = true;
    posterPackage.addEventListener("change", recalculatePrice);
  } else if (title === "Album Design") {
    albumFields.classList.remove("hidden");
    albumPackage.required = true;
    albumPackage.addEventListener("change", recalculatePrice);
  }

  setBookingLink();
  recalculatePrice();
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
  const safeContactLink = sanitizeUrl("contact.html");
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

          <a href="${safeContactLink}" target="_blank" rel="noopener noreferrer" class="inline-flex w-full items-center justify-center rounded-lg border border-black/20 bg-black px-4 py-3 text-sm font-semibold text-white hover:bg-white hover:text-black transition-colors">
            Book Session
          </a>
        </aside>
      </div>

      <div class="border-t border-black/10 p-5 sm:p-7">
        <h2 class="text-xl font-bold text-gray-900">Request This Service</h2>
        <p class="mt-1 text-sm text-gray-700">Fill out the form and we will reach out to you.</p>

        <form id="serviceDetailRequestForm" class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4" action="https://formsubmit.co/orders.seveninst@gmail.com" method="post" autocomplete="off">
          <input type="hidden" name="_template" value="table">
          <input type="text" name="Full Name" required placeholder="Full Name" class="rounded-lg border border-black/20 px-4 py-2 text-sm bg-white">
          <input type="email" name="Email" required placeholder="Email Address" class="rounded-lg border border-black/20 px-4 py-2 text-sm bg-white">
          <input type="tel" name="Phone" required placeholder="Phone Number" class="rounded-lg border border-black/20 px-4 py-2 text-sm bg-white">
          <input type="text" name="Category" value="${safeCategory}" readonly class="rounded-lg border border-black/20 px-4 py-2 text-sm bg-gray-50 text-gray-700">
          <input type="text" name="Service Type" value="${safeTitle}" readonly class="md:col-span-2 rounded-lg border border-black/20 px-4 py-2 text-sm bg-gray-50 text-gray-700">

          <div id="detailMockRockFields" class="hidden md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg border border-black/15 p-3 bg-white">
            <select id="detailMockTestCount" name="Mock Tests" class="rounded-lg border border-black/20 px-4 py-2 text-sm bg-white">
              <option value="1">1 Mock Test</option>
              <option value="2">2 Mock Tests</option>
              <option value="3">3 Mock Tests</option>
              <option value="4">4 Mock Tests</option>
            </select>
            <input id="detailSubjectCount" type="number" min="1" name="Number of Subjects" placeholder="Number of Subjects" class="rounded-lg border border-black/20 px-4 py-2 text-sm bg-white">
          </div>

          <div id="detailProjectDocFields" class="hidden md:col-span-2 rounded-lg border border-black/15 p-3 bg-white">
            <select id="detailProjectDocType" name="Project Documentation Type" class="w-full rounded-lg border border-black/20 px-4 py-2 text-sm bg-white">
              <option value="">Select Documentation Type</option>
              <option value="Word Document" data-price="500">Word Document - ₹500</option>
              <option value="LaTeX Documentation" data-price="1000">LaTeX Documentation - ₹1000</option>
              <option value="Customized Publisher Based Documentation" data-price="2000">Customized Publisher Based Documentation - ₹2000</option>
            </select>
          </div>

          <div id="detailThesisFields" class="hidden md:col-span-2 rounded-lg border border-black/15 p-3 bg-white">
            <select id="detailThesisPageRange" name="Thesis Page Range" class="w-full rounded-lg border border-black/20 px-4 py-2 text-sm bg-white">
              <option value="">Select Page Range (LaTeX only)</option>
              <option value="4-7 pages" data-price="2000">4-7 pages - ₹2000</option>
              <option value="8-20 pages" data-price="5000">8-20 pages - ₹5000</option>
              <option value="20-40 pages" data-price="8000">20-40 pages - ₹8000</option>
              <option value="40+ pages" data-price="discussion">40 onwards - Discussion Required</option>
            </select>
          </div>

          <div id="detailDesktopFields" class="hidden md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg border border-black/15 p-3 bg-white">
            <input id="detailDesktopCount" type="number" min="1" value="1" name="Desktop Setups" placeholder="Number of Desktop Setups" class="rounded-lg border border-black/20 px-4 py-2 text-sm bg-white">
            <input type="text" name="Desktop Preference" placeholder="Theme / Style Preference" class="rounded-lg border border-black/20 px-4 py-2 text-sm bg-white">
          </div>

          <div id="detailPosterFields" class="hidden md:col-span-2 rounded-lg border border-black/15 p-3 bg-white">
            <select id="detailPosterPackage" name="Poster Package" class="w-full rounded-lg border border-black/20 px-4 py-2 text-sm bg-white">
              <option value="">Select Poster Package</option>
              <option value="Standard" data-price="500">Standard - ₹500</option>
              <option value="Premium" data-price="1000">Premium - ₹1000</option>
            </select>
          </div>

          <div id="detailAlbumFields" class="hidden md:col-span-2 rounded-lg border border-black/15 p-3 bg-white">
            <select id="detailAlbumPackage" name="Album Package" class="w-full rounded-lg border border-black/20 px-4 py-2 text-sm bg-white">
              <option value="">Select Album Package</option>
              <option value="Standard" data-price="2000">Standard - ₹2000</option>
              <option value="Premium" data-price="5000">Premium - ₹5000</option>
            </select>
          </div>

          <div class="md:col-span-2 rounded-lg border border-black/15 p-3 bg-white flex flex-col gap-2">
            <p class="text-sm font-semibold text-gray-900">Estimated Price</p>
            <p id="detailEstimatedPrice" class="text-lg font-bold text-gray-900">Select options to calculate price</p>
            <input id="detailEstimatedPriceInput" type="hidden" name="Estimated Price" value="Not selected">
            <input id="detailActionLink" type="hidden" name="Service Action Link" value="contact.html">
          </div>

          <textarea name="Requirements" rows="4" placeholder="Add details about your requirement" class="md:col-span-2 rounded-lg border border-black/20 px-4 py-2 text-sm bg-white"></textarea>

          <a id="detailBookSession" href="${safeContactLink}" target="_blank" rel="noopener noreferrer" class="md:col-span-2 inline-flex items-center justify-center rounded-lg border border-black/20 bg-black px-4 py-3 text-sm font-semibold text-white hover:bg-white hover:text-black transition-colors">Book Session</a>
          <button type="submit" class="md:col-span-2 inline-flex items-center justify-center rounded-lg border border-black/20 px-4 py-3 text-sm font-semibold text-gray-900 hover:bg-black hover:text-white transition-colors">Submit Request</button>
        </form>
      </div>
    </section>
  `;

  initServiceDetailRequestForm(container, service);
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
