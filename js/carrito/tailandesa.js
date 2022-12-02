// PRODUCTOS
const productos = [
    {
        id: "abrigo-01",
        titulo: "Arroz con Curry Verde",
        imagen: "../../img/img-Carrito/Tailandesa/tailandesa01.jpg",
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
        id: "abrigo-02",
        titulo: "Calamares con Curry",
        imagen: "../../img/img-Carrito/Tailandesa/tailandesa02.jpg",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 16
    },
    {
        id: "abrigo-03",
        titulo: "Cerdo Satay",
        imagen: "../../img/img-Carrito/Tailandesa/tailandesa03.jpg",
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
        id: "abrigo-04",
        titulo: "Ensalada de Papaya",
        imagen: "../../img/img-Carrito/Tailandesa/tailandesa04.jpg",
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
        titulo: "Fideos con Curry",
        imagen: "../../img/img-Carrito/Tailandesa/tailandesa05.jpg",
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
        id: "camiseta-01",
        titulo: "KaiMu Satae",
        imagen: "../../img/img-Carrito/Tailandesa/tailandesa06.jpg",
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
        id: "camiseta-02",
        titulo: "Kai Pad Med",
        imagen: "../../img/img-Carrito/Tailandesa/tailandesa07.jpg",
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
        id: "camiseta-03",
        titulo: "Kai tod",
        imagen: "../../img/img-Carrito/Tailandesa/tailandesa08.jpg",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 10
    },
    {
        id: "camiseta-04",
        titulo: "Kao pad",
        imagen: "../../img/img-Carrito/Tailandesa/tailandesa09.jpg",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 9
    },
    {
        id: "camiseta-05",
        titulo: "Kuai tieow",
        imagen: "../../img/img-Carrito/Tailandesa/tailandesa10.jpg",
        tiempo: "35 - 50 min",
        envio: "envio gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 12
    },
    {
        id: "camiseta-06",
        titulo: "Pad Krapau",
        imagen: "../../img/img-Carrito/Tailandesa/tailandesa11.jpg",
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
        id: "camiseta-07",
        titulo: "Pad Thai",
        imagen: "../../img/img-Carrito/Tailandesa/tailandesa12.jpg",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 19
    },
    {
        id: "camiseta-08",
        titulo: "Pak Siuw",
        imagen: "../../img/img-Carrito/Tailandesa/tailandesa13.jpg",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 22
    },
    {
        id: "pantalon-01",
        titulo: "Pato Asado",
        imagen: "../../img/img-Carrito/Tailandesa/tailandesa14.jpg",
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
        id: "pantalon-02",
        titulo: "Pure de Arroz",
        imagen: "../../img/img-Carrito/Tailandesa/tailandesa15.jpg",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 12
    },
    {
        id: "pantalon-03",
        titulo: "Som Tam",
        imagen: "../../img/img-Carrito/Tailandesa/tailandesa16.jpg",
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
        id: "pantalon-04",
        titulo: "Sopa de Tallarines",
        imagen: "../../img/img-Carrito/Tailandesa/tailandesa17.jpg",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 8
    },
    {
        id: "pantalon-05",
        titulo: "Yam Ma Khwa Yao",
        imagen: "../../img/img-Carrito/Tailandesa/tailandesa18.jpg",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 10
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