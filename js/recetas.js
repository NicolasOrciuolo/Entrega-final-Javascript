import { bbdd, inicializarRecetas } from './bbdd.js'

// SELECCIÓN DE COMIDAS ######################################################################################


// PAGINA CON RECETAS PARA ELEGIR
export const arrayDeRecetas = [];
const menu = document.querySelector("#menu"); //Atrapo el div con id=menu en menu.html
export const arrayCarrito = JSON.parse(localStorage.getItem("carrito")) || [];


inicializarRecetas(arrayDeRecetas); //Push de las recetas de la bbdd al arrayDeRecetas

arrayDeRecetas.forEach((el) => { 
   const tarjeta = document.createElement("div");
   tarjeta.innerHTML = ` 
                        <div class="col">
                           <div class="card w-70 text-center">
                              <img src="${el.foto}" class="card-img-top" alt="...">
                              <div class="card-body">
                                 <h1 class="card-title fs-3">${el.nombre}</h1>
                                 <h2 class="card-text fs-5">Precio: $${el.precio}</h2>
                                 <p class="card-text">${el.descripcion}</p>
                              </div>

                           </div>
                        </div>
   `

   const buttonAgregar = document.createElement("button");
   buttonAgregar.classList.add("col-12", "btn", "btn-primary");
   buttonAgregar.innerText = "Seleccionar";

   buttonAgregar.addEventListener("click", () => {
      arrayCarrito.push(el);
      localStorage.setItem("carrito", JSON.stringify(arrayCarrito));

      Swal.fire({
         position: 'center',
         icon: 'success',
         title: el.nombre + ' añadida al carrito',
         timer: 1500
      })
   })

   tarjeta.appendChild(buttonAgregar);
   menu.appendChild(tarjeta);

})


// CARRITO DE COMPRAS
const botonCarrito = document.getElementById("irAlCarrito"); //Atrapo el botón de Ir al carrito
botonCarrito.addEventListener("click", () => {
   menu.innerHTML = ``;

   const pedido = document.querySelector("#pedido"); //Atrapo el div de id=pedido

   const tituloPagina = document.createElement("h1"); 
   tituloPagina.innerHTML =`Su pedido:`
   pedido.appendChild(tituloPagina);


   arrayCarrito.forEach((el) => {
      const orden = document.createElement("div");
      orden.innerHTML = ` 
                        <div class="col">
                           <div class="card w-70 text-center">
                              <div class="card-body">
                                    <h1 class="card-title fs-3">${el.nombre}</h1>
                                    <h2 class="card-text fs-5">Precio: $${el.precio}</h2>
                                    <p class="card-text">${el.descripcion}</p>
                                 </div>
   
                              </div>
                           </div>
      `
      pedido.appendChild(orden);
   })

   let sumaPedido = arrayCarrito.reduce((acumulador,el)=> acumulador + el.precio,0);

   const total = document.createElement("div");
   total.classList.add("text-center","d-flex","justify-content-center")
   total.innerHTML = `
                     <h2>
                        Total del pedido: $${sumaPedido}
                     </h2>
   `
   const confirmarCompra = document.createElement("button");
   confirmarCompra.classList.add("col-2", "btn", "btn-outline-success","text-center");
   confirmarCompra.innerText = "Confirmar Compra";
   
   pedido.appendChild(total);
   total.appendChild(confirmarCompra);

   confirmarCompra.addEventListener("click", () => {
      localStorage.setItem("carrito", JSON.stringify(""));
   
      Swal.fire({
         position: 'center',
         icon: 'success',
         title:'Su pedido se ha registrado con éxito. Muchas gracias',
         timer: 3000
      })

      setTimeout('document.location.reload()',3000);

   })

})






