let validName = false;
let validemail = false;
let validpassword = false;
let validPhone = false;

// Enable or disable the button depending on inputs
function checkFormValidity() {
    const registerBtn = document.getElementById("registerBtn");
    if (validName && validemail && validpassword && validPhone) {
        registerBtn.disabled = false;
    } else {
        registerBtn.disabled = true;
    }
}

document.getElementById("name").addEventListener("input", function () {
    let nameField = this.value;
    const nameError = document.getElementById("nameError");
    const nameRegex = /^[A-Za-z\s]{3,}$/;

    if (!nameRegex.test(nameField)) {
        nameError.classList.remove("d-none");
        validName = false;
    } else {
        nameError.classList.add("d-none");
        validName = true;
    }
    checkFormValidity();
});

document.getElementById("phone").addEventListener("input", function () {
    let phoneField = this.value;
    const phoneError = document.getElementById("phoneError");
    const phoneRegex = /^\d{10}$/;

    if (!phoneRegex.test(phoneField)) {
        phoneError.classList.remove("d-none");
        validPhone = false;
    } else {
        phoneError.classList.add("d-none");
        validPhone = true;
    }
    checkFormValidity();
});

document.getElementById("email").addEventListener("input", function () {
    let emailField = this.value;
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(emailField)) {
        emailError.classList.remove("d-none");
        validemail = false;
    } else {
        emailError.classList.add("d-none");
        validemail = true;
    }
    checkFormValidity();
});

document.getElementById("password").addEventListener("input", function () {
    let passwordField = this.value;
    const passwordError = document.getElementById("passwordError");
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordRegex.test(passwordField)) {
        this.setCustomValidity("Password must be at least 6 characters long.");
        passwordError.classList.remove("d-none");
        validpassword = false;
    } else {
        this.setCustomValidity("");
        passwordError.classList.add("d-none");
        validpassword = true;
    }
    checkFormValidity();
});

document
    .getElementById("confirmPassword")
    .addEventListener("input", function () {
        const passwordField = document.getElementById("password").value;
        const confirmPasswordField = this.value;
        const confirmPasswordError = document.getElementById(
            "confirmPasswordError"
        );

        if (passwordField !== confirmPasswordField) {
            confirmPasswordError.classList.remove("d-none");
            validconfirm = false;
        } else {
            confirmPasswordError.classList.add("d-none");
            validconfirm = true;
        }
        checkFormValidity();
    });

document.getElementById("registerBtn").addEventListener("click", () => {
    alert("Sign up is Successful!");

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
    validName = false;
    validemail = false;
    validpassword = false;
    validconfirm = false;
    validdate = false;
});
