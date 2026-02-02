
const tabs = document.querySelectorAll(".tab");
const panes = document.querySelectorAll(".menu-pane");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    tabs.forEach(t => t.classList.remove("active"));
    panes.forEach(p => p.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.target).classList.add("active");
  });
});
/*cheafteam*/
const cards = document.querySelectorAll(".team-card");

cards.forEach((card, index) => {
  card.style.animation = `fadeUp 0.6s ease forwards`;
  card.style.animationDelay = `${index * 0.2}s`;
});

const style = document.createElement("style");
style.innerHTML = `
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}`;
document.head.appendChild(style);
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
//navbar//
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
//Go to Top Button
let topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};


