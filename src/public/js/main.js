console.log("Conectado al servidor");

const socket = io();
//conectamos al servidor
socket.emit("saludo", "Conectado al cliente");
