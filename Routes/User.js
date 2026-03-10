const express = require('express')
const { SignUp, SignIn, GetAllContacts, GetContact, UpdateContact, DeleteContact } = require('../Controlles/User')
const { Validation, validSignUp, ValidSignIn } = require('../Middlewares/Validator')
const { isAuth } = require('../Middlewares/isAuth')



const userRouter = express.Router() 

userRouter.post('/SignUp' , validSignUp ,Validation ,SignUp)

userRouter.post('/SignIn' , ValidSignIn, Validation, SignIn )

userRouter.get('/CurrentUser' , isAuth , (req,res)=> res.send(req.user))

userRouter.get('/getAllContacts', GetAllContacts)

userRouter.get('/getContact/:id' , GetContact)

userRouter.put('/updateContact/:id' , UpdateContact)

userRouter.delete('/deleteContact/:id' , DeleteContact)








module.exports = userRouter