export const contactData = {
  address: {
    line1: "Biswashati Road Sadpur",
    line2: "Maslandapur, West Bengal, PIN - 743289",
    country: "India"
  },
  website: "https://www.5even.netlify.app",
  phones: [
    "+91 80178 74821",
    "+91 78659 89814"
  ],
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
  
  contactContainer.innerHTML = `
    <div class="contact-grid grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      <!-- Address Section -->
      <div class="contact-card flex flex-col gap-4 p-6 border-2 border-dashed border-black/90 rounded-lg">
        <div class="flex items-center gap-3">
          <i class="ri-map-pin-line text-2xl text-black"></i>
          <h3 class="text-xl font-bold">Address</h3>
        </div>
        <div class="text-gray-700">
          <p>${contactData.address.line1}</p>
          <p>${contactData.address.line2}</p>
          <p>${contactData.address.country}</p>
        </div>
      </div>

      <!-- Phone Section -->
      <div class="contact-card flex flex-col gap-4 p-6 border-2 border-dashed border-black/90 rounded-lg">
        <div class="flex items-center gap-3">
          <i class="ri-phone-line text-2xl text-black"></i>
          <h3 class="text-xl font-bold">Phone</h3>
        </div>
        <div class="flex flex-col gap-2">
          ${contactData.phones.map(phone => `
            <a href="tel:${phone}" class="text-gray-700 hover:text-black transition">
              ${phone}
            </a>
          `).join('')}
        </div>
      </div>

      <!-- Email Section -->
      <div class="contact-card flex flex-col gap-4 p-6 border-2 border-dashed border-black/90 rounded-lg">
        <div class="flex items-center gap-3">
          <i class="ri-mail-line text-2xl text-black"></i>
          <h3 class="text-xl font-bold">Email</h3>
        </div>
        <div class="flex flex-col gap-2">
          ${contactData.emails.map(email => `
            <a href="mailto:${email}" class="text-gray-700 hover:text-black transition">
              ${email}
            </a>
          `).join('')}
        </div>
      </div>

      <!-- Website Section -->
      <div class="contact-card flex flex-col gap-4 p-6 border-2 border-dashed border-black/90 rounded-lg">
        <div class="flex items-center gap-3">
          <i class="ri-globe-line text-2xl text-black"></i>
          <h3 class="text-xl font-bold">Website</h3>
        </div>
        <a href="https://${contactData.website}" target="_blank" class="text-gray-700 hover:text-black transition">
          ${contactData.website}
        </a>
      </div>

      <!-- Social Media Section -->
      <div class="contact-card flex flex-col gap-4 p-6 border-2 border-dashed border-black/90 rounded-lg">
        <div class="flex items-center gap-3">
          <i class="ri-share-forward-line text-2xl text-black"></i>
          <h3 class="text-xl font-bold">Follow Us</h3>
        </div>
        <div class="flex gap-4 flex-wrap">
          <a href="${contactData.socials.linkedin}" target="_blank" title="LinkedIn" class="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full hover:bg-gray-800 transition">
            <i class="ri-linkedin-fill"></i>
          </a>
          <a href="${contactData.socials.youtube}" target="_blank" title="YouTube" class="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full hover:bg-gray-800 transition">
            <i class="ri-youtube-fill"></i>
          </a>
          <a href="${contactData.socials.instagram}" target="_blank" title="Instagram" class="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full hover:bg-gray-800 transition">
            <i class="ri-instagram-fill"></i>
          </a>
          <a href="${contactData.socials.twitter}" target="_blank" title="Twitter" class="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full hover:bg-gray-800 transition">
            <i class="ri-twitter-x-fill"></i>
          </a>
          <a href="${contactData.socials.facebook}" target="_blank" title="Facebook" class="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full hover:bg-gray-800 transition">
            <i class="ri-facebook-fill"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Map Section -->
    <div class="map-section flex flex-col gap-4 mt-8 w-full">
      <h3 class="text-2xl font-bold">Find Us on Map</h3>
      <iframe 
        src="${contactData.mapEmbedUrl}" 
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
