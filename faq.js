
document.getElementById("view-more-btn").addEventListener("click", function() {
    window.location.href = "aboutus.html"; // Redirect to About Us page
});
        // js for accordion functionality
        const accordionButtons = document.querySelectorAll('.accordion-button');
        
        accordionButtons.forEach(button => {
            button.addEventListener('click', function() {
                const content = this.nextElementSibling;
                
                // toggle the display of the accordion content
                content.classList.toggle('show');

                // close other open accordion items
                accordionButtons.forEach(otherButton => {
                    if (otherButton !== button) {
                        const otherContent = otherButton.nextElementSibling;
                        otherContent.classList.remove('show');
                    }
                });
            });
        });