import React from 'react'
import logo1 from "../assets/ecommerce-websites.jpg"
import logo2 from "../assets/food-ecommerce.jpg"
import logo3 from "../assets/website-blog.jpg"
const Projects = () => {
    const config={
        projects:
        [
            {
                image:logo1,
                description:"A E-commerce Website. Built with MERN Stack.",
                link:"https://google.com"
            },
            {
                image:logo2,
                description:"Food E-commerce website like Swiggy, Built with Angular and .NET",
                link:"https://google.com"
            },
            {
                image:logo3,
                description:"Basic Blog website.Built with Next.js and MongoDB",
                link:"https://google.com"
            },
            
        ]
    }
  return (
    <div className='flex flex-col py-20 px-5 justify-center bg-secondary text-white' id="projects">
        <div className='w-full px-10'>
            <div className='flex flex-col py-5'>
                <h1 className='text-4xl text-white border-b-4 border-secondary mb-5 w-[135px] font-bold'>Projects</h1>
                <div>
                    <p>These are my best projects.I built React and Tailwind CSS</p>
                </div>
            </div>
            
        </div>
        <div className='w-full'>
            <div className='flex flex-col md:flex-row px-10 gap-5'>
            {config.projects.map(project=>( 
            
                <div className='relative'>
                <img src={project.image} className='h-[250px] w-[500px]'></img>
                <div className='project-desc'>
                    <p className='text-center px-5 py-5'>{project.description}</p>
                    <div className='flex justify-center'>
                    <a className="btn"target='_blank' href={project.link}>View Project</a>
                </div>
                </div>
                
                </div>
            
            ))}
                
            </div>
            
        </div>
    </div>
  )
}

export default Projects