const express = require('express')
const ConnectDB = require('./Config/ConnectDB')
const userRouter = require('./Routes/User.js')
const productRouter = require('./Routes/Product.js')
const commendRouter = require('./Routes/Commend.js')
const cors = require('cors')



const app =  express()
app.use(cors({
    origin : 'http://localhost:3000',
    credentials : true
}))


require('dotenv').config()


ConnectDB()

app.use(express.json())
app.use( '/api/user' ,userRouter)
app.use('/api/product' ,productRouter)
app.use('/api/commande' ,commendRouter)
   

app.listen(process.env.port , console.log(`Server is runnig on the port ${process.env.port}`))