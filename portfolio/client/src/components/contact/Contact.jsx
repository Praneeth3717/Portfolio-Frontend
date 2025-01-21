import { useState } from 'react';
import './Contact.css'
import Resume from '../../assets//NIT_Warangal_Resume__1___Copy_ (5).pdf'
import { FaRegEnvelope ,FaPhoneAlt} from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import {BsFacebook,BsInstagram,BsLinkedin} from "react-icons/bs";
import axios from 'axios'

export default function Contact() {
  const urltoSend="https://mern-portfolio-server-3vik.onrender.com/router/sendData"
  const [sent,setsent]=useState("no")
  const [data,setdata]=useState({})
  const onChangeHandler=(e)=>{
    const {name,value}=e.target;
    setdata({...data,[name]:value})
  }
  const sendData=async(e)=>{
    e.preventDefault()
    try {
      const response=await axios.post(urltoSend,data)
      if(response.data.success){
        console.log(response.data);
        setsent("yes")
        setTimeout(() => setsent("no"), 5000);
      } else {
      console.error("Error: ", response.data.message);
    }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div name='contact' className='contact'>
      <div className='right'>
        <h1>Contact Me</h1>
        <p><FaRegEnvelope className='icon'/>praneethchandupatla@gmail.com</p>
        <p><FaPhoneAlt className='icon'/>9963310841</p>
        <div className='logo'>
          <a href='https://www.facebook.com/praneeth.chanduptla/'><BsFacebook className='logo1'/></a>
          <a href='https://www.instagram.com/_praneeth_12/'><BsInstagram className='logo1'/></a>
          <a href='https://www.linkedin.com/in/praneeth-chandupatla-b08a93285/'><BsLinkedin className='logo1'/></a>
          <a href='https://github.com/Praneeth3717'> <IoLogoGithub className='logo1'/></a>
        </div>
        <a href={Resume} download="praneethResume.pdf"><button className='btn'>Download CV</button></a>
      </div>
      <div className='left'>
        <form onSubmit={sendData} className='contactform'>
            <input onChange={onChangeHandler} type='text' className='name' name="name" placeholder='Your Name'></input>
            <input onChange={onChangeHandler} type='text' className='email' name="email" placeholder='Your Email'></input>
            <textarea onChange={onChangeHandler} className='message' name='message' rows={6} placeholder='Your Message'></textarea>
            <p className={`messagesent ${sent}`}> Message sent !!</p>
            <input type="submit" value="Submit" className='btn' />
        </form>
      </div>
    </div>
  )
}