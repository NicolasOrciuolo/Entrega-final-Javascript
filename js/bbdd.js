export const bbdd = [
   {
      email: 'nico@prueba.com',
      contraseña: 'nico123',
   },

   {
      email: 'prueba@prueba.com',
      contraseña: 'asd1234',
   }
]

export class Recetas {
   constructor(recetaRecibida) {
      const { nombre, descripcion, precio, foto } = recetaRecibida;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.precio = precio;
      this.foto = foto
   }
}


export function inicializarRecetas(arrayDeRecetas, datosFetched) {

   const receta1Obj = {
      nombre: datosFetched[1].strMeal,
      descripcion: "Pollo con papas y champigñones",
      precio: 2800,
      foto: datosFetched[1].strMealThumb
   };
   const receta2Obj = {
      nombre: datosFetched[2].strMeal,
      descripcion: "Ensalada Primavera con pollo",
      precio: 3000,
      foto: datosFetched[2].strMealThumb
   };
   const receta3Obj = {
      nombre: datosFetched[3].strMeal,
      descripcion: "Pollo a la vasca",
      precio: 2800,
      foto: datosFetched[3].strMealThumb
   };
   const receta4Obj = {
      nombre: datosFetched[4].strMeal,
      descripcion: "Arroz con pollo",
      precio: 3500,
      foto: datosFetched[4].strMealThumb
   };
   const receta5Obj = {
      nombre: datosFetched[5].strMeal,
      descripcion: "Pollo al curry",
      precio: 2500,
      foto: datosFetched[5].strMealThumb
   };
   const receta6Obj = {
      nombre: datosFetched[6].strMeal,
      descripcion: "Pollo frito",
      precio: 3300,
      foto: datosFetched[6].strMealThumb
   };
   const receta7Obj = {
      nombre: datosFetched[7].strMeal,
      descripcion: "Ensalada oriental de pollo",
      precio: 3600,
      foto: datosFetched[7].strMealThumb
   };
   const receta8Obj = {
      nombre: datosFetched[8].strMeal,
      descripcion: "Fideos con pollo y espinaca",
      precio: 4200,
      foto: datosFetched[8].strMealThumb
   };
   const receta9Obj = {
      nombre: datosFetched[9].strMeal,
      descripcion: "Pollo piri-piri",
      precio: 3000,
      foto: datosFetched[9].strMealThumb
   };

   const receta1 = new Recetas(receta1Obj);
   arrayDeRecetas.push(receta1);
   const receta2 = new Recetas(receta2Obj);
   arrayDeRecetas.push(receta2);
   const receta3 = new Recetas(receta3Obj);
   arrayDeRecetas.push(receta3);
   const receta4 = new Recetas(receta4Obj);
   arrayDeRecetas.push(receta4);
   const receta5 = new Recetas(receta5Obj);
   arrayDeRecetas.push(receta5);
   const receta6 = new Recetas(receta6Obj);
   arrayDeRecetas.push(receta6);
   const receta7 = new Recetas(receta7Obj);
   arrayDeRecetas.push(receta7);
   const receta8 = new Recetas(receta8Obj);
   arrayDeRecetas.push(receta8);
   const receta9 = new Recetas(receta9Obj);
   arrayDeRecetas.push(receta9);
}



