//Productos

//Abrigos

const productos = [
    {
        id: "abrigo-01",
        titulo: "Abrigo 01",
        imagen: "./img/abrigos/01.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 10000

    },

    {
        id: "abrigo-02",
        titulo: "Abrigo 02",
        imagen: "./img/abrigos/02.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 10000

    },

    {
        id: "abrigo-03",
        titulo: "Abrigo 03",
        imagen: "./img/abrigos/03.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 10000

    },

    {
        id: "abrigo-04",
        titulo: "Abrigo 04",
        imagen: "./img/abrigos/04.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 10000

    },

    {
        id: "abrigo-05",
        titulo: "Abrigo 05",
        imagen: "./img/abrigos/05.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 10000

    },

//Pantalones

{
    id: "pantalon-01",
    titulo: "Pantalon 01",
    imagen: "./img/pantalones/01.jpg",
    categoria: {
        nombre: "Pantalones",
        id: "pantalones"
    },
    precio: 10000

},

{
    id: "pantalon-02",
    titulo: "Pantalon 02",
    imagen: "./img/pantalones/02.jpg",
    categoria: {
        nombre: "Pantalones",
        id: "pantalones"
    },
    precio: 10000

},

{
    id: "pantalon-03",
    titulo: "Pantalon 03",
    imagen: "./img/pantalones/03.jpg",
    categoria: {
        nombre: "Pantalones",
        id: "pantalones"
    },
    precio: 10000

},

{
    id: "pantalon-04",
    titulo: "Pantalon 04",
    imagen: "./img/pantalones/04.jpg",
    categoria: {
        nombre: "Pantalones",
        id: "pantalones"
    },
    precio: 10000

},

{
    id: "pantalon-05",
    titulo: "Pantalon 05",
    imagen: "./img/pantalones/05.jpg",
    categoria: {
        nombre: "Pantalones",
        id: "pantalones"
    },
    precio: 10000

},

//Remeras

{
    id: "remeras-01",
    titulo: "Remera 01",
    imagen: "./img/remeras/01.jpg",
    categoria: {
        nombre: "Remeras",
        id: "remeras"
    },
    precio: 10000

},
{
    id: "remeras-02",
    titulo: "Remera 02",
    imagen: "./img/remeras/02.jpg",
    categoria: {
        nombre: "Remeras",
        id: "remeras"
    },
    precio: 10000

},
{
    id: "remeras-03",
    titulo: "Remera 03",
    imagen: "./img/remeras/03.jpg",
    categoria: {
        nombre: "Remeras",
        id: "remeras"
    },
    precio: 10000

},
{
    id: "remeras-04",
    titulo: "Remera 04",
    imagen: "./img/remeras/04.jpg",
    categoria: {
        nombre: "Remeras",
        id: "remeras"
    },
    precio: 10000

},
{
    id: "remeras-05",
    titulo: "Remera 05",
    imagen: "./img/remeras/05.jpg",
    categoria: {
        nombre: "Remeras",
        id: "remeras"
    },
    precio: 10000

},
{
    id: "remeras-06",
    titulo: "Remera 06",
    imagen: "./img/remeras/06.jpg",
    categoria: {
        nombre: "Remeras",
        id: "remeras"
    },
    precio: 10000

},
{
    id: "remeras-07",
    titulo: "Remera 07",
    imagen: "./img/remeras/07.jpg",
    categoria: {
        nombre: "Remeras",
        id: "remeras"
    },
    precio: 10000

},
{
    id: "remeras-08",
    titulo: "Remera 08",
    imagen: "./img/remeras/08.jpg",
    categoria: {
        nombre: "Remeras",
        id: "remeras"
    },
    precio: 10000

}
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numero =  document.querySelector(".numero");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div")
        div.classList.add("producto");
        div.innerHTML=`
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>

        `;
        contenedorProductos.append(div);

    })

    actualizarBotonesAgregar();

}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click",(e) =>{

        botonesCategorias.forEach(boton => boton.classList.remove("active"));

        e.currentTarget.classList.add("active");

       
        if (e.currentTarget.id != "todos") {
            const productoCategorias = productos.find (producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategorias.categoria.nombre;
           
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);

        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }


    } )
});

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
    actualizarNumero();
} else {
    productosEnCarrito=[];
    
}



function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find (producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
        
    }

    actualizarNumero();

    localStorage.setItem("productos-en-carrito" , JSON.stringify(productosEnCarrito));
    
}

function actualizarNumero() {
    let nuevoNumero= productosEnCarrito.reduce((acc,producto) => acc + producto.cantidad, 0);
    numero.innerText= nuevoNumero;
    
}
