document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded");
  document.querySelector("button").addEventListener("click", function (event) {
    document.querySelectorAll("p").forEach(function (paragraph) {
      paragraph.classList.toggle("caldeirao");
    });
    var newButtonText = event.target.dataset.toggleText;
    var oldText = event.target.innerText;
    event.target.innerText = newButtonText;
    event.target.dataset.toggleText = oldText;
  });
});