const express = require('express')
const mongoose = require('mongoose');
const productRouter = require('./routes/product.route');
require('dotenv').config()


const app = express()
app.use(express.json())

// ROUTES
app.use('/api/products', productRouter);


// DB
mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.xgrjbys.mongodb.net/`)
		.then(() => {
			console.log('!! DB Connected !!')
			app.listen(3000, () => {
				console.log("!! Server started on port 3000 !!")
			})
		})
		.catch((err) => console.log(err))
