import express from "express";
import exphbs from "express-handlebars";
import {Server} from "socket.io";
import viewsRouter from "./routes/views.router.js"
const app = express();
const PUERTO = 8080;

//configuramos handlebaars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

//Midelwarw
app.use(express.static("./src/public"));

//Rutas
app.use("/", viewsRouter)


//1)referencia guardada del servidor
const httpServer = app.listen(PUERTO, () => {
    console.log(`Conectado a http://localhost:${PUERTO}`);
})

//2) instanciamos io pasandole como parametro el servidor
const io = new Server(httpServer)

io.on("connection", (socket) => {
    console.log("Cliente conectado");
    socket.on("saludo", (data) => {
        console.log(data);
    })
})








