// JavaScript code
function checkCode() {
  const inputCode = document.getElementById("loopeyline").value;
  if (inputCode === "5456" || inputCode === "2854983") {
    window.location.href = "main.html";
    return false; // Prevent form submission for now, as we're handling the redirection manually.
  } else {
    alert("Incorrect code. Please try again.");
    return false; // Prevent form submission if the code is incorrect.
  }
}
