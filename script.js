function mostrarParte(parte) {
    var imagenParte = document.getElementById('imagenParte');
    var descripcionParte = document.getElementById('descripcionParte');

    var parteSeleccionada = partes[parte];

    // Mostrar la imagen y descripción de la parte seleccionada
    imagenParte.innerHTML = `<img src="${parteSeleccionada.imagen}" alt="${parte}">`;
    descripcionParte.innerHTML = parteSeleccionada.descripcion;
}

function buscarPartes(termino) {
    var resultado = {};

    for (var parte in partes) {
        if (partes.hasOwnProperty(parte) && parte.toLowerCase().includes(termino.toLowerCase())) {
            resultado[parte] = partes[parte];
        }
    }

    // Mostrar solo las partes que coinciden con la búsqueda
    mostrarTarjetas(resultado);
}

function mostrarTarjetas(partesAMostrar) {
    var tarjetas = document.querySelectorAll('.card');

    tarjetas.forEach(function (tarjeta) {
        var idParte = tarjeta.id;

        if (partesAMostrar[idParte]) {
            tarjeta.style.display = 'block';
        } else {
            tarjeta.style.display = 'none';
        }
    });
}

var partes = {
    'puertas': { imagen: 'https://source.unsplash.com/800x600/?car-doors', descripcion: 'Descripción de las puertas...' },
    'capo': { imagen: 'https://source.unsplash.com/800x600/?car-hood', descripcion: 'Descripción del capó...' },
    'atras': { imagen: 'https://source.unsplash.com/800x600/?car-back', descripcion: 'Descripción de la parte de atrás...' },
    'techo': { imagen: 'https://source.unsplash.com/800x600/?car-roof', descripcion: 'Descripción del techo...' }
    // Agrega más partes según sea necesario
};
function mostrarParte(id) {
    // Your existing logic to show information
    var imageUrl = ""; // Replace with the URL of the image
    var description = ""; // Replace with the description

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
    card.addEventListener('click', function() {
        // Get data from the clicked card (you may need to adjust this part based on your card structure)
        var imageUrl = card.querySelector('img').src;
        var description = card.querySelector('p').innerText;

        // Open the modal with the retrieved data
        mostrarParte(imageUrl, description);
    });
});


