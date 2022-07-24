const express = require("express");
const productoSchema = require("../models/producto")

const router = express.Router();

// crear producto
router.post("/productos", (req, res) =>{
    const product = productoSchema(req.body);
    console.log()
    product
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
});





module.exports = router;