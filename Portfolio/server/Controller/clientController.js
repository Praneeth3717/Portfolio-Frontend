const clientModel=require('../Model/clientModel')
const validator=require('validator')

const sendData=async(req,res)=>{
    try {
        const {email}=req.body
        if(!validator.isEmail(email)){
            return res.status(400).json({message:"Invalide Email Id"})
        }
        const clientData=new clientModel(req.body)
        const saveData=await clientData.save()
        res.status(200).json({ success: true, data: saveData });
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
module.exports=sendData;