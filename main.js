const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();


document.addEventListener('DOMContentLoaded', ()=>{
  fetchData()  
})

// Evento click para el div items
items.addEventListener('click', (e) => {
    addCarrito(e);
})

// Cargando los datos del .json
const fetchData = async () => {
    try{
        const res = await fetch('datos.json');
        const data = await res.json();
        pintarCards(data);
    } catch (error){
        console.log(error)
    }
}

// pinto de manera dinamica cada objeto en el documento html
const pintarCards = (data) => {
    data.forEach((producto)=>{
        templateCard.querySelector('h5').textContent = producto.title;
        templateCard.querySelector('p span').textContent = producto.precio;
        templateCard.querySelector('img').setAttribute('src', producto.thumbnailUrl);
        templateCard.querySelector('button').setAttribute('id', `btn-${producto.id}`);

        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    })
    items.appendChild(fragment);
}
// agrego al carrito
const addCarrito = (e) =>{
    if (e.target.classList.contains('btn-dark')) {
        console.log('Compra mijito');
    }
}
