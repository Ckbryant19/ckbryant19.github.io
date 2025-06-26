
// Show a confirmation message when the contact form is submitted
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    alert("Thank you for contacting CKBRYANT MEP Services! We'll get back to you soon.");
  });
});
