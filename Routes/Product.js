const express = require('express')
const { AddProduct, GetAllProduct, GetOneProduct, UpdateProduct, DeleteProduct } = require('../Controlles/Product')
const { UpdateContact, DeleteContact } = require('../Controlles/User')

const productRouter = express.Router()


productRouter.post('/addproduct' , AddProduct )
productRouter.get('/getAllProduct' , GetAllProduct)
productRouter.get('/getOneProduct/:id' , GetOneProduct)
productRouter.put('/updateProduct/:id' , UpdateProduct)
productRouter.delete('/deleteProduct/:id' , DeleteProduct)



module.exports = productRouter