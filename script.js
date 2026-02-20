document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.querySelector("[data-year]");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
