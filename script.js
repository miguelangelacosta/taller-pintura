// Funciones compartidas
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

function solicitarCotizacion(partName) {
    window.location.href = "https://api.whatsapp.com/send?phone=123456789&text=Hola,%20estoy%20interesado%20en%20la%20parte:%20" + partName;
}

// Función para mostrar solo descripción corta en las tarjetas
function mostrarDescripcionCorta() {
    document.querySelectorAll('.card').forEach(function (card) {
        var description = card.querySelector('p').innerText;
        var shortenedDescription = description.length > 50 ? description.substring(0, 50) + '...' : description;
        card.querySelector('p').innerText = shortenedDescription;
    });
}

// Llamada a la función al cargar la página
mostrarDescripcionCorta();

// Event listeners
document.querySelectorAll('.card').forEach(function (card) {
    card.addEventListener('click', function (event) {
        var description = card.querySelector('p').innerText;
        mostrarParte(card.querySelector('img').src, description);
    });
});

document.querySelector('.menu-icon').addEventListener('click', function () {
    document.querySelector('.menu-items').classList.toggle('show');
});

// Función adicional para limpiar resultados al borrar la búsqueda
document.getElementById('busqueda').addEventListener('input', function () {
    var termino = this.value;
    if (termino === '') {
        resultadosBusqueda.innerHTML = '';
    } else {
        buscarPartes(termino);
    }
});
function buscarPartes(termino) {
    // Itera sobre cada tarjeta
    document.querySelectorAll('.card').forEach(function (card) {
        var description = card.querySelector('p').innerText.toLowerCase();

        // Verifica si la descripción de la tarjeta incluye el término de búsqueda
        if (description.includes(termino.toLowerCase())) {
            card.style.display = 'block'; // Muestra la tarjeta si hay coincidencia
        } else {
            card.style.display = 'none'; // Oculta la tarjeta si no hay coincidencia
        }
    });
}
// Cierra la ventana modal al tocar la pantalla
document.getElementById("modal").addEventListener('click', function (event) {
    if (event.target === this) {
        closeModal();
    }
});
// Event listeners
document.querySelectorAll('.card').forEach(function (card) {
    card.addEventListener('click', function (event) {
        var description = card.querySelector('p').innerText;
        mostrarParte(card.querySelector('img').src, description);
    });
});
// Funciones compartidas
function mostrarParte(imageUrl, description) {
    // Set the modal content
    document.getElementById("modalImage").src = imageUrl;
    document.getElementById("modalDescription").innerText = description;

    // Show the modal
    document.getElementById("modal").style.display = "flex";

    // Populate the pricing table
    mostrarPrecios(description);
}

// Event listeners
document.querySelectorAll('.card').forEach(function (card) {
    card.addEventListener('click', function (event) {
        var description = card.querySelector('p').innerText;
        
        // Utiliza el nombre de la tarjeta como parte del nombre de la imagen
        var imageName = card.id + ".png";
        var imageUrl = "images/" + imageName;

        mostrarParte(imageUrl, description);
    });
});

// Otras funciones y eventos no modificados
// Event listener para la barra de búsqueda
document.getElementById('busqueda').addEventListener('input', function () {
    var termino = this.value;
    if (termino === '') {
        resultadosBusqueda.innerHTML = '';
    } else {
        buscarPartes(termino);
    }
});

function buscarPartes(termino) {
    // Itera sobre cada tarjeta
    document.querySelectorAll('.card').forEach(function (card) {
        var description = card.querySelector('p').innerText.toLowerCase();

        // Verifica si la descripción de la tarjeta incluye el término de búsqueda
        if (description.includes(termino.toLowerCase())) {
            card.style.display = 'block'; // Muestra la tarjeta si hay coincidencia
        } else {
            card.style.display = 'none'; // Oculta la tarjeta si no hay coincidencia
        }
    });
}
// Event listener para el formulario de comentarios
document.getElementById('comentarioForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que se recargue la página al enviar el formulario

    // Obtiene el comentario del formulario
    var comentario = document.getElementById('comentarioInput').value;

    // Llama a la función para guardar y mostrar el comentario
    guardarYMostrarComentario(comentario);

    // Limpia el campo de comentario después de enviar
    document.getElementById('comentarioInput').value = '';
});

function guardarYMostrarComentario(comentario) {
    // Crea un nuevo elemento de comentario
    var nuevoComentario = document.createElement('div');
    nuevoComentario.className = 'comentario';
    nuevoComentario.innerText = comentario;

    // Agrega el nuevo comentario al contenedor de comentarios
    document.getElementById('comentariosContainer').appendChild(nuevoComentario);
}
// Event listener para las tarjetas


// Nueva función para mostrar la parte completa al hacer clic en una tarjeta
function mostrarParteCompleta(imageUrl, description) {
    // Setea el contenido completo en el modal
    document.getElementById("modalImage").src = imageUrl;
    document.getElementById("modalDescription").innerText = description;

    // Muestra el modal
    document.getElementById("modal").style.display = "flex";

    // Popula la tabla de precios
    mostrarPrecios(description);
}

document.querySelectorAll('.card').forEach(function (card) {
    card.addEventListener('click', function (event) {
        var description = card.querySelector('p').innerText;

        // Utiliza el nombre de la tarjeta como parte del nombre de la imagen
        var imageName = card.id + ".png";
        var imageUrl = "images/" + imageName;

        mostrarParte(imageUrl, description);
    });
});
