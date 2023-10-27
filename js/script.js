function validateForm() {
    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const memberName = document.getElementById("memberName").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    document.getElementById("name-error").innerHTML = "";
    document.getElementById("lastname-error").innerHTML = "";
    document.getElementById("member-error").innerHTML = "";
    document.getElementById("password-error").innerHTML = "";

    if (name === "") {
        document.getElementById("name-error").innerHTML = "Please enter your First Name";
        return false;
    }

    if (lastname === "") {
        document.getElementById("lastname-error").innerHTML = "Please enter your Last Name";
        return false;
    }

    if (memberName === "") {
        document.getElementById("member-error").innerHTML = "Please enter Username";
        return false;
    } else if (memberName.length < 5 || memberName.length > 20) {
        document.getElementById("member-error").innerHTML = "Username must be between 5 and 20 characters";
        return false;
    }

    if (password === "") {
        document.getElementById("password-error").innerHTML = "Please enter a password";
        return false;
    } else if (password.length < 7 || password.length > 20) {
        document.getElementById("password-error").innerHTML = "Password must be between 7 and 20 characters";
        return false;
    }

    if (password !== confirmPassword) {
        document.getElementById("password-error").innerHTML = "Passwords do not match";
        return false;
    }

    return true;
}

document.getElementById("show-password").addEventListener("click", function() {
    const passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
});

document.getElementById("registration-form").addEventListener("submit", function(e) {
    if (!validateForm()) {
        e.preventDefault();
    }
});