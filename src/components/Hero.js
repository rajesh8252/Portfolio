import React from "react";
import logo from "../assets/hero.png";
import { FaLinkedin,FaInstagramSquare,FaGithub } from "react-icons/fa";
const Hero = () => {
    const config={
        position:"I'm a Fullstack Developer",
        social_link:{
                "instagram":"https://www.instagram.com/rajesh_rj6",
                "linkedin":"https://www.linkedin.com/in/rajeshkj7",
                "github":"https://github.com/rajesh8252",
                
        }
    }
  return (
    <div className="flex md:flex-row flex-col px-3 py-32 bg-secondary justify-center" id="hero">
      <div className="md:w-1/2">
        <h1 className="text-white text-6xl font-Hero_font">
          Hi, <br></br>I'm Rajesh <span className="text-2xl">MCA.,</span>
          <p className="text-2xl">{config.position}</p>
        </h1> 
        <div className="flex py-10">
            <a href={config.social_link.linkedin} className="pr-5"><FaLinkedin className="hover:text-white w-12 h-12"/></a>
            <a href={config.social_link.instagram} className="pr-5"><FaInstagramSquare className="hover:text-white w-12 h-12"/></a>
            <a href={config.social_link.github} className="pr-5"><FaGithub className="hover:text-white w-12 h-12"/></a>
        </div>
      </div>

      <img className="md:w-1/3" src={logo}></img>
    </div>
  );
};

export default Hero;
