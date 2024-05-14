const passwordInput = document.getElementById('password');
const levelBar = document.querySelector('.level');
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
    const levels = ['level-1', 'level-2', 'level-3', 'level-4', 'level-5'];
    const levelWidth = ['20%', '40%', '60%', '80%', '100%'];
    levelBar.className = 'level ' + levels[strength];
    levelBar.style.width = levelWidth[strength];
    const strengthTexts = ['Very Weak', 'Weak', 'Moderate', 'Strong', 'Very Strong'];
    strengthValue.textContent = strengthTexts[strength];
}
