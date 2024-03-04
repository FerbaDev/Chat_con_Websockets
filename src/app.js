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


//Listen
app.listen(PUERTO, () => {
    console.log(`Conectado a http://localhost:${PUERTO}`);
})