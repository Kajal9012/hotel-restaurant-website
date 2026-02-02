

// Sirf letters allow karne ka function
function allowOnlyLetters(input) {
  input.value = input.value.replace(/[^a-zA-Z ]/g, '');
}

// Name field par real-time validation
document.getElementById("name").addEventListener("input", function () {
  allowOnlyLetters(this);
});

// Form submit
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const datetime = document.getElementById("datetime").value;
  const people = document.getElementById("people").value;

  if (!name || !email || !datetime || !people) {
    alert("Please fill all required fields!");
    return;
  }

  alert("✅ Your table has been booked successfully!");
  this.reset();
});

function closePage(){
  window.location.href = "index.html";
}


