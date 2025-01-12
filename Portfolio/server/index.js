const express=require('express')
const cors=require('cors')
const app=express()
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const Route=require('./Router/clientRouter')


app.use(cors())
app.use(express.json())
dotenv.config()

const MONGO_URL=process.env.MONGO_URL
const PORT=process.env.PORT

mongoose.connect(MONGO_URL).then(()=>{
    console.log("DB connected Successfully")
    app.listen(PORT,()=>{
        console.log(`App listening to ${PORT}`)
    })
}).catch((error)=>{
    console.log(error)
})

app.use('/router',Route)