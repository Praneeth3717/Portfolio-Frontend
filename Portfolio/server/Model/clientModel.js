const mongoose=require('mongoose')

const clientSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    }
})

const clientModel=mongoose.model("client",clientSchema)

module.exports=clientModel