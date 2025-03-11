import { useState } from 'react'
import './Header.css'
import {Link} from 'react-scroll';
import { FiMenu } from "react-icons/fi";
import { VscClose } from "react-icons/vsc";
import pic from '../../assets/pic.png'

export default function Header() {
  const [x,setx]=useState(true)
  const [y,sety]=useState(false)
  const openmenu=()=>{
    setx(false)
    sety(true)
  }
  const closemenu=()=>{
    setx(true)
    sety(false)
  }
  return (
    <>
    <div name='home' className='header'>
    <nav className='manali'>
      <p className='header1'><span className='header11'>P</span>RANEETH</p>
      <ul className={`uluu ${x?"active":"disactive"}`} >
        <li className='listuu'><Link to='home' className='top'>Home</Link></li>
        <li className='listuu'><Link to='about' className='top'>About</Link></li>
        <li className='listuu'><Link to='project'  className='top'>Projects</Link></li>
        <li className='listuu'><Link to='contact' className='top'>Contact</Link></li>
        <VscClose className='closebtn' onClick={closemenu}/>
      </ul>
      <FiMenu className={`menu ${y?"disactive":"active"}`} onClick={openmenu}/>
    </nav>
    <div className='part'>
      <div className='part1'>
        <div className='part11'>
          <p className='part111'>FullStack Developer</p>
          <p className='part112'>Hi, I am <span className='part1121'>Praneeth</span></p>
        </div>
      </div>
      <div className='part2'>
        <img src={pic} alt='' className='header-pic'></img>
      </div>
    </div>
    </div>
    </>
  )
}
