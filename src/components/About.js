import React from 'react'
import logo from "../assets/about.png"
const About = () => {
    const config={
        line1:"Hi, I am Rajesh.I'm Full-stack Developer.I built beautiful websites in React",
        line2:"I am Pro-efficient with technologies like React ,Java ,JavaScript ,Spring boot ,Redux ,MariaDB ,BootStrap ,Git ,Github ,Axios ,css3 and many more.",
    }
  return (
    <div className='flex md:flex-row flex-col bg-primary' id="about">
        <div className='md:w-1/2'>
            <img src={logo}></img>
        </div>
        <div className='md:w-1/2 flex justify-center pl-3 pt-3'>
            <div className='flex flex-col justify-center'>
                 <h1 className='text-4xl text-white border-b-4 border-primary mb-5 w-[160px] font-bold'>About us</h1>
                 <p className='text-white'>{config.line1}</p>
                 <p className='text-white py-3 pb-5' style={{marginRight:"50px"}}>{config.line2}</p> 
            </div>
           
        </div>
    </div>
  )
}

export default About