const passwordInput = document.getElementById('password');
const strengthMeter = document.querySelector('.strength');
const strengthValue = document.getElementById('strength-value');

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    const strength = calculatePasswordStrength(password);
    updateStrengthMeter(strength);
});

function calculatePasswordStrength(password) {
    let strength = 0;
    const length = password.length;
    
    if (length >= 8) strength += 1;
    if (length >= 12) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    return strength;
}

function updateStrengthMeter(strength) {
    strengthMeter.style.width = (strength * 20) + '%';
    
    if (strength === 1) {
        strengthValue.textContent = 'Very Weak';
        strengthValue.style.color = 'red';
    } else if (strength === 2) {
        strengthValue.textContent = 'Weak';
        strengthValue.style.color = 'orange';
    } else if (strength === 3) {
        strengthValue.textContent = 'Moderate';
        strengthValue.style.color = 'yellow';
    } else if (strength === 4) {
        strengthValue.textContent = 'Strong';
        strengthValue.style.color = 'green';
    } else if (strength === 5) {
        strengthValue.textContent = 'Very Strong';
        strengthValue.style.color = 'darkgreen';
    } else {
        strengthValue.textContent = 'Too Short';
        strengthValue.style.color = 'gray';
    }
}
