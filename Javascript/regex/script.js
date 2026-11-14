const usernamePattern = /^[A-Za-z0-9]{4,10}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\d{10}$/;
const coursePattern = /course/i;

document
  .getElementById("validateButton")
  .addEventListener("click", function () {
    const username = document.getElementById("username").value;

    const email = document.getElementById("email").value;

    const phone = document.getElementById("phone").value;

    const message = document.getElementById("message").value;

    if (usernamePattern.test(username)) {
      document.getElementById("usernameResult").textContent =
        "Username is valid.";
    } else {
      document.getElementById("usernameResult").textContent =
        "Username must contain 4-10 letters or digits.";
    }

    if (emailPattern.test(email)) {
      document.getElementById("emailResult").textContent =
        "Email format is valid.";
    } else {
      document.getElementById("emailResult").textContent =
        "Please enter a valid email format.";
    }

    if (phonePattern.test(phone)) {
      document.getElementById("phoneResult").textContent =
        "Phone number is valid.";
    } else {
      document.getElementById("phoneResult").textContent =
        "Phone number must contain exactly 10 digits.";
    }

    if (coursePattern.test(message)) {
      document.getElementById("messageResult").textContent =
        "The message contains the word 'Hellooo'.";
    } else {
      document.getElementById("messageResult").textContent =
        "The message does not contain the word 'Hellooo'.";
    }
  });
