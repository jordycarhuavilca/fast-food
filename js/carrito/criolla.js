// PRODUCTOS
const productos = [
    {
        id: "abrigo-01",
        titulo: "Seco de Cabrito",
        imagen: "../../img/img-Carrito/Criolla/Criolla01.jpg",
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
        id: "abrigo-02",
        titulo: "Papa Rellena",
        imagen: "../../img/img-Carrito/Criolla/Criolla02.jpg",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 10
    },
    {
        id: "abrigo-03",
        titulo: "Ceviche",
        imagen: "../../img/img-Carrito/Criolla/Criolla03.jpg",
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
        id: "abrigo-04",
        titulo: "Loma Saltado",
        imagen: "../../img/img-Carrito/Criolla/Criolla04.png",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 17
    },
    {
        id: "abrigo-05",
        titulo: "Aji de Gallina",
        imagen: "../../img/img-Carrito/Criolla/Criolla05.jpg",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 19
    },
    {
        id: "camiseta-01",
        titulo: "Picante de Carne",
        imagen: "../../img/img-Carrito/Criolla/Criolla06.jpg",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 20
    },
    {
        id: "camiseta-02",
        titulo: "Arroz con pato",
        imagen: "../../img/img-Carrito/Criolla/Criolla07.jpg",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 14
    },
    {
        id: "camiseta-03",
        titulo: "Causa Limeña",
        imagen: "../../img/img-Carrito/Criolla/Criolla08.jpg",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 12
    },
    {
        id: "camiseta-04",
        titulo: "Lomo Saltado",
        imagen: "../../img/img-Carrito/Criolla/Criolla09.jpg",
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
        id: "camiseta-05",
        titulo: "Sopa Seca",
        imagen: "../../img/img-Carrito/Criolla/Criolla10.jpg",
        tiempo: "35 - 50 min",
        envio: "envio gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 13
    },
    {
        id: "camiseta-06",
        titulo: "Mixto Criollo",
        imagen: "../../img/img-Carrito/Criolla/Criolla11.jpg",
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
        titulo: "Anticucho",
        imagen: "../../img/img-Carrito/Criolla/Criolla12.jpg",
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
        id: "camiseta-08",
        titulo: "Chicharron de pescado",
        imagen: "../../img/img-Carrito/Criolla/Criolla13.jpg",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 13
    },
    {
        id: "pantalon-01",
        titulo: "Sopa Criolla",
        imagen: "../../img/img-Carrito/Criolla/Criolla14.png",
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
        id: "pantalon-02",
        titulo: "Aji de Gallina",
        imagen: "../../img/img-Carrito/Criolla/Criolla15.jpg",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 17
    },
    {
        id: "pantalon-03",
        titulo: "Rocoto Relleno",
        imagen: "../../img/img-Carrito/Criolla/Criolla16.jpg",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 19
    },
    {
        id: "pantalon-04",
        titulo: "Picante de carne",
        imagen: "../../img/img-Carrito/Criolla/Criolla17.jpg",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 10
    },
    {
        id: "Cau Cau",
        titulo: "Pantalón 05",
        imagen: "../../img/img-Carrito/Criolla/Criolla18.jpg",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 14
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