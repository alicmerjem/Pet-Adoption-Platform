function toggleDarkMode() {
    const body = document.body;
    const header = document.querySelector('header');
    const section = document.querySelector('section');
    const toggleButton = document.getElementById('darkModeButton');

    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    section.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = '🌞';  // light mode
        localStorage.setItem('darkMode', 'enabled');
    } else {
        toggleButton.textContent = '🌙';  // light mode
        localStorage.setItem('darkMode', 'disabled');
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
        header.classList.add('dark-mode');
        section.classList.add('dark-mode');
        toggleButton.textContent = '🌞';   
    } else {
        toggleButton.textContent = '🌙'; 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const darkModeButton = document.getElementById('darkModeButton');
    if (darkModeButton) {
        darkModeButton.addEventListener('click', toggleDarkMode);
    }
    loadDarkModePreference();
});
