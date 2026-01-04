document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Clear old messages
    document.getElementById("successMessage").textContent = "";
    document.querySelectorAll(".error").forEach(error => error.textContent = "");

    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Name validation
    if (name.length < 3) {
        document.getElementById("nameError").textContent =
            "Name must be at least 3 characters";
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").textContent =
            "Enter a valid email address";
        isValid = false;
    }

    // Phone validation
    if (!/^\d{10}$/.test(phone)) {
        document.getElementById("phoneError").textContent =
            "Enter a valid 10-digit phone number";
        isValid = false;
    }

    // Message validation
    if (message === "") {
        document.getElementById("messageError").textContent =
            "Message cannot be empty";
        isValid = false;
    }

    // Success message
    if (isValid) {
        document.getElementById("successMessage").textContent =
            "Form submitted successfully!";
        document.getElementById("contactForm").reset();
    }
});