// Notification popup functionality
function toggleNotification() {
  const popup = document.getElementById('notificationPopup'); 
  popup.classList.toggle('show');
}

// Close notification when clicking outside
function closeNotification(event) {
  const popup = document.getElementById('notificationPopup');
  const notifyBtn = document.getElementById('notifyBtn');

  if (!popup.contains(event.target) && !notifyBtn.contains(event.target)) {
    popup.classList.remove('show');
  }
}

document.getElementById('notifyBtn').addEventListener('click', function (e) {
  e.stopPropagation(); // Prevent it from triggering document click
  toggleNotification();
});

document.addEventListener('click', closeNotification);


// when click any buy button load payment form
document.querySelectorAll('.info a').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('paymentModal').style.display = 'flex';
  });
});

// when click outside payment form disappear
window.addEventListener('click', function (e) {
  const model = document.getElementById('paymentModal');
  if (e.target === model) {
    model.style.display = 'none';
  }
});


// store payment form by id
document.getElementById("payment").addEventListener("submit", function (e) {
  const fonts = document.getElementsByTagName("font"); // store all fonts tag to show errors
  const inputs = this.querySelectorAll("input[type='text'], input[type='date']"); // store all input fileds for regax
  let valid = true;

  // Clear all error messages
  for (let i = 0; i < fonts.length; i++) {
    fonts[i].textContent = "";
  }

  // Card Number Validation (font[0])
  if (!/^\d{16}$/.test(inputs[0].value.trim())) {
    fonts[0].textContent = "Card number must be 16 digits.";
    fonts[0].style.color = "red";
    valid = false;
  }

  // Card Holder Validation (font[1])
  if (!/^[A-Za-z ]+$/.test(inputs[1].value.trim())) {
    fonts[1].textContent = "Name must contain letters only.";
    fonts[1].style.color = "red";
    valid = false;
  }

  // CVV Validation (font[2])
  if (!/^\d{3}$/.test(inputs[2].value.trim())) {
    fonts[2].textContent = "CVV must be 3 digits.";
    fonts[2].style.color = "red";
    valid = false;
  }

  // Expiry Date Validation (font[3])
  const expDate = new Date(inputs[3].value);
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Clear time part
  if (isNaN(expDate.getTime()) || expDate < today) {
    fonts[3].textContent = "Date must be in the future.";
    fonts[3].style.color = "red";
    valid = false;
  }

  if (!valid) {
    e.preventDefault(); // Prevent form submission if any validation fails
  }
});
