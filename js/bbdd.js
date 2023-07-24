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
   constructor(recetaRecibida){
      const { nombre, descripcion, precio, foto } = recetaRecibida;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.precio = precio;
      this.foto = foto
   }
}

export function inicializarRecetas(arrayDeRecetas) {
   const receta1Obj = {
      nombre: "Brochette",
      descripcion: "Brochette de vegetales a la parrilla",
      precio: 2800,
      foto: "../img/Brochette.jpg"
   };
   const receta2Obj = {
      nombre: "Burger",
      descripcion: "Hamburguesa con papas fritas",
      precio: 3000,
      foto: "../img/Burger.jpg"
   };
   const receta3Obj = {
      nombre: "Ensalada",
      descripcion: "Ensalada fresca de hojas verdes con palta y pollo",
      precio: 2800,
      foto: "../img/Ensalada.jpg"
   };
   const receta4Obj = {
      nombre: "Guiso",
      descripcion: "Guiso de calabaza",
      precio: 3500,
      foto: "../img/Guiso.jpg"
   };
   const receta5Obj = {
      nombre: "Pasta",
      descripcion: "Pasta fresca con salsa de vegetales",
      precio: 2500,
      foto: "../img/Pasta.jpg"
   };
   const receta6Obj = {
      nombre: "Pizza",
      descripcion: "Pizza capresse",
      precio: 3300,
      foto: "../img/Pizza.jpg"
   };
   const receta7Obj = {
      nombre: "Pollo con vegetales",
      descripcion: "Pollo al horno relleno con vegetales",
      precio: 3600,
      foto: "../img/Pollo.jpg"
   };
   const receta8Obj = {
      nombre: "Salmon",
      descripcion: "Salmon al horno acompañado de ensalada continental",
      precio: 4200,
      foto: "../img/Salmon.jpg"
   };
   const receta9Obj = {
      nombre: "Sandwich",
      descripcion: "Sandwich de pollo en pan de miga",
      precio: 3000,
      foto: "../img/Sandwich.jpg"
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



