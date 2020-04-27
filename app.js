//selectors
const txtArticulo = document.querySelector('.articulo-input');
const btnAddArticulo = document.querySelector('.btn-addArticulo');
const lstArticulos = document.querySelector('.lista-compra');

// event listeners
btnAddArticulo.addEventListener('click', addArticulo);


// funciones
function addArticulo(event) {
    // prevenir el submit del formulario
    event.preventDefault();
    
    // Articulo <div>
    const articuloDiv = document.createElement('div');
    articuloDiv.classList.add("articulo");

    // Creando el <li>
    const nuevoArticulo = document.createElement('li');
    nuevoArticulo.innerText = '- Nuevo Articulo -';
    nuevoArticulo.classList.add('articulo-item');

    articuloDiv.appendChild(nuevoArticulo);

    // Check para marcar que he tomado el articulo
    const btnTomado = document.createElement('button');
    btnTomado.innerHTML = '<i class="fas fa-check"></i>';
    btnTomado.classList.add('tomado-btn');
    articuloDiv.appendChild(btnTomado);

    // Boton para sacar el articulo de la lista
    const btnSacar = document.createElement('button');
    btnSacar.innerHTML = '<i class="fas fa-trash"></i>';
    btnSacar.classList.add('sacar-btn');
    articuloDiv.appendChild(btnSacar);

    //Agregando a la lista
    lstArticulos.appendChild(articuloDiv);

}