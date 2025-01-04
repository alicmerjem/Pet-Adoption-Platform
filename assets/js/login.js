function submitForm(e) {
    e.preventDefault(); // Prevent default form submission
    const form = e.target;
    
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form)
    })
    .then(response => {
        if (response.ok) {
            window.location.href = 'mainpage.html'; // Redirect upon success
        }
    })
    .catch(error => console.error('Error:', error));
}