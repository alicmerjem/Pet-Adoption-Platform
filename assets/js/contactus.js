    // Toastr options
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };

    window.onload = function () {

        // Add event listener to the "Send Message" button
        document.getElementById('sendMessage').addEventListener('click', function (event) {
            event.preventDefault(); // Prevent form from submitting immediately

            // Get the form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Basic validation to ensure no fields are empty
            if (name === "" || email === "" || message === "") {
                toastr.error("Please fill in all the fields.");
                return;
            }

            // Simulate message sending success
            toastr.success("Your message has been sent successfully!");

            // Reset the form after submission
            document.getElementById('contactForm').reset();
        });
    };


         const newsContainer = document.getElementById('newsArticles');
        
        fetch('https://newsapi.org/v2/everything?q="pet adoption"&apiKey=357cd5b0e4dd4394bc949229bce2bb39')
            .then(response => response.json())
            .then(data => {
                const articles = data.articles;
                articles.forEach(article => {
                    const articleElement = document.createElement('a');
                    articleElement.href = article.url;
                    articleElement.target = '_blank';
                    articleElement.classList.add('list-group-item', 'list-group-item-action');
                    articleElement.innerHTML = `<strong>${article.title}</strong><p>${article.description}</p>`;
                    newsContainer.appendChild(articleElement);
                });
            })
            .catch(error => console.error('Error fetching news:', error));