const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');
const modalImage = modal.querySelector('img');
const modalDescription = modal.querySelector('.modal-description');
const nextBtn = modal.querySelector('.next');
const prevBtn = modal.querySelector('.prev');
const galleryItems = document.querySelectorAll('.gallery-item');
let currentIndex = 0;

galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        const img = item.querySelector('img');
        const caption = item.querySelector('.gallery-caption');
        modalImage.src = img.src;
        modalDescription.textContent = caption.textContent;
        modal.style.display = 'flex';
    });
});


modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    updateModal();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    updateModal();
});

function updateModal() {
    const item = galleryItems[currentIndex];
    const img = item.querySelector('img');
    const caption = item.querySelector('.gallery-caption');
    modalImage.src = img.src;
    modalDescription.textContent = caption.textContent;
}