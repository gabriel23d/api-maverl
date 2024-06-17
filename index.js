


const express = require("express");
const app = express();
const puerto = 2006;

const cors = require("cors");



const {getpersonajes, getpersonajesById} = require("./controllers/personajes.controllers")

app.use(cors());

app.get("/", getpersonajes )

app.get("/:id", getpersonajesById)


app.listen( puerto , ()=> {
    console.log(`hola, el servidor de personajes está bien`);
    console.log(`Servidor arriba ok, en el puerto de los personajes ${puerto}`);
});
