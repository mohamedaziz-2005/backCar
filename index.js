const express = require('express')
const ConnectDB = require('./Config/ConnectDB')

const cors = require('cors')
const userRouter = require('./Routes/User')
const productRouter = require('./Routes/Product')
const commendRouter = require('./Routes/Commandes')




const app =  express()
app.use(cors({
    origin : 'https://superb-cactus-183f75.netlify.app',
    credentials : true
}))


require('dotenv').config()


ConnectDB()

app.use(express.json())
app.use( '/api/user' ,userRouter)
app.use('/api/product' ,productRouter)
app.use('/api/commande', commendRouter )
   

app.listen(process.env.port , console.log(`Server is runnig on the port ${process.env.port}`))