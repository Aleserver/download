// mainjs.js

// Show the popup when the page loads
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.querySelector(".popup");
    popup.style.display = "block";
  });
  
  // Hide the popup when the close button is clicked
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("close-btn")) {
      const popup = document.querySelector(".popup");
      popup.style.display = "none";
    }
  });
  