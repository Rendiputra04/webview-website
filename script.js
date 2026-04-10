const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();

  formMessage.textContent = `Terima kasih, ${name}. Pesan Anda sudah dikirim.`;
  contactForm.reset();
});