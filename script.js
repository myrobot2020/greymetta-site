const form = document.querySelector(".contact-form");
const note = document.querySelector(".form-note");

if (form && note) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    note.textContent = "Thanks. We will review your brief and get back to you shortly.";
    form.reset();
  });
}
