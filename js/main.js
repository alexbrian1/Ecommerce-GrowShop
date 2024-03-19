// PRODUCTOS
const productos = [
    // autoflorecientes
    {
        id: "auto-01",
        titulo: "Grand Dady Purple Auto x3",
        imagen: "./img/autoflorecientes/01.png",
        categoria: {
            nombre: "Autofloreciente",
            id: "autofloreciente"
        },
        precio: 19000
    },
    {
        id: "auto-02",
        titulo: "Purple Thai Auto x3",
        imagen: "./img/autoflorecientes/02.png",
        categoria: {
            nombre: "Autofloreciente",
            id: "autofloreciente"
        },
        precio: 19000
    },
    {
        id: "auto-03",
        titulo: "Strawberry Banana Auto x3",
        imagen: "./img/autoflorecientes/03.png",
        categoria: {
            nombre: "Autofloreciente",
            id: "autofloreciente"
        },
        precio: 19000
    },
    {
        id: "auto-04",
        titulo: "Black Domina Auto x3",
        imagen: "./img/autoflorecientes/04.png",
        categoria: {
            nombre: "Autofloreciente",
            id: "autofloreciente"
        },
        precio: 19000
    },
    {
        id: "auto-05",
        titulo: "Cream Caramel Auto x3",
        imagen: "./img/autoflorecientes/05.png",
        categoria: {
            nombre: "Autofloreciente",
            id: "autofloreciente"
        },
        precio: 19000
    },
    {
        id: "auto-06",
        titulo: "Gorilla Girl XL Auto x3",
        imagen: "./img/autoflorecientes/06.png",
        categoria: {
            nombre: "Autofloreciente",
            id: "autofloreciente"
        },
        precio: 19000
    },
    {
        id: "auto-07",
        titulo: "Blueberry Auto x3",
        imagen: "./img/autoflorecientes/07.png",
        categoria: {
            nombre: "Autofloreciente",
            id: "autofloreciente"
        },
        precio: 19000
    },
    {
        id: "auto-08",
        titulo: "Critical Kush Auto x3",
        imagen: "./img/autoflorecientes/08.png",
        categoria: {
            nombre: "Autofloreciente",
            id: "autofloreciente"
        },
        precio: 19000
    },
    {
        id: "auto-09",
        titulo: "Purple Punch Auto x3",
        imagen: "./img/autoflorecientes/09.png",
        categoria: {
            nombre: "Autofloreciente",
            id: "autofloreciente"
        },
        precio: 19000
    },
    /// Fotoperiodicas
    {
        id: "periodica-01",
        titulo: "Mind Breaker Fem x3",
        imagen: "./img/fotoperiodicas/01.png",
        categoria: {
            nombre: "Fotoperiodicas",
            id: "fotoperiodicas"
        },
        precio: 19000
    },
    {
        id: "periodica-02",
        titulo: "Caramel Island Fem x3",
        imagen: "./img/fotoperiodicas/02.png",
        categoria: {
            nombre: "Fotoperiodicas",
            id: "fotoperiodicas"
        },
        precio: 19000
    },
    {
        id: "periodica-03",
        titulo: "Afghan Fem x3",
        imagen: "./img/fotoperiodicas/03.png",
        categoria: {
            nombre: "Fotoperiodicas",
            id: "fotoperiodicas"
        },
        precio: 19000
    },
    {
        id: "periodica-04",
        titulo: "Pomelo Explosión Fem x3",
        imagen: "./img/fotoperiodicas/04.png",
        categoria: {
            nombre: "Fotoperiodicas",
            id: "fotoperiodicas"
        },
        precio: 19000
    },
    {
        id: "periodica-05",
        titulo: "Indian Dog Fem x3",
        imagen: "./img/fotoperiodicas/05.png",
        categoria: {
            nombre: "Fotoperiodicas",
            id: "fotoperiodicas"
        },
        precio: 19000
    },
    {
        id: "periodica-06",
        titulo: "Tangerine Dream Fem x3",
        imagen: "./img/fotoperiodicas/06.png",
        categoria: {
            nombre: "Fotoperiodicas",
            id: "fotoperiodicas"
        },
        precio: 19000
    },
    {
        id: "periodica-07",
        titulo: "Romulan Fem x3",
        imagen: "./img/fotoperiodicas/07.png",
        categoria: {
            nombre: "Fotoperiodicas",
            id: "fotoperiodicas"
        },
        precio: 19000
    },
    ///Premium
    {
        id: "premium-01",
        titulo: "Gelato Auto x3",
        imagen: "./img/lineapremium/01.png",
        categoria: {
            nombre: "Premium",
            id: "premium"
        },
        precio: 26000
    },
    {
        id: "premium-02",
        titulo: "Tropicana Auto x3",
        imagen: "./img/lineapremium/02.png",
        categoria: {
            nombre: "Premium",
            id: "premium"
        },
        precio: 26000
    }
    
];
console.log(productos.length);
// Lo que extraigo del DOM
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector(".titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
let numerito = document.querySelector("#numerito");



function cargarProductos(productosElegidos){
    //renderizo 
    contenedorProductos.innerHTML = "";


    productosElegidos.forEach(producto =>{
        //creo el div contenedor de cada producto
        const div = document.createElement("div");
        //le agrego la clase para los estilos
        div.classList.add("producto");


        //dentro de este div es donde quiero meter toda la informacion de los objetos
        //uso innerHtml para pasar etiquetas con variables
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        //Agrego el Div creado al DOM con append
        contenedorProductos.append(div);


    });
    actualizarBotonesAgregar()
}

cargarProductos(productos);

//recorro los botones del aside
botonesCategorias.forEach(boton =>{
    //escucho el click
    boton.addEventListener("click",(e)=>{
        //recorro los botones para sacar clase active
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        //vuelvo a ejecutar el active
        e.currentTarget.classList.add("active");


        if(e.currentTarget.id != "todos"){
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);


        }else{
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);

        }
        
    })
});


function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton =>{
        boton.addEventListener("click", agregarAlCarrito)
    });
}

let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actulizarNumerito();

}else{
    productosEnCarrito = [];
}

function agregarAlCarrito(e){
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;

    }else{

        productoAgregado.cantidad = 1;
        //agrego al array el producto encontrado con el find
        productosEnCarrito.push(productoAgregado);
    }
    actulizarNumerito();
    console.log(productosEnCarrito);
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actulizarNumerito() {
    // sumo todas las cantidades de productos que hay y que arranque en 0
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto)=> acc + producto.cantidad,0);
    numerito.innerText = nuevoNumerito;
}
