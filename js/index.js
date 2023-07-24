import { bbdd, inicializarRecetas } from './bbdd.js'

// LOGIN ###################################################################################################
const user = {
   email: '',
   contraseña: ''
}

const inputs = document.querySelectorAll("input"); //Atrapo todos los elementos tipo input

const isAuth = JSON.parse(localStorage.getItem("isLogin")) || [];

inputs.forEach((el) => {
   el.addEventListener("input", (e) => {

      const { target } = e;
      const { name, value } = target;

      if (name == "email") {
         user.email = value;
      }

      if (name == "pass") {
         user.contraseña = value;
      }
   })
});

const buttonLogin = document.getElementById("loginButton");

buttonLogin.addEventListener("click", () => {
   const usuarioEncontrado = bbdd.find(el => el.usuario === user.usuario && el.contraseña === user.contraseña)
   if (usuarioEncontrado) {
      const auth = { name: usuarioEncontrado.email, isLogin: true }
      localStorage.setItem("isLogin", JSON.stringify(auth));
      window.location.replace('../menu.html');
   } else {
      console.log("No existe el usuario");
   }
})

if (isAuth.isLogin) {
   window.location.replace('../menu.html');
}



