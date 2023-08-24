
// Variables globales
let compra = document.getElementsByClassName('btn-dark');
let listaIds = [];
let carrito = [];
let contador = 0;
// Cantidad de compras por productos
let repet = [];
let cantidad = 0;
let preciototal = 0;

console.log(compra);

for(let i = 0; i < compra.length; i++){
    compra[i].addEventListener('click', ()=>{

        /* HUBO CLICK EN ALGUN BOTON DE COMPRA */

        // Obtengo todos los productos
        let productos = document.querySelectorAll('.producto');

        // Creo listado de compra 
        carrito.push(productos[i].id);
        console.log(carrito);
        // Cantidad de compras
        repet = carrito.filter(item => item === productos[i].id);
        cantidad = repet.length;
        console.log(cantidad);

        if (listaIds.includes(productos[i].id) == false){
            console.log('No esta en la lista');
            listaIds.push(productos[i].id); // lo agrego a la lista 
            // Item de la compra
            contador = contador + 1;
            // Obtnego el nombre del producto
            let prod_name = productos[i].querySelector('h4').outerText;
    
            // Obtnego el precio
            let precio = productos[i].querySelector('b').outerText;
            // obtengo la tabla
            let tabla = document.querySelector('table');
            // Agregamos una fila
            let fila = tabla.insertRow(-1);
            // Columnas
            let col1 = fila.insertCell(0);
            let col2 = fila.insertCell(1);
            let col3 = fila.insertCell(2);
            let col4 = fila.insertCell(3);
            let col5 = fila.insertCell(4);
    
            // Agrego contenido a las columnas
            col1.innerHTML = contador;
            col2.innerHTML = prod_name;
            col3.innerHTML = cantidad;
            col4.innerHTML = '<button class="menos">-1</button><button class="not" onclick="restar()"><i class="bi bi-x"></i></button> <button class="yes"><i class="bi bi-check"></i></button>';
            preciototal = parseInt(precio.split('$')[1]) * cantidad;
            col5.innerHTML = preciototal;
        }else{
            console.log("Se encuentra en la tabla")
    
            // Obtnego el precio
            let precio = productos[i].querySelector('b').outerText;
            // obtengo la tabla
            let tabla = document.querySelector('table');
            let celdas = tabla.rows[tabla.rows.length - 1].cells;
            celdas[2].innerHTML = cantidad;
            celdas[4].innerHTML =  parseInt(precio.split('$')[1]) * cantidad;

        }
        
        

    }, false);
};

document.addEventListener('DOMContentLoaded',()=>{
    let quitar = document.querySelectorAll('.not');
    
    
    for (let i = 0; i < quitar.length; i++) {
        const element = quitar[i];
        element.addEventListener('click', ()=>{
            console.log('Quitar');
        },false)
        
    };

})

function restar() {
    console.log('YAAA')
    //Resto
    cantidad--;
    preciototal = preciototal - (preciototal*cantidad);
    // obtengo la tabla
    let tabla = document.querySelector('table');
    let celdas = tabla.rows[tabla.rows.length - 1].cells;
    celdas[2].innerHTML = cantidad;
    celdas[4].innerHTML = preciototal;
}


// // Boton de quitar
// quitar.addEventListener('click', ()=>{
//     alert('Quiere quitar');
//     cantidad--;
//     preciototal = preciototal - (preciototal*cantidad);
//     // obtengo la tabla
//     let tabla = document.querySelector('table');
//     let celdas = tabla.rows[tabla.rows.length - 1].cells;
//     celdas[2].innerHTML = cantidad;
//     celdas[4].innerHTML = preciototal;
// }, false)