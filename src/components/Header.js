import React, { useState } from "react";
import "../App.css";
import { Bars3Icon } from "@heroicons/react/24/solid";
const Header = () => {
  const [toggleButton,setToggleButton]=useState(false)
  return (
    <div className="flex justify-between px-5 py-5 bg-primary">
      <a href="#" className="font-bold text-3xl text-black">
        RJ Code
      </a>
      <nav className="hidden md:block">
        <ul className="flex header text-white">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      {toggleButton && <nav className="block md:hidden">
        <ul onClick={()=>setToggleButton(!toggleButton)} className="flex header flex-col text-white mobile-nav">
        <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav> }
      
      <button onClick={()=>setToggleButton(!toggleButton)} className="block md:hidden">
        <Bars3Icon className="text-white h-6" />
      </button>
    </div>
  );
};

export default Header;
