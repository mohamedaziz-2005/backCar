const mongoose = require('mongoose')
const commendeSchema = mongoose.Schema(
    {
        article : {
            type : mongoose.Types.ObjectId,
            ref :"Product"
        },
        owner : {
            type : mongoose.Types.ObjectId,
            ref :"User"
        },
        status : {
            type : String,
            default : "Pending"
        }
    }
)

module.exports = mongoose.model('Commende', commendeSchema)