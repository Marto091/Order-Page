var producto = {
    producto:"Paisaje Raro",
    img:"/img/paisaje.jpg",
    descripcion:"Este es un paisaje raro",
    creador:"MARTIN ALVAREZ - 2023",
    stock:0
}
function creadores(){
    alert(`${producto.creador}`)
}

const title = document.getElementById("title")
title.innerText = `${producto.producto}`
const stockings = document.getElementById("l-header")
stockings.innerHTML = `<h1>[ ${producto.stock} ]</h1>`
function SumarCarrito(){
    var ok = producto.stock + 1
    producto.stock = ok
    stockings.innerHTML = `<h1>[ ${producto.stock} ]</h1>`
}

function RestarCarrito(){
    var ls = producto.stock - 1
    producto.stock = ls
    if( producto.stock < 0){
        alert("Valor Invalido")
        location.reload()
    }else{
        stockings.innerHTML = `<h1>[ ${producto.stock} ]</h1>`
    }
}

const div = document.getElementById("contenedor-producto")

var unos = 0;
function AgregarCarrito(){
    unos = unos + 1
    console.log(unos)
    if(unos> 1){
        const footer = document.getElementById("footer")
        const doa = document.createElement("div");
        const att = doa.setAttribute("id", "contenedor-producto");
        const h1 = doa.innerHTML = `<h1>${producto.producto}</h1>`;
        footer.appendChild(doa)
    }else{
        div.innerHTML = `<h1>${producto.producto}</h1>`
    }
}