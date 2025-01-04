document.addEventListener('DOMContentLoaded', () => {
    function submitForm(e) {
        e.preventDefault();

        const form = e.target;
        const successMessage = document.getElementById('success-message');

        successMessage.classList.add('show');

        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
        })
        .then(response => {
            if (response.ok) {
                successMessage.style.display = 'block';
                setTimeout(() => {
                    window.location.href = 'mainpage.html'; // Redirect after successful form submission
                }, 2000);
            } else {
                console.error("Failed to submit form. Response status: ", response.status);
                successMessage.style.display = 'none'; // Hide success message if the request fails
            }
        })
        .catch(error => {
            console.error('Error:', error);
            successMessage.style.display = 'none'; // Hide success message in case of error
        });
    }

    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', submitForm);
    } else {
        console.error('Form not found. Ensure the HTML includes a <form> element.');
    }
});
