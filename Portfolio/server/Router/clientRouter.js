const express=require('express')
const sendData=require('../Controller/clientController')

const Route=express.Router()

Route.post('/sendData',sendData)

module.exports=Route