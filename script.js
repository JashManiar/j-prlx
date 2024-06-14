const modal = document.querySelector(".modal");
const btn = document.getElementById("myBtn");

btn.onclick = function() {
  modal.style.display = "block";
};

// Close modal when clicking outside or on close button
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
