// Ciclo con For y condicionales 

//const num10 = 10

//for (let i = 0; i <= num10; i++){

    //Condicionales

    //if (i === num10){
        // alert ("Llegamos al numero 10")
    //}else{
        // alert (`Estamos en la iteracion ${i}`)
   //}
//}
 

// Variables.

//const num1 = 10
//const num2 = 5



// Funcion Comun



//function sumar (num1 , num2) {

    //return num1 + num2;

 //}

//console.log(sumar(5,20))




// Funcion flecha / Arrow Function


//const sumarNumero = (num3 = 0, num4 = 0) => {

    //return num3 - num4;

//}
//console.log(sumarNumero())






// Objeto js


//const matias = {

   // apellido: 'ferreira',
 //   localidad: 'ezeiza', 
 //   edad : 25,
  //  estudiando : true,

//}
//const facundo = {

   // apellido: 'fernandez',
    //localidad: 'ushuaia',
    //edad : 35,
    //estudiando : true,

//}
//const objeto3 = {
  //  nombre: 'fernando',
    //apellido: 'lezcano',
    //localidad: 'mar del plata', 
    //edad : 15,
    //estudiando : false,

//}
//console.log(matias)
//console.log(matias.apellido)






// Arrays


//const array1 = ['manzana', 'pera', 'banana', 1, true, ['mercedez', 'ford']];

//console.log(array1[5][0])






// array para guardar objetos.


//const array2 = [];

// Metodo Push para agregar objetos dentro de un array.

//array2.push(objeto3)
//console.log(array2)






//const colores = ['azul','rosa','verde','violeta']

//const resultado = colores.filter( longitud => longitud.length > 3)

//console.log(resultado)




// Variables

const productos = [];
let arrayCarrito = [];
const carrito = document.getElementById (`carrito`)
const precioTotal = document.getElementById (`precioTotal`);


document.addEventListener("DOMContentLoaded",()=> {
    boxCreate()
}
    )  



//Constructor de Objetos y/o productos
class producto {
    constructor(id,viaje,marca,disponible,precio){
        this.id = id;
        this.viaje = viaje;
        this.marca = marca;
        this.disponible = disponible;
        this.precio = precio;
    }
};


 

productos.push(new producto(1,"viaje1","Toyota",true,2460,1));
productos.push(new producto(1,"viaje2","Nissan",true,1690,1));
productos.push(new producto(1,"viaje3","Chevrolet",true,3100,1));


function boxCreate() {
    const contenedorProductos = document.getElementById(`container-productos`)

    productos.forEach((producto) => {
        const div = document.createElement(`div`);
        div.classList.add(`box`)
        div.innerHTML = `

        <span>$(producto.marca)</span>
        <h5 class="titulo">$(producto.viaje)</h5>
        <imgsrc="${producto.img}" alt="">
        <h4>$${producto.precio}</h4>
        <p>disponible:${producto.disponible}</p>
        <a class="agregar_carrito" id="button${producto.id}"><i class =bi bi-cart cart"></i></a>
        `
        contenedorProductos.appendChild(div)  

    }
    )

}







