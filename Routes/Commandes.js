const  { isAuth }= require('../Middlewares/isAuth')

const {AddCommend, GetAllCommends, GetOneCommend, UpdateCommend, DeleteCommend, GetMyCommends} = require('../Controlles/Commend')

const express = require('express')

const commendRouter = express.Router()


commendRouter.post('/addCommend', AddCommend)
commendRouter.get('/getAllCommends' , GetAllCommends)
commendRouter.get('/getMyCommends', isAuth , GetMyCommends)
commendRouter.get('/getOneCommend/:id' , GetOneCommend)
commendRouter.put('/updateCommend/:id' , UpdateCommend)
commendRouter.delete('/deleteCommend/:id', DeleteCommend)

module.exports = commendRouter