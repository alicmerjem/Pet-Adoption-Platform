window.addEventListener('scroll', function() {
    const images = document.querySelectorAll('.image-content');
    images.forEach((image) => {
        const rect = image.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
            image.classList.add('visible');
        }
    });
});