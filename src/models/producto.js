const mongoose = require("mongoose")
//esquema de una coleccion de usuarios
const productoSchema = mongoose.Schema({
    id: String,
	tipo: String,
	detalles: {
        nombre: String,
        formato: String,
        cantidad: String
    }
});

module.exports = mongoose.model('Producto', productoSchema);

