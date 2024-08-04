document.addEventListener("DOMContentLoaded", function () {
  // Toggle dropdown content when the button is clicked
  const toggleButtons = document.querySelectorAll(".toggle-dropdown");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const dropdown = this.nextElementSibling;
      dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });
  });

  // Form submission
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const getInputValue = (id) => form.querySelector(`#${id}`).value;
    const companyName = getInputValue("company-name");
    const businessSize = getInputValue("business-size");
    const budget = getInputValue("budget");
    const securityImportance = getInputValue("security-importance");
    const seamlessness = getInputValue("seamlessness");

    // You can perform further actions here, like sending data to a server or displaying a thank you message.
    // For now, let's log the user's input to the console.
    console.log("Company Name: " + companyName);
    console.log("Business Size: " + businessSize);
    console.log("Budget: " + budget);
    console.log("Security Importance: " + securityImportance);
    console.log("Seamlessness: " + seamlessness);
  });
});

function scrollToForm() {
  const form = document.getElementById("info-form");
  if (form) {
    form.scrollIntoView({ behavior: "smooth" });
  }
}

document.getElementById('info-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission behavior

  // Scroll to the "Authentication Solutions" section
  const authSolutionsSection = document.querySelector('.authentication-solutions');
  authSolutionsSection.scrollIntoView({ behavior: 'smooth' });
});
