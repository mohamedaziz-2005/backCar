const User = require('../Models/User')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


exports.SignUp = async(req , res)=>{
     try {
        const {password , email} = req.body
        const found = await User.findOne({email})
        if (found) {
           return res.status(400).send({error : [{msg : "Email already exists"}]})
        }
        const account = new User(req.body)

        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(password, salt);

        account.password = hashedPassword 
        await account.save() 

        const payload = { id: account._id }
        var token = jwt.sign( payload , process.env.privateKey);

        res.status(200).send({msg : "Account created" , account , token})
        

     } catch (error) {
        res.status(500).send({error : [{msg : "Could not create account"}]})
     }
}


exports.SignIn = async(req,res)=>{
    try {
        const {email , password} = req.body
        const found = await User.findOne({email})
        if (!found) {
            return res.status(400).send({errors : [{msg : "Wrong email"}]})
        }


        const matched = bcrypt.compareSync(password, found.password);


        if (!matched) {
         return res.status(400).send({errors : [{msg : "Wrong password"}]})
        }

        const payload = { id: found._id }
        var token = jwt.sign( payload , process.env.privateKey);

        res.status(200).send({msg : "Connected" , found , token})

    } catch (error) {
        res.status(500).send({error : [{msg  : "Could not logging"}]})
    }
}

exports.GetAllContacts=async(req,res)=>{
    try {
        const contacts = await User.find()
        res.status(200).send({msg : "List of the contacts" , contacts})
    } catch (error) {
        res.status(500).send({msg : "Could not get all contacts" })
    }
}


exports.GetContact=async(req,res)=>{
    try {
        const {id} = req.params
        const found = await User.findById(id)
        res.status(200).send({msg : "founded" , found})
    } catch (error) {
        res.status(500).send({msg : "Could not get contact" })
    }
}

exports.UpdateContact=async(req , res)=>{
    try {
        const {id} = req.params
        await User.findByIdAndUpdate(id,{$set: req.body})
        res.status(200).send({msg : "Contact updated"})
    } catch (error) {
        res.status(500).send({msg : "Could not update contact"})
    }
}

exports.DeleteContact=async(req,res)=>{
    try {
        const {id} = req.params
        await User.findByIdAndDelete(id)
        res.status(200).send({msg : "Delete Contact"})
    } catch (error) {
        res.status(500).send({msg : "Could not Delete contact"})
    }
}