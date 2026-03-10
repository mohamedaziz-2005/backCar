const mongoose = require('mongoose')
const productSchema = mongoose.Schema(
    {
        image : String,
        text : String,
        prix : String
    }
)

module.exports = mongoose.model('Product' , productSchema)