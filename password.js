// check pass strength
function checkPasswordStrength(password) {
    let strength = '';
    const length = password.length;

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // weak
    if (length < 6 || !(hasUpperCase || hasLowerCase) || !hasNumbers) {
        strength = 'weak';
    }
    // medium
    else if (length >= 6 && length < 8 && (hasUpperCase || hasLowerCase) && hasNumbers) {
        strength = 'medium';
    }
    // strong
    else if (length >= 8 && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars) {
        strength = 'strong';
    }
    return strength;
}

// event listener for password input
function updatePasswordStrength() {
    const password = document.getElementById('password').value;
    const strength = checkPasswordStrength(password);
    const strengthIndicator = document.getElementById('strength-indicator');
    const passwordCriteria = document.getElementById('password-criteria'); // Ensure this exists in the HTML

    // update the strength indicator
    strengthIndicator.textContent = `Password Strength: ${strength}`;
    if (strength === 'weak') {
        strengthIndicator.className = 'strength-indicator weak';
    } else if (strength === 'medium') {
        strengthIndicator.className = 'strength-indicator medium';
    } else if (strength === 'strong') {
        strengthIndicator.className = 'strength-indicator strong';
    }

    // checking password criteria
    let criteriaMessage = "";
    if (password.length < 6) {
        criteriaMessage += "<p>Password must be at least 6 characters long.</p>";
    }
    if (!/[A-Z]/.test(password)) {
        criteriaMessage += "<p>Password must contain at least one uppercase letter.</p>";
    }
    if (!/[a-z]/.test(password)) {
        criteriaMessage += "<p>Password must contain at least one lowercase letter.</p>";
    }
    if (!/\d/.test(password)) {
        criteriaMessage += "<p>Password must contain at least one number.</p>";
    }
    if (!/[!@#$%^&*(),.?\":{}|<>]/.test(password)) {
        criteriaMessage += "<p>Password must contain at least one special character.</p>";
    }

    // displaying the criteria message
    passwordCriteria.innerHTML = criteriaMessage;
}
