
    /* SLIDER */
const slides = document.querySelectorAll(".slide");
let i = 0;

setInterval(() => {
  slides[i].classList.remove("active");
  i = (i + 1) % slides.length;
  slides[i].classList.add("active");
}, 4000);

/* MOBILE MENU */
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

openMenu.onclick = () => mobileMenu.classList.add("active");
closeMenu.onclick = () => mobileMenu.classList.remove("active");

/* LOGIN MODAL */
const loginModal = document.getElementById("loginModal");
const openLogin = document.getElementById("openLogin");
const openLoginMobile = document.getElementById("openLoginMobile");
const closeLogin = document.getElementById("closeLogin");

openLogin.onclick = openLoginMobile.onclick = () => {
  loginModal.classList.add("active");
  mobileMenu.classList.remove("active");
};

closeLogin.onclick = () => loginModal.classList.remove("active");
/*ROOM IMAGE HOVER CHANGE*/
document.querySelectorAll(".room-card").forEach(card => {
  const img = card.querySelector("img");
  const original = img.src;
  const alternate = card.getAttribute("data-alt");

  card.addEventListener("mouseenter", () => {
    img.src = alternate;
  });

  card.addEventListener("mouseleave", () => {
    img.src = original;
  });
});
/*GALLERY*/


const track = document.getElementById("carouselTrack");
const gallerySlides = document.querySelectorAll(".Slide");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let index = 0;

function updateCarousel(){
  const slideWidth = gallerySlides[0].offsetWidth + 40;
  track.style.transform = `translateX(-${index * slideWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  if(index < gallerySlides.length - 1){
    index++;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if(index > 0){
    index--;
    updateCarousel();
  }
});
/*SEVICES*/
 const sCards = document.querySelectorAll(".s-card");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

sCards.forEach(card => observer.observe(card));
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

/*events*/

document.addEventListener("DOMContentLoaded", function () {

  const eventsSwiper = new Swiper(".events-swiper", {
    loop: false,
    speed: 500,          // smooth slide

    slidesPerView: 3,
    spaceBetween: 12,

    allowTouchMove: false,   // swipe disable
    
    // ✅ arrows enable
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    autoplay: false,

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });

});

//home login form

document.addEventListener("DOMContentLoaded", function () {

  const modal = document.getElementById("loginModal");
  const closeBtn = document.getElementById("closeLogin");
  const button = modal.querySelector("button");
  const emailInput = modal.querySelector("input[type='email']");
  const passInput = modal.querySelector("input[type='password']");

  // Message element create
  const msg = document.createElement("p");
  msg.style.marginTop = "10px";
  modal.querySelector(".login-box").appendChild(msg);

  // Close modal
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Login button click
  button.addEventListener("click", function () {

    const email = emailInput.value.trim();
    const password = passInput.value.trim();

    // Empty check
    if (email === "" || password === "") {
      msg.style.color = "red";
      msg.innerText = "❌ Please enter email and password";
      return;
    }

    // ✅ DEMO correct login (aap change kar sakti ho)
    if (email === "admin@gmail.com" && password === "12345") {
      msg.style.color = "green";
      msg.innerText = "✅ Login successful";

      // auto close after 1.5 sec
      setTimeout(() => {
        modal.style.display = "none";
      }, 1500);

    } else {
      msg.style.color = "red";
      msg.innerText = "❌ Wrong email or password";
    }
  });

});

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
