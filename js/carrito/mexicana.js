// PRODUCTOS
const productos = [
    {
        id: "abrigo-01",
        titulo: "Agua Chile Verde",
        imagen: "../../img/img-Carrito/comidas_mexicanas/mexicana01.jpg",
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
        id: "abrigo-02",
        titulo: "Barbacoa",
        imagen: "../../img/img-Carrito/comidas_mexicanas/mexicana02.jpg",
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
        id: "abrigo-03",
        titulo: "Carnitas de Puerco",
        imagen: "../../img/img-Carrito/comidas_mexicanas/mexicana03.jpg",
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
        id: "abrigo-04",
        titulo: "Chiles en Nogada",
        imagen: "../../img/img-Carrito/comidas_mexicanas/mexicana04.jpg",
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
        id: "abrigo-05",
        titulo: "Chilaquiles Rojos",
        imagen: "../../img/img-Carrito/comidas_mexicanas/mexicana05.jpg",
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
        titulo: "Cochinita Pibil",
        imagen: "../../img/img-Carrito/comidas_mexicanas/mexicana06.jpg",
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
        id: "camiseta-02",
        titulo: "Enchiladas de Pollo",
        imagen: "../../img/img-Carrito/comidas_mexicanas/mexicana07.jpg",
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
        id: "camiseta-03",
        titulo: "Ensalada Cesar",
        imagen: "../../img/img-Carrito/comidas_mexicanas/mexicana08.jpg",
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
        id: "camiseta-04",
        titulo: "Fajitas",
        imagen: "../../img/img-Carrito/comidas_mexicanas/mexicana09.jpg",
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
        id: "camiseta-05",
        titulo: "Mole Poblano",
        imagen: "../../img/img-Carrito/comidas_mexicanas/mexicana10.jpg",
        tiempo: "35 - 50 min",
        envio: "envio gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 17
    },
    {
        id: "camiseta-06",
        titulo: "Pescado a la Talla",
        imagen: "../../img/img-Carrito/comidas_mexicanas/mexicana11.jpg",
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
        id: "camiseta-07",
        titulo: "Pescado Veracruzano",
        imagen: "../../img/img-Carrito/comidas_mexicanas/mexicana12.jpg",
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
        id: "camiseta-08",
        titulo: "Pozole",
        imagen: "../../img/img-Carrito/comidas_mexicanas/mexicana13.jpg",
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
        id: "pantalon-01",
        titulo: "Quesadilla",
        imagen: "../../img/img-Carrito/comidas_mexicanas/mexicana14.jpg",
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
        id: "pantalon-02",
        titulo: "Tacos",
        imagen: "../../img/img-Carrito/comidas_mexicanas/mexicana15.jpg",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 23
    },
    {
        id: "pantalon-03",
        titulo: "Tlayuda",
        imagen: "../../img/img-Carrito/comidas_mexicanas/mexicana16.jpg",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 20
    },
    {
        id: "pantalon-04",
        titulo: "Totopos",
        imagen: "../../img/img-Carrito/comidas_mexicanas/mexicana17.jpg",
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
        id: "pantalon-05",
        titulo: "Huarache",
        imagen: "../../img/img-Carrito/comidas_mexicanas/mexicana18.jpg",
        tiempo: "35 - 50 min",
        envio: "Envío gratis",
        estrella:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 13
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