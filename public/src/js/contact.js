import { escapeHtml, sanitizeUrl } from "./security.js";

export const contactData = {
  address: {
    line1: "Biswashati Road Sadpur",
    line2: "Maslandapur, West Bengal, PIN - 743289",
    country: "India"
  },
  website: "https://www.5even.netlify.app",
  phoneNotice: "to be added later",
  emails: [
    "institution5even@gmail.com",
    "grievance57institution@gmail.com",
    "orders.seveninst@gmail.com"
  ],
  socials: {
    linkedin: "https://linkedin.com/company/5even",
    youtube: "https://youtube.com/@5even",
    instagram: "https://instagram.com/5even",
    twitter: "https://twitter.com/5even",
    facebook: "https://facebook.com/5even"
  },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.5744866861137!2d88.74297737535268!3d22.855227179291365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8b3ab6c139569%3A0xbf9c42b4f20db5d7!2sMaslandapur%2C%20West%20Bengal%20743289!5e0!3m2!1sen!2sin!4v1771725433377!5m2!1sen!2sin"
};

export function renderContactDetails() {
  const contactContainer = document.querySelector('.contact-details');
  
  if (!contactContainer) {
    console.warn('Contact details container not found');
    return;
  }
  
  console.log('Rendering contact details');
  
  const addressLine1 = escapeHtml(contactData.address?.line1);
  const addressLine2 = escapeHtml(contactData.address?.line2);
  const addressCountry = escapeHtml(contactData.address?.country);
  const phoneNotice = escapeHtml(contactData.phoneNotice);
  const emailGeneral = escapeHtml(contactData.emails?.[0]);
  const emailGrievance = escapeHtml(contactData.emails?.[1]);
  const emailOrders = escapeHtml(contactData.emails?.[2]);
  const emailGeneralHref = sanitizeUrl(`mailto:${contactData.emails?.[0] || ""}`);
  const emailGrievanceHref = sanitizeUrl(`mailto:${contactData.emails?.[1] || ""}`);
  const emailOrdersHref = sanitizeUrl(`mailto:${contactData.emails?.[2] || ""}`);
  const websiteHref = sanitizeUrl(contactData.website);
  const websiteLabel = escapeHtml(contactData.website);
  const linkedinHref = sanitizeUrl(contactData.socials?.linkedin);
  const youtubeHref = sanitizeUrl(contactData.socials?.youtube);
  const instagramHref = sanitizeUrl(contactData.socials?.instagram);
  const twitterHref = sanitizeUrl(contactData.socials?.twitter);
  const facebookHref = sanitizeUrl(contactData.socials?.facebook);
  const mapEmbedUrl = sanitizeUrl(contactData.mapEmbedUrl, { fallback: "" });

  contactContainer.innerHTML = `
    <div class="contact-grid grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      <!-- Address Section -->
      <div class="contact-card flex flex-col gap-4 p-6 border-2 border-dashed border-black/90 rounded-lg">
        <div class="flex items-center gap-3">
          <i class="ri-map-pin-line text-2xl text-black"></i>
          <h3 class="text-xl font-bold">Address</h3>
        </div>
        <div class="text-gray-700">
          <p>${addressLine1}</p>
          <p>${addressLine2}</p>
          <p>${addressCountry}</p>
        </div>
      </div>

      <!-- Phone Section -->
      <div class="contact-card flex flex-col gap-4 p-6 border-2 border-dashed border-black/90 rounded-lg">
        <div class="flex items-center gap-3">
          <i class="ri-phone-line text-2xl text-black"></i>
          <h3 class="text-xl font-bold">Phone</h3>
        </div>
        <div class="flex flex-col gap-2">
          <a href="#" class="text-gray-700 hover:text-black transition">
            ${phoneNotice}
          </a>
        </div>
      </div>

      <!-- Email Section -->
      <div class="contact-card flex flex-col gap-4 p-6 border-2 border-dashed border-black/90 rounded-lg">
        <div class="flex items-center gap-3">
          <i class="ri-mail-line text-2xl text-black"></i>
          <h3 class="text-xl font-bold">Email</h3>
        </div>
        <div class="flex flex-col gap-3">
          <div class="flex flex-col gap-1">
            <span class="text-xs text-gray-500 font-semibold">General</span>
            <a href="${emailGeneralHref}" class="text-sm text-gray-700 hover:text-black transition break-all">
              ${emailGeneral}
            </a>
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-xs text-gray-500 font-semibold">Grievance</span>
            <a href="${emailGrievanceHref}" class="text-sm text-gray-700 hover:text-black transition break-all">
              ${emailGrievance}
            </a>
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-xs text-gray-500 font-semibold">Orders</span>
            <a href="${emailOrdersHref}" class="text-sm text-gray-700 hover:text-black transition break-all">
              ${emailOrders}
            </a>
          </div>
        </div>
      </div>

      <!-- Website Section -->
      <div class="contact-card flex flex-col gap-4 p-6 border-2 border-dashed border-black/90 rounded-lg">
        <div class="flex items-center gap-3">
          <i class="ri-globe-line text-2xl text-black"></i>
          <h3 class="text-xl font-bold">Website</h3>
        </div>
        <a href="${websiteHref}" target="_blank" rel="noopener noreferrer" class="text-sm text-gray-700 hover:text-black transition break-all">
          ${websiteLabel}
        </a>
      </div>

      <!-- Social Media Section -->
      <div class="contact-card flex flex-col gap-4 p-6 border-2 border-dashed border-black/90 rounded-lg">
        <div class="flex items-center gap-3">
          <i class="ri-share-forward-line text-2xl text-black"></i>
          <h3 class="text-xl font-bold">Follow Us</h3>
        </div>
        <div class="flex gap-4 flex-wrap">
          <a href="${linkedinHref}" target="_blank" rel="noopener noreferrer" title="LinkedIn" class="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full hover:bg-gray-800 transition">
            <i class="ri-linkedin-fill"></i>
          </a>
          <a href="${youtubeHref}" target="_blank" rel="noopener noreferrer" title="YouTube" class="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full hover:bg-gray-800 transition">
            <i class="ri-youtube-fill"></i>
          </a>
          <a href="${instagramHref}" target="_blank" rel="noopener noreferrer" title="Instagram" class="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full hover:bg-gray-800 transition">
            <i class="ri-instagram-fill"></i>
          </a>
          <a href="${twitterHref}" target="_blank" rel="noopener noreferrer" title="Twitter" class="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full hover:bg-gray-800 transition">
            <i class="ri-twitter-x-fill"></i>
          </a>
          <a href="${facebookHref}" target="_blank" rel="noopener noreferrer" title="Facebook" class="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full hover:bg-gray-800 transition">
            <i class="ri-facebook-fill"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Contact Form Section -->
    <div class="contact-form-section flex flex-col gap-4 mt-8 w-full">
      <h3 class="text-2xl font-bold">Send Us a Message</h3>
      <div class="bg-white/70 backdrop-blur-sm rounded-xl border border-black/10 p-5 shadow-sm">
        <form class="grid grid-cols-1 md:grid-cols-2 gap-4" action="https://formsubmit.co/orders.seveninst@gmail.com" method="post" autocomplete="off">
          <input type="hidden" name="_template" value="table">
          <input type="text" name="Full Name" required placeholder="Full Name" class="rounded-lg border border-black/20 px-4 py-2 text-sm bg-white">
          <input type="email" name="Email" required placeholder="Email Address" class="rounded-lg border border-black/20 px-4 py-2 text-sm bg-white">
          <input type="text" name="_subject" required placeholder="Subject" class="rounded-lg border border-black/20 px-4 py-2 text-sm bg-white md:col-span-2">
          <input type="tel" name="Phone" placeholder="Phone Number" class="rounded-lg border border-black/20 px-4 py-2 text-sm bg-white md:col-span-2">
          <textarea name="Message" rows="5" required placeholder="Write your message" class="rounded-lg border border-black/20 px-4 py-2 text-sm bg-white md:col-span-2"></textarea>
          <button type="submit" class="md:col-span-2 inline-flex items-center justify-center rounded-lg border border-black/20 px-4 py-3 text-sm font-semibold text-gray-900 hover:bg-black hover:text-white transition-colors">Send Message</button>
        </form>
      </div>
    </div>

    <!-- Map Section -->
    <div class="map-section flex flex-col gap-4 mt-8 w-full">
      <h3 class="text-2xl font-bold">Find Us on Map</h3>
      <iframe 
        src="${mapEmbedUrl}" 
        width="100%" 
        height="400" 
        style="border:2px dashed rgba(0,0,0,0.9); border-radius: 8px;" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  `;
}

function initializeContactPage() {
  renderContactDetails();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeContactPage);
} else {
  initializeContactPage();
}
