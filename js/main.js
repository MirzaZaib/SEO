// Digital Art Studio — shared front-end behaviour (demo site)
document.addEventListener("DOMContentLoaded", function () {
  var year = document.querySelectorAll(".current-year");
  year.forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Simple demo "share" buttons used on the off-page SEO best-practice page.
  document.querySelectorAll("[data-share]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var network = btn.getAttribute("data-share");
      alert("Demo only: this would open a " + network + " share dialog for this page.");
    });
  });
});
