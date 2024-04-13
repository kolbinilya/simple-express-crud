const Product = require("../models/product.model");
const ProductModel = require("../models/product.model");


const getProducts = async (req, res) => {
	try {
		const products = await Product.find()
		res.status(200).json(products)
	} catch (err) {
		res.status(500).json({message: 'Cannot find all products'})
	}
}

const addNewProduct = async (req, res) => {
	try {
		const product = await ProductModel.create(req.body)
		res.status(200).json(product)
	} catch (err) {
		res.status(500).json({message: 'Something went wrong'})
		console.log(err)
	}
}
const getOneProduct = async (req, res) => {
	try {
		const {id} = req.params
		if (!id) res.status(404).json({message: 'Product not found'})

		const product = await ProductModel.findById(id)
		res.status(200).json(product)
	} catch (e) {
		res.status(500).json({message: 'Cannot find product with id ' + req.params.id})
	}
}
const updateProduct = async (req, res) => {
	try {
		const {id} = req.params
		if (!id) res.status(404).json({message: 'Product not found'})

		const product = await ProductModel.findByIdAndUpdate(id, req.body)
		if (!product) res.status(404).json({message: 'Product cannot be updated'})

		const updatedProduct = await ProductModel.findById(id)
		res.status(200).json(updatedProduct)

	} catch (err) {
		res.status(500).json({message: 'Cannot to update product with id ' + req.params.id})
	}
}

const deleteProduct = async (req, res) => {
	try {
		const {id} = req.params
		if (!id) res.status(404).json({message: 'Product not found'})
		const product = await ProductModel.findByIdAndDelete(id)
		if (!product) res.status(404).json({message: 'Product not found'})
		res.status(200).json({message: 'Product deleted'})
	} catch (err) {
		res.status(500).json({message: 'Cannot delete product with id ' + req.params.id})
	}
}

module.exports = {getProducts, addNewProduct, getOneProduct, updateProduct, deleteProduct}
