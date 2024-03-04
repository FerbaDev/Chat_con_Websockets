import express from "express";
import exphbs from "express-handlebars";
import { Server } from "socket.io";
import viewsRouter from "./routes/views.router.js";
const app = express();
const PUERTO = 8080;

//configuramos handlebaars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

//Midelwarw
app.use(express.static("./src/public"));

//Rutas
app.use("/", viewsRouter);

//1)referencia guardada del servidor
const httpServer = app.listen(PUERTO, () => {
  console.log(`Conectado a http://localhost:${PUERTO}`);
});

//2) instanciamos io pasandole como parametro el servidor
const io = new Server(httpServer);

//3)creamos un array para guardar los mensajes que se envian al chat
let messages = [];

io.on("connection", (socket) => {
  console.log("Cliente conectado");
  socket.on("message", (data) => {
    //recibo la data del cliente
    messages.push(data);

    //emitimos estos mensajes al cliente para mostrarlos en pantalla, y nos vamos al main.js a escuchar los mensajes
    io.emit("messagesLogs", messages);
  });
});
