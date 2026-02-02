
document.addEventListener("DOMContentLoaded", function () {

  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = form.querySelectorAll("input, select");
    let valid = true;

    // Empty field check
    inputs.forEach(input => {
      if (input.hasAttribute("required") && input.value.trim() === "") {
        valid = false;
        input.style.borderColor = "red";
      } else {
        input.style.borderColor = "#ccc";
      }
    });

    if (!valid) {
      alert("❌ Please fill all required fields");
      return;
    }

    // Date validation
    const dates = form.querySelectorAll("input[type='date']");
    if (dates.length === 2) {
      const checkIn = new Date(dates[0].value);
      const checkOut = new Date(dates[1].value);

      if (checkOut <= checkIn) {
        alert("❌ Check-out date must be after Check-in date");
        return;
      }
    }

    // Success
    alert("✅ Room booking request submitted successfully!");

    form.reset();
  });

});

function goHome(){
  window.location.href = "index.html";
}



