/* Buenas Profesor Andres, le presento mi proyecto para la primer entrega. lo hice con todo lo de las clases que tuvimos, y ademas lo complemente con: 
https://www.w3schools.com/js/ 
https://developer.mozilla.org/es/docs/Web/JavaScript
 donde aprendi como usar push, length, toFixed, \n etc.
 espero que le guste. Gracias por tomarse el timpo*/

 // Muestro los productos disponibles y sus precios. los almaceno en el array "productos"
const productos = [
    { nombre: "Remera", precio: 200 },
    { nombre: "Pantalón", precio: 400 },
    { nombre: "Short", precio: 150 },
    { nombre: "Zapatillas", precio: 350 },
    { nombre: "Ojotas", precio: 150 },
    { nombre: "Campera", precio: 800 }
];

// Muestro los productos disponibles
function mostrarProductos() {
    let mensaje = "Productos disponibles:\n";
    for (let i = 0; i < productos.length; i++) {
        mensaje += `${i + 1}. ${productos[i].nombre} - $${productos[i].precio}\n`;
    }
    return mensaje;
}

// Function para agregar un producto al carrito
function agregarAlCarrito(carrito, idProducto) {
    const producto = productos[idProducto - 1]; // Buscamos el producto en el array
    carrito.push(producto); // Lo agregamos al carrito
}

// Funtion para calcular el total del carrito
function calcularTotal(carrito) {
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio;
    }
    return total;
}

// Function para aplicar un descuento si el total del carrito es mayor o igual a $1000
function aplicarDescuento(total) {
    if (total >= 1000) {
        return total * 0.9; // Descuento del 10%
    } else {
        return total; // Sin descuento
    }
}

// Funtion principal del simulador de compras, al final del programa llamo a "simularCompra"
function simularCompra() {
    let carrito = [];
    let continuar = true;
    
    while (continuar) {
        // Muestro los productos disponibles
        const productosDisponibles = mostrarProductos();
        const eleccion = prompt(`${productosDisponibles}\nElige el numero del producto que deseas agregar al carrito (1-6) o escribe 0 para terminar:`);

        // Validacion
        if (eleccion === "0") {
            continuar = false;
        } else {
            const idProducto = parseInt(eleccion);
            if (idProducto >= 1 && idProducto <= productos.length) {
                agregarAlCarrito(carrito, idProducto);
                alert(`${productos[idProducto - 1].nombre} ha sido agregado a tu carrito.`);
            } else {
                alert("Opcion no valida. Por favor elige un número entre 1 y 6.");
            }
        }
    }

    // Calculo el total de la compra
    const total = calcularTotal(carrito);
    // Aplicar solo si el descuento le corresponde
    const totalConDescuento = aplicarDescuento(total);

    // Muestro el resumen de la compra
    alert(`Resumen de tu compra:\nTotal sin descuento: $${total}\nTotal con descuento: $${totalConDescuento.toFixed(2)}`);
}

// Ejecutamos la función principal del programa
simularCompra();
