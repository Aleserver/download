document.getElementById("shieldForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop form from POSTing and refreshing the page

  const inputCode = document.getElementById("loopeyline").value.trim();

  // \u2105 is the explicit Unicode escape for '℅'
  if (
    inputCode === "3876J\u2105@0" || 
    inputCode === "3876J%@0" || 
    inputCode === "2854983"
  ) {
    window.location.href = "./main";
  } else {
    alert("Incorrect code. Please try again.");
  }
});
