export const contactData = {
  address: {
    line1: "123 Tech Street",
    line2: "Bengaluru, Karnataka 560001",
    country: "India"
  },
  website: "www.5even.in",
  phones: [
    "+91 98765 43210",
    "+91 87654 32109"
  ],
  emails: [
    "info@5even.in",
    "support@5even.in",
    "careers@5even.in"
  ],
  socials: {
    linkedin: "https://linkedin.com/company/5even",
    youtube: "https://youtube.com/@5even",
    instagram: "https://instagram.com/5even",
    twitter: "https://twitter.com/5even",
    facebook: "https://facebook.com/5even"
  },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5156033956014!2d77.6245!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1d0000000001%3A0x0!2s5EVEN!5e0!3m2!1sen!2sin!4v1234567890"
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
