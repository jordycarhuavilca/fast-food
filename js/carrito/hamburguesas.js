// PRODUCTOS
const productos = [
    {
        id: "abrigo-01",
        titulo: "Hambruguesa Clasica",
        imagen: "../../img/img-Carrito/Hamburguesas/Hamburguesa_01.jpg",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 15
    },
    {
        id: "abrigo-02",
        titulo: "Doble Hamburguesa",
        imagen: "../../img/img-Carrito/Hamburguesas/Hamburguesa_02.jfif",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 22
    },
    {
        id: "abrigo-03",
        titulo: "Estilo NY",
        imagen: "../../img/img-Carrito/Hamburguesas/Hamburguesa_03.jpg",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 18
    },
    {
        id: "abrigo-04",
        titulo: "Hamburguesa Simple",
        imagen: "../../img/img-Carrito/Hamburguesas/Hamburguesa_04.jpg",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 14
    },
    {
        id: "abrigo-05",
        titulo: "Muffins simple",
        imagen: "../../img/img-Carrito/Hamburguesas/Hamburguesa_05.jpg",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 13
    },
    {
        id: "camiseta-01",
        titulo: " Muffins Hamburguesa",
        imagen: "../../img/img-Carrito/Hamburguesas/Hamburguesa_06.jpg",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 18
    },
    {
        id: "camiseta-02",
        titulo: "Hamburguesa de lomo",
        imagen: "../../img/img-Carrito/Hamburguesas/Hamburguesa_07.jpg",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 18
    },
    {
        id: "camiseta-03",
        titulo: "Rellena de papas",
        imagen: "../../img/img-Carrito/Hamburguesas/Hamburguesa_08.jpg",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 15
    },
    {
        id: "camiseta-04",
        titulo: "Combo Doble ",
        imagen: "../../img/img-Carrito/Hamburguesas/Hamburguesa_09.jpg",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 17
    },
    {
        id: "camiseta-05",
        titulo: "Hamburguesa chili",
        imagen: "../../img/img-Carrito/Hamburguesas/Hamburguesa_10.jpg",
        tiempo: "35 - 50 min",
        envio: "envio gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 14
    },
    {
        id: "camiseta-06",
        titulo: "Tocino Huevo",
        imagen: "../../img/img-Carrito/Hamburguesas/Hamburguesa_11.jpg",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 18
    },
    {
        id: "camiseta-07",
        titulo: "Langostino",
        imagen: "../../img/img-Carrito/Hamburguesas/Hamburguesa_12.jpg",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 16
    },
    {
        id: "camiseta-08",
        titulo: "Chipotle ketchup",
        imagen: "../../img/img-Carrito/Hamburguesas/Hamburguesa_13.jpg",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 11
    },
    {
        id: "pantalon-01",
        titulo: "Queso y Guacamole",
        imagen: "../../img/img-Carrito/Hamburguesas/Hamburguesa_14.jpg",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 18
    },
    {
        id: "pantalon-02",
        titulo: "Ternera con queso",
        imagen: "../../img/img-Carrito/Hamburguesas/Hamburguesa_15.png",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 15
    },
    {
        id: "pantalon-03",
        titulo: "Corral Gourmet",
        imagen: "../../img/img-Carrito/Hamburguesas/Hamburguesa_16.jpg",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 16
    },
    {
        id: "pantalon-04",
        titulo: "El Guacamole Tocino",
        imagen: "../../img/img-Carrito/Hamburguesas/Hamburguesa_17.jpg",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 14
    },
    {
        id: "pantalon-05",
        titulo: "Bacon Burguer",
        imagen: "../../img/img-Carrito/Hamburguesas/Hamburguesa_18.jpg",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 18
    }
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `

            <img class="producto-imagen producto__oferta" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo} <h3 class="puntuacion"><img class="estrella" src="${producto.estrella}"> 4.3</h3></h3>
            </div>
            <div class="producto-detalle-1">
                <span class="producto-tiempo">
                <i class="product__icon fa-solid fa-clock"></i>${producto.tiempo} </span> 
                <span class="producto-envio">
                <i class="producto__moto fa-solid fa-bicycle"></i> ${producto.envio}</span>
            </div>
            <div class="producto-detalles">
                <p class="producto-precio">S/. ${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>

        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);


function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}