import React from 'react'
import logo from "../assets/resume.jpg"
const Resume = () => {
    const config={
        resume:{
            link:"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        }
    }
  return (
    <div className='flex md:flex-row flex-col bg-primary' id="resume">
        <div className='md:w-1/2 flex justify-center md:justify-end'>
            <img src={logo} className='w-[300px] py-5'></img>
        </div>
        <div className='md:w-1/2 flex justify-center pl-3 pt-3'>
            <div className='flex flex-col justify-center'>
                 <h1 className='text-4xl text-white border-b-4 border-primary mb-5 w-[135px] font-bold'>Resume</h1>
                 <a href="Rajesh__CV (1).pdf" download='resume.pdf'className='btn'>Download</a>
               
            </div>
           
        </div>
    </div>
  )
}

export default Resume