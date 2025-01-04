$(document).ready(function() {
    $.ajax({
        url: 'reviews.json', // Path to the JSON file
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            var reviewsHTML = '';
            data.forEach(function(review, index) {
                reviewsHTML += `
                    <div class="review-card">
                        <h5>${review.name}</h5>
                        <p class="rating">Rating: ${'★'.repeat(review.rating)}</p>
                        <p><strong>Pet Name:</strong> ${review.pet_name}</p>
                        <p><strong>Review:</strong> ${review.text}</p>
                    
                `;

                if (review.name === "My Review") {
                    reviewsHTML += `
                        <button class="btn btn-warning edit-review" data-index="${index}">Edit</button>
                        <button class="btn btn-danger delete-review" data-index="${index}">Delete</button>
                    `;
                }
                reviewsHTML += `</div>`;
            });
            $('#reviews-container').html(reviewsHTML);

            // Edit review
            $('.edit-review').click(function() {
                const reviewIndex = $(this).data('index');
                const review = data[reviewIndex];

                const newText = prompt("Edit your review:", review.text);
                if (newText !== null) {
                    // Update the displayed review text only
                    $(`.review-card:eq(${reviewIndex}) p:last`).html(`<strong>Review:</strong> ${newText}`);
                    alert("Review updated successfully!");
                }
            });

            // Delete review
            $('.delete-review').click(function() {
                const reviewIndex = $(this).data('index');
                // Remove the review from the page, including the edit and delete btns
                $(`.review-card:eq(${reviewIndex})`).remove();
                alert("Review deleted successfully!");
            });
        },
        error: function() {
            alert('Error loading reviews');
        }
    });
});