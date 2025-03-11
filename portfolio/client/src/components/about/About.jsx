import { useState } from 'react'
import Skills_Data from '../../data/skills.json'
import nitw from '../../assets/nitw.jpg'
import './About.css'

export default function About() {
  const [Skills,setSkills]=useState(true)
  const [Education,setEducation]=useState(false)
  const handleskills=()=>{
    if(Education===true){
      setEducation(false);
      setSkills(true);
    }
    else{
      setSkills(true);
    }
  }
  const handleEducation=()=>{
    if(Skills===true){
      setEducation(true);
      setSkills(false);
    }
    else{
      setEducation(true);
    }
  }

  return (
    <div  name='about' className='about'>
      <div className='col-1'>
          <img  className='nitw' src={nitw} alt='nitw'></img>
      </div>
      <div className='col-2'>
        <h1>About Me</h1>
        <p>I’m Praneeth Chandupatla, a passionate MERN Stack Developer skilled in building dynamic, scalable web applications using MongoDB, Express.js, React, and Node.js. I enjoy designing seamless front-end experiences, crafting efficient back-end systems, and exploring new technologies to stay at the forefront of web development and deliver exceptional user experiences.</p>
        <div className='tab-cont1'>
            <p onClick={handleskills} className={`abclick ${Skills?'line':''}`}>Skills</p>
            <p onClick={handleEducation} className={`abclick ${Education?'line':''}`}>Education</p>
        </div>
        <div className='tab-cont2'>
            <ul className={`list ${Skills?'active':''}`}>
              <div className='style'>
                {
                  Skills_Data.map((skills,index)=>(
                    <li key={index}><img className='skillpic' src={`/${skills.skill_img}`} alt=''></img><br/>{skills.skill_name}</li>
                  ))
                }
              </div>
            </ul>
            <ul className={`list ${Education?'active':''}`}>
                <li><span>National Institution of Technology, Warangal (2025)</span><br/>B.Tech., Metallurgical and Materials Engineering (CGPA: 5.93)</li>
                <li><span>Narayana Junior College (2021)</span><br/>Telangana State Board of Intermediate Education (Percentage: 93.2)</li>
                <li><span>Dr KKR’s Gowtham Concept School (2019)</span><br/>Telangana State Board of Secondary Education (CGPA: 9.8)</li>
            </ul>

        </div>
      </div>
    </div>
  )
}
