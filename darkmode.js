function toggleDarkMode() {
    const body = document.body;
    const header = document.querySelector('header');
    const section = document.querySelector('section');
    const toggleButton = document.getElementById('darkModeButton');

    // Only proceed if toggleButton exists
    if (toggleButton) {
        body.classList.toggle('dark-mode');
        header && header.classList.toggle('dark-mode');  // Check if header exists
        section && section.classList.toggle('dark-mode'); // Check if section exists

        if (body.classList.contains('dark-mode')) {
            toggleButton.textContent = '🌞';  // light mode
            localStorage.setItem('darkMode', 'enabled');
        } else {
            toggleButton.textContent = '🌙';  // dark mode
            localStorage.setItem('darkMode', 'disabled');
        }
    }
}

function loadDarkModePreference() {
    const body = document.body;
    const header = document.querySelector('header');
    const section = document.querySelector('section');
    const toggleButton = document.getElementById('darkModeButton');

    const darkMode = localStorage.getItem('darkMode');

    if (darkMode === 'enabled') {
        body.classList.add('dark-mode');
        header && header.classList.add('dark-mode');  // Check if header exists
        section && section.classList.add('dark-mode'); // Check if section exists
        if (toggleButton) toggleButton.textContent = '🌞';  // light mode
    } else {
        if (toggleButton) toggleButton.textContent = '🌙';  // dark mode
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const darkModeButton = document.getElementById('darkModeButton');
    if (darkModeButton) {
        darkModeButton.addEventListener('click', toggleDarkMode);
    }
    loadDarkModePreference();
});
