import { bbdd, inicializarRecetas, Recetas } from './bbdd.js'

// SELECCIÓN DE COMIDAS ######################################################################################


// PAGINA CON RECETAS PARA ELEGIR
export const arrayDeRecetas = [];
export const datosFetched = [];
const menu = document.querySelector("#menu"); //Atrapo el div con id=menu en menu.html
export const arrayCarrito = JSON.parse(localStorage.getItem("carrito")) || [];


//BUSCO IMAGENES EN UNA API
function getImage(done) {
   const results = fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken');

   results
      .then((response) => response.json())
      .then(data => {
         done(data);
      });
}

getImage(data => {
   for (let i = 0; i < data.meals.length; i++) {
      datosFetched[i] = data.meals[i];
   }

   inicializarRecetas(arrayDeRecetas, datosFetched); //Push de las recetas de la bbdd al arrayDeRecetas

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

         const cantidadCarrito = document.querySelector("#cantidadPedido");
         cantidadCarrito.innerText = `Cantidad de platos: ${arrayCarrito.length}`;

      })

      tarjeta.appendChild(buttonAgregar);
      menu.appendChild(tarjeta);

   })


   // CARRITO DE COMPRAS
   const botonCarrito = document.getElementById("irAlCarrito"); //Atrapo el botón de Ir al carrito
   botonCarrito.addEventListener("click", () => {
      menu.innerHTML = ``;

      let encabezadoTabla = `
                        <tr>
                           <th>Receta</th>
                           <th>Descripción</th>
                           <th>Precio</th>
                        </tr>
                        `;
      document.getElementById("tablaPrincipal").innerHTML = encabezadoTabla;

      const pedido = document.querySelector("#pedido"); //Atrapo el div de id=pedido

      const tituloPagina = document.createElement("h1");
      tituloPagina.innerHTML = `Su pedido:`
      pedido.appendChild(tituloPagina);

      let tableBody = ``;
      arrayCarrito.forEach((el) => {
         tableBody += `<tr>
         <td>${el.nombre}</td>
         <td>${el.descripcion}</td>
         <td>$ ${el.precio}</td>
         </tr>`;

      });
      document.getElementById("tabla").innerHTML = tableBody;

      let sumaPedido = arrayCarrito.reduce((acumulador, el) => acumulador + el.precio, 0);

      const total = document.createElement("div");
      total.classList.add("text-center", "justify-content-center")
      total.innerHTML = `
                     <h2>
                        Total del pedido: $ ${sumaPedido}
                     </h2>
                     `
      pedido.appendChild(total);

      const confirmarCompra = document.createElement("button");
      confirmarCompra.classList.add("col-2", "btn", "btn-outline-success", "text-center");
      confirmarCompra.innerText = "Confirmar Compra";

      total.appendChild(confirmarCompra);

      const eliminarPedido = document.createElement("button");
      eliminarPedido.classList.add("col-2", "btn", "btn-outline-danger", "text-center");
      eliminarPedido.innerText = "Eliminar un pedido";

      total.appendChild(eliminarPedido);


      //CONFIRMAR COMPRA
      confirmarCompra.addEventListener("click", () => {
         localStorage.setItem("carrito", JSON.stringify(""));

         Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Su pedido se ha registrado con éxito. Muchas gracias',
            timer: 3000
         })

         setTimeout('document.location.reload()', 3000);

      })


      //ELIMINAR UN PEDIDO
      eliminarPedido.addEventListener("click", async () => {

         const { value: pedidoAEliminar } = await Swal.fire({
            input: 'text',
            inputLabel: 'Eliminar',
            inputPlaceholder: 'Ingrese el nombre del pedido a eliminar'
         })

         const pedidoEliminado = false;
         if (pedidoAEliminar) {
            for (let i = 0; i < arrayCarrito.length; i++) {
               if (arrayCarrito[i].nombre == pedidoAEliminar) {
                  arrayCarrito.splice(i, 1);
                  localStorage.setItem("carrito", JSON.stringify(arrayCarrito));
                  pedidoEliminado = true;

                  Swal.fire({
                     position: 'center',
                     icon: 'success',
                     title: `${pedidoAEliminar} eliminado con éxito!`,
                     timer: 3000,
                  })
                  document.location.reload();
               }
            }
         }

         if (!pedidoEliminado) {
            Swal.fire({
               position: 'center',
               icon: 'error',
               title: `No se encontró el pedido a eliminar`,
               timer: 3000
            })
         }
      })





   })

})




