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
        priceCell.innerText = '$' + precioCalculado.toFixed(2); // Formatear el precio como moneda

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
    // Obtener los valores del formulario
    var nombre = document.getElementById('nombre').value;
    var comentario = document.getElementById('comentario').value;
    var danio = document.getElementById('danio').value;

    // Calcular el precio según la descripción del daño (puedes personalizar esta lógica según tus necesidades)
    var precio = calcularPrecio(danio);

    // Crear una nueva fila en la tabla de resultados
    var resultadosTable = document.querySelector('#resultados table');
    var newRow = resultadosTable.insertRow(-1);

    // Insertar celdas con los valores del formulario y el precio calculado
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    cell1.textContent = danio;
    cell2.textContent = '$' + precio.toFixed(2); // Formatear el precio como moneda

    // Limpiar los campos del formulario después de agregar el comentario
    document.getElementById('nombre').value = '';
    document.getElementById('comentario').value = '';
    document.getElementById('danio').value = '';
}

function calcularPrecio(descripcionDanio) {
    // Lógica para calcular el precio según la descripción del daño
    // Puedes personalizar esta lógica según tus necesidades
    // En este ejemplo, simplemente devolvemos un precio aleatorio entre 100 y 500
    return Math.floor(Math.random() * (500 - 100 + 1)) + 100;
}