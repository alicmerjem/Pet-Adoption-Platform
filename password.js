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

// event listener for pass input
function updatePasswordStrength() {
    const password = document.getElementById('password').value;
    const strength = checkPasswordStrength(password);
    const strengthIndicator = document.getElementById('strength-indicator');

    // update the strength indicator
    strengthIndicator.textContent = `Password Strength: ${strength}`;
    if (strength === 'weak') {
        strengthIndicator.className = 'strength-indicator weak';
    } else if (strength === 'medium') {
        strengthIndicator.className = 'strength-indicator medium';
    } else if (strength === 'strong') {
        strengthIndicator.className = 'strength-indicator strong';
    }
}
