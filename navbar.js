const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

function removeActiveClasses() {
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
}

function setActiveLink(link) {
  link.classList.add('active');
}

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    removeActiveClasses();
    setActiveLink(link);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname;
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      setActiveLink(link);
    }
  });
});
