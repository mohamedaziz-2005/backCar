const Product = require("../Models/Product")

exports.AddProduct = async(req,res)=>{
    try {
        const {image,text} = req.body 
        if (text.length < 0) {
            res.status(400).send({msg  : "text must containt more then 10 words"})
        }
        if (!image)
            res.status(400).send({msg  : "text must have image"}
        )

        const product = new Product(req.body)
        await product.save()
        res.status(200).send({msg : "Product added", product})
    } catch (error) {
        res.status(500).send({msg : "Product not added"})
    }
}

exports.GetAllProduct =async(req,res)=>{
    try {
        const products = await Product.find()
        res.status(200).send({msg : "Product geted ", products})   
    } catch (error) {
        res.status(500).send({msg : "Could not get all Product"})
    }
}


exports.GetOneProduct =async(req,res)=>{
    try {
        const {id} = req.params
        const product = await Product.findById(id)
        res.status(200).send({msg : 'Product geted',product})
    } catch (error) {
        res.status(500).send({msg : 'Could not get Product'})
    }
}


exports.UpdateProduct =async(req,res)=>{
    try {
        const {id} = req.params
        const {image , text , prix} = req.body
        const product = await Product.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send({msg : "product updated" , product})
    } catch (error) {
        res.status(500).send({msg : "Could not updateProduct"})
    }
}

exports.DeleteProduct =async(req,res)=>{
    try {
        const {id} = req.params
        await Product.findByIdAndDelete(id)
        res.status(200).send({msg : 'ProductDeleted'})
    } catch (error) {
        res.status(500).send({msg : ''})
    }
}



