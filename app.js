// Project 1: write your form validation in this file.
// Fresh Roots Market - mailing-list form validation

const form = document.querySelector("#signup-form");

const nameField = document.querySelector("#name");
const emailField = document.querySelector("#email");
const frequencyField = document.querySelector("#frequency");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const frequencyError = document.querySelector("#frequency-error");

const formMessage = document.querySelector("#form-message");

// Check the form whenever the user presses the Sign up button.
form.addEventListener("submit", function (event) {
    // Stop the browser from reloading the page.
    event.preventDefault();

    // Remove an earlier success message if the user submits again.
    formMessage.textContent = "";
    formMessage.classList.remove("success");

    // Remove spaces from the beginning and end of each value.
    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const frequency = frequencyField.value.trim();

    let hasError = false;

    // Check the name.
    if (name === "") {
        nameError.textContent = "Enter your name.";
        nameField.setAttribute("aria-invalid", "true");
        hasError = true;
    } else {
        nameError.textContent = "";
        nameField.removeAttribute("aria-invalid");
    }

    // Check the email.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.textContent = "Enter your email address.";
        emailField.setAttribute("aria-invalid", "true");
        hasError = true;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Enter an email address like name@example.com.";
        emailField.setAttribute("aria-invalid", "true");
        hasError = true;
    } else {
        emailError.textContent = "";
        emailField.removeAttribute("aria-invalid");
    }

    // Check the email frequency.
    if (frequency === "") {
        frequencyError.textContent = "Choose how often we should email you.";
        frequencyField.setAttribute("aria-invalid", "true");
        hasError = true;
    } else {
        frequencyError.textContent = "";
        frequencyField.removeAttribute("aria-invalid");
    }

    // If something is wrong, focus the first field that needs fixing.
    if (hasError) {
        const firstInvalidField = form.querySelector('[aria-invalid="true"]');
        firstInvalidField.focus();
        return;
    }

    // Show a personalised confirmation when every field is correct.
    formMessage.textContent = `Thank you, ${name}! You're on the mailing list.`;
    formMessage.classList.add("success");

    // Clear the form after a successful sign-up.
    form.reset();
});
