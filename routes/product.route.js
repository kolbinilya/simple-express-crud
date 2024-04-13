const express = require('express');
const productController = require("../controllers/product.controller");
const router = express.Router();

router.get('/', productController.getProducts)
		.post('/', productController.addNewProduct)

router.get('/:id', productController.getOneProduct)
		.put('/:id', productController.updateProduct)
		.delete('/:id', productController.deleteProduct)

module.exports = router;