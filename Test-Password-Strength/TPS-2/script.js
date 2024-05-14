function testPassword() {
    var password = document.getElementById("password").value;
    var strengthMeter = document.getElementById("strength");
    var strength = 0;

    // Check length
    if (password.length >= 8) {
        strength += 1;
    }

    // Check if it contains numbers
    if (/\d/.test(password)) {
        strength += 1;
    }

    // Check if it contains uppercase letters
    if (/[A-Z]/.test(password)) {
        strength += 1;
    }

    // Check if it contains special characters
    if (/[^A-Za-z0-9]/.test(password)) {
        strength += 1;
    }

    // Display password strength level
    switch (strength) {
        case 0:
            strengthMeter.style.backgroundColor = "#ff4d4d"; // Red
            strengthMeter.textContent = "Very Weak";
            break;
        case 1:
            strengthMeter.style.backgroundColor = "#ff944d"; // Orange
            strengthMeter.textContent = "Weak";
            break;
        case 2:
            strengthMeter.style.backgroundColor = "#ffd24d"; // Yellow
            strengthMeter.textContent = "Moderate";
            break;
        case 3:
            strengthMeter.style.backgroundColor = "#4dffa6"; // Green
            strengthMeter.textContent = "Strong";
            break;
        case 4:
            strengthMeter.style.backgroundColor = "#4dffb8"; // Blue
            strengthMeter.textContent = "Very Strong";
            break;
    }
}
