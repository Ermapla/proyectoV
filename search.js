



function buscarProductos() {
    var terminoBusqueda = document.getElementById('searchBox').value;
    fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${terminoBusqueda}`)
        .then(response => response.json())
        .then(data => mostrarResultados(data))
        .catch(error => console.error('Error:', error));
}

function mostrarResultados(productos) {
    var contenedorResultados = document.getElementById('resultadosBusqueda');
    contenedorResultados.innerHTML = ''; // Limpiar resultados anteriores

    productos.forEach(producto => {
        var div = document.createElement('div');
        div.className = 'col-md-4 mb-3';
        div.innerHTML = `
            <div class="card">
                <img src="${producto.image_link}" class="card-img-top" alt="${producto.name}">
                <div class="card-body">
                    <h5 class="card-title">${producto.name}</h5>
                    <p class="card-text">${producto.price} ${producto.price_sign}</p>
                </div>
            </div>
        `;
        contenedorResultados.appendChild(div);
    });
}

// Agregar evento de clic al botón de búsqueda
document.getElementById('botonBuscar').addEventListener('click', buscarProductos);

// Agregar evento de tecla Enter al campo de búsqueda
document.getElementById('searchBox').addEventListener('keypress', function(evento) {
    if (evento.key === 'Enter') {
        buscarProductos();
    }
});

function buscarProductos() {
    var terminoBusqueda = document.getElementById('searchBox').value;
    fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?name=${terminoBusqueda}`)
        .then(response => response.json())
        .then(data => mostrarResultados(data))
        .catch(error => console.error('Error:', error));
}

