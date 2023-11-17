function mostrarParte(imageUrl, description) {
    // Set the modal content
    document.getElementById("modalImage").src = imageUrl;
    document.getElementById("modalDescription").innerText = description;

    // Show the modal
    document.getElementById("modal").style.display = "flex";

    // Populate the pricing table
    mostrarPrecios(description);
}

function closeModal() {
    // Hide the modal
    document.getElementById("modal").style.display = "none";
}

// Attach event listeners to cards dynamically
document.querySelectorAll('.card').forEach(function (card) {
    card.addEventListener('click', function (event) {
        // Check if the click was on the image within the card
        if (event.target.tagName.toLowerCase() === 'img') {
            // Get data from the clicked card
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

// Sample pricing data
var preciosEjemplo = {
    'puertas': 100,
    'capo': 150,
    'atras': 120,
    'techo': 200
    // Add more pricing data as needed
};

function mostrarPrecios(partName, description) {
    var pricingBody = document.getElementById("pricingBody");

    // Clear existing content
    pricingBody.innerHTML = '';

    // Check if pricing data exists for the selected part
    if (preciosEjemplo.hasOwnProperty(partName.toLowerCase())) {
        // Create a row in the pricing table
        var row = document.createElement("tr");

        // Create cells for part name, description, and calculated price
        var partCell = document.createElement("td");
        partCell.innerText = partName;

        var descriptionCell = document.createElement("td");
        descriptionCell.innerText = description;

        var priceCell = document.createElement("td");

        // Calculate the price based on the damage description
        var precioBase = preciosEjemplo[partName.toLowerCase()];
        var precioCalculado = calcularPrecio(precioBase, description);
        priceCell.innerText = '$' + precioCalculado;

        // Append cells to the row
        row.appendChild(partCell);
        row.appendChild(descriptionCell);
        row.appendChild(priceCell);

        // Append the row to the pricing table body
        pricingBody.appendChild(row);
    } else {
        // If no pricing data is available, display a message
        var noPriceRow = document.createElement("tr");
        var noPriceCell = document.createElement("td");
        noPriceCell.colSpan = 3;
        noPriceCell.innerText = "Pricing information not available.";
        noPriceRow.appendChild(noPriceCell);
        pricingBody.appendChild(noPriceRow);
    }
}

function buscarPartes(termino) {
    var tarjetas = document.querySelectorAll('.card');

    tarjetas.forEach(function (tarjeta) {
        var idParte = tarjeta.id;
        var textoParte = tarjeta.querySelector('h3').innerText.toLowerCase();

        if (idParte.includes(termino.toLowerCase()) || textoParte.includes(termino.toLowerCase())) {
            tarjeta.style.display = 'block';
        } else {
            tarjeta.style.display = 'none';
        }
    });
}

function dejarComentario() {
    var nombre = document.getElementById("nombre").value;
    var comentario = document.getElementById("comentario").value;

    if (nombre && comentario) {
        // Create a new testimonial element
        var testimonioElement = document.createElement("div");
        testimonioElement.className = "testimonio";
        testimonioElement.innerHTML = "<strong>" + nombre + ":</strong> " + comentario;

        // Add the new testimonial to the testimonials container
        var testimoniosContainer = document.getElementById("testimoniosContainer");
        testimoniosContainer.appendChild(testimonioElement);

        // Clear the form
        document.getElementById("nombre").value = "";
        document.getElementById("comentario").value = "";
    } else {
        alert("Please fill out all fields before leaving a comment.");
    }
}

// Function to calculate the price based on the damage description
function calcularPrecio(precioBase, description) {
    // Add your logic to calculate the price based on the description
    // For simplicity, this function returns a fixed value for demonstration purposes.
    return precioBase + 50;
}


