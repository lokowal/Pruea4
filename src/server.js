const { application } = require("express");
const express = require("express");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const productoRoutes = require("./routes/producto")


const app = express();
const port = process.env.PORT || 3000;

//middel
app.use("/api", productoRoutes);
//route
app.get("/", (req, res) => {
    res.send("Bivenvenido a mi app")
})
/*mongoose.connect('mongodb://localhost:27017/productosDb')
.then(()=> console.log("Conectado a mongo"))
.catch((error)=> console.error(error)) */

mongoose.connect('mongodb://localhost:27017/productosDb');
const db = mongoose.connection
db.on('error', console.error.bind(console,'Error  al conectar'))
db.once('open', function callback(){
    console.log('conectado a mongo!')
})

app.listen(port, () => console.log("Escuchando en el puerto", port));



