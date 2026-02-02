
const form = document.getElementById("inquiryForm");
const msg = document.getElementById("formMsg");

const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const countryCode = document.getElementById("countryCode");
const messageInput = document.getElementById("message");

/* NAME → ONLY LETTERS */
nameInput.addEventListener("input", function () {
  this.value = this.value.replace(/[^a-zA-Z ]/g, "");
});



// Country-wise phone length
const phoneLimits = {
 "+91": 10,   // India
  "+1": 10,    // USA
  "+44": 11,   // UK
  "+61": 9,    // Australia
  "+81": 10,   // Japan
  "+49": 11,   // Germany
  "+33": 9,    // France
  "+971": 9,   // UAE
  "+966": 9,   // Saudi
  "+92": 10,   // Pakistan
  "+880": 10,  // Bangladesh
  "+94": 9,    // Sri Lanka
  "+86": 11,   // China
  "+7": 10     // Russia
};

// Only numbers + limit
phoneInput.addEventListener("input", function () {
  // letters hatao
  this.value = this.value.replace(/[^0-9]/g, "");

  const selectedCountry = countryCode.value;
  const maxLength = phoneLimits[selectedCountry];

  if (maxLength && this.value.length > maxLength) {
    this.value = this.value.slice(0, maxLength);
  }
});

// Country change par phone clear
countryCode.addEventListener("change", function () {
  phoneInput.value = "";
});


/* FORM SUBMIT CHECK */
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (
    nameInput.value.trim() === "" ||
    countryCode.value === "" ||
    phoneInput.value.trim() === "" ||
    messageInput.value.trim() === ""
  ) {
    msg.style.color = "red";
    msg.innerText = "❌ Please fill all required fields";
    return;
  }

  msg.style.color = "green";
  msg.innerText = "✅ Inquiry sent successfully!";
  form.reset();

  setTimeout(() => {
    msg.innerText = "";
  }, 3000);
});
/*form*/


document.getElementById("inquiryForm").addEventListener("submit", function (e) {
  e.preventDefault();

  document.getElementById("formMsg").innerText =
    "Your inquiry has been sent successfully!";

  this.reset();
});
// ===== MOBILE MENU TOGGLE =====
document.addEventListener("DOMContentLoaded", function () {
  const openMenu = document.getElementById("openMenu");
  const closeMenu = document.getElementById("closeMenu");
  const mobileMenu = document.getElementById("mobileMenu");

  openMenu.addEventListener("click", () => {
    mobileMenu.classList.add("active");
  });

  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});
// FOOTER NEWSLETTER
document.querySelector(".newsletter button").addEventListener("click", function () {

  const emailInput = document.querySelector(".newsletter input");
  const email = emailInput.value.trim();

  // Email pattern (basic & correct)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    alert("❌ Please enter your email address");
    return;
  }

  if (!emailPattern.test(email)) {
    alert("❌ Please enter a valid email address");
    return;
  }

  alert("✅ Thank you for subscribing!");
  emailInput.value = "";
});
   
