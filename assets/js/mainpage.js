document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('welcomeText').innerText = `Hello, ${username}`;
    }
});
