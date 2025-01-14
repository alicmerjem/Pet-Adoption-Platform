function checkPasswordStrength(password) {
    if (password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        return 'strong';
    } else if (password.length >= 6 && /[A-Z]/.test(password) && /[a-z]/.test(password)) {
        return 'medium';
    } else {
        return 'weak';
    }
}

function updatePasswordStrength() {
    const password = document.getElementById('password').value;
    const strength = checkPasswordStrength(password);
    const strengthIndicator = document.getElementById('strength-indicator');
    const passwordCriteria = document.getElementById('password-criteria');

    // Update the strength indicator
    strengthIndicator.textContent = `Password Strength: ${strength}`;
    if (strength === 'weak') {
        strengthIndicator.className = 'strength-indicator weak';
    } else if (strength === 'medium') {
        strengthIndicator.className = 'strength-indicator medium';
    } else if (strength === 'strong') {
        strengthIndicator.className = 'strength-indicator strong';
    }

    // Check password criteria
    let criteriaMessage = "";

    // Show only the first unmet condition
    if (password.length < 6) {
        criteriaMessage = "<p>Password must be at least 6 characters long.</p>";
    } else if (!/[A-Z]/.test(password)) {
        criteriaMessage = "<p>Password must contain at least one uppercase letter.</p>";
    } else if (!/[a-z]/.test(password)) {
        criteriaMessage = "<p>Password must contain at least one lowercase letter.</p>";
    } else if (!/\d/.test(password)) {
        criteriaMessage = "<p>Password must contain at least one number.</p>";
    } else if (!/[!@#$%^&*(),.?\":{}|<>]/.test(password)) {
        criteriaMessage = "<p>Password must contain at least one special character.</p>";
    }

    // Display the first unmet criteria message
    passwordCriteria.innerHTML = criteriaMessage;
}
