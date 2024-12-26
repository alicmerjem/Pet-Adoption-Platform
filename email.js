function validateEmail() {
    const email = document.getElementById('email').value;
    const emailFeedback = document.getElementById('email-feedback');

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (email.match(emailPattern)) {
        emailFeedback.innerHTML = "<p>Email format is valid.</p>";
        emailFeedback.style.color = "green";
    } else {
        emailFeedback.innerHTML = "<p>Please enter a valid email format (e.g., user@example.com).</p>";
        emailFeedback.style.color = "red";
    }
}

document.getElementById('email').addEventListener('input', validateEmail);
