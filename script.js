function mostrarParte(imageUrl, description) {
    // Set the modal content
    document.getElementById("modalImage").src = imageUrl;
    document.getElementById("modalDescription").innerText = description;

    // Show the modal
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    // Hide the modal
    document.getElementById("modal").style.display = "none";
}

// Attach event listeners to cards dynamically
document.querySelectorAll('.card').forEach(function(card) {
    card.addEventListener('click', function(event) {
        // Check if the click was on the image within the card
        if (event.target.tagName.toLowerCase() === 'img') {
            // Get data from the clicked card (you may need to adjust this part based on your card structure)
            var imageUrl = card.querySelector('img').src;
            var description = card.querySelector('p').innerText;

            // Open the modal with the retrieved data
            mostrarParte(imageUrl, description);
        }
    });
});

function solicitarCotizacion() {
    // Your logic to handle WhatsApp request
    // ...
    // For example, you can open a WhatsApp link:
    window.location.href = "https://api.whatsapp.com/send?phone=123456789&text=Hola";
}
