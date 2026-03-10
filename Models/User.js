const mongoose = require('mongoose')
const userSchema = mongoose.Schema(
    {
        name : String,
        email : {type : String , unique : true , require : true},
        password : {type : String , require : true},
          role : {
            type :String,
            default : "user"
        }
    }   
)

module.exports = mongoose.model('User' , userSchema)