const socket = io();

//creamos una instancia de socket del lado del cliente

//vamos a guardar el nombre del usuario
let user;

const chatbox = document.getElementById("chatBox");

//usamos el objeto Swal y el método Fire

Swal.fire({
  title: "Identificate",
  input: "text",
  text: "Ingrese nombre de usuario",
  inputValidator: (value) => {
    return !value && "Ingrese nombre de usuario para continuar";
  },
  allowOutsideClick: false,
});
