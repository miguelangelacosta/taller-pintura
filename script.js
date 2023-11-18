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

document.querySelectorAll('.card').forEach(function (card) {
    card.addEventListener('click', function (event) {
        if (event.target.tagName.toLowerCase() === 'img') {
            var imageUrl = card.querySelector('img').src;
            var description = card.querySelector('p').innerText;
            mostrarParte(imageUrl, description);
        }
    });
});

function solicitarCotizacion() {
    window.location.href = "https://api.whatsapp.com/send?phone=123456789&text=Hola";
}

var preciosEjemplo = {
    'puertas': 100,
    'capo': 150,
    'atras': 120,
    'techo': 200
};

function mostrarPrecios(partName, description) {
    var pricingBody = document.getElementById("pricingBody");
    pricingBody.innerHTML = '';

    if (preciosEjemplo.hasOwnProperty(partName.toLowerCase())) {
        var row = document.createElement("tr");
        var partCell = document.createElement("td");
        partCell.innerText = partName;
        var descriptionCell = document.createElement("td");
        descriptionCell.innerText = description;
        var priceCell = document.createElement("td");
        var precioBase = preciosEjemplo[partName.toLowerCase()];
        var precioCalculado = calcularPrecio(precioBase, description);
        priceCell.innerText = '$' + precioCalculado.toFixed(2);
        row.appendChild(partCell);
        row.appendChild(descriptionCell);
        row.appendChild(priceCell);
        pricingBody.appendChild(row);
    } else {
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
    var resultadosBusqueda = document.getElementById('resultadosBusqueda');
    resultadosBusqueda.innerHTML = '';

    var resultadosEncontrados = false;

    tarjetas.forEach(function (tarjeta) {
        var idParte = tarjeta.id;
        var textoParte = tarjeta.querySelector('h3').innerText.toLowerCase();

        if (idParte.includes(termino.toLowerCase()) || textoParte.includes(termino.toLowerCase())) {
            resultadosEncontrados = true;

            var imageUrl = tarjeta.querySelector('img').src;
            var description = tarjeta.querySelector('p').innerText;

            var resultado = document.createElement('div');
            resultado.innerHTML = `<img src="${imageUrl}" alt="${idParte}"><p>${description}</p>`;
            resultadosBusqueda.appendChild(resultado);

            tarjeta.style.display = 'block';
        } else {
            tarjeta.style.display = 'none';
        }
    });

    // Ocultar la sección de resultados si no se encontraron resultados
    if (!resultadosEncontrados) {
        resultadosBusqueda.innerHTML = 'No se encontraron resultados.';
    }
}

function dejarComentario() {
    var nombre = document.getElementById('nombre').value;
    var comentario = document.getElementById('comentario').value;
    var danio = document.getElementById('danio').value;
    var precio = calcularPrecio(danio);
    var resultadosTable = document.querySelector('#resultados table');
    var newRow = resultadosTable.insertRow(-1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    cell1.textContent = danio;
    cell2.textContent = '$' + precio.toFixed(2);

    document.getElementById('nombre').value = '';
    document.getElementById('comentario').value = '';
    document.getElementById('danio').value = '';
}

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

