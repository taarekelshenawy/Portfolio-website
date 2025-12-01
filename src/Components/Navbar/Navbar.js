import React, { useState } from 'react';
import menubar from "../Images/menu.png";
import { Link } from 'react-scroll';
import github_icon from '../Images/github.png';
import Linked_icon from '../Images/linkedin.png';


export default function Navbar() {
  const[menuicon,setMenuicon]=useState(false);
  return (
    <nav className="flex justify-between items-center px-12 pt-5 pb-3 fixed
     top-0 left-0 right-0  bg-gray-900 z-20 h-20"
     >
      <h1 className='font-bold hover:text-neutral-50 sm:text-xl  xl:text-3xl lg:text-3xl  hover:cursor-pointer text-red-500'>
        <Link to="home" smooth={true} duration={500} offset={-100} >
        Tarek El Shenawy
        </Link>
      </h1>

      <ul className={`${menuicon ?  "active" : "hide" }`}>
         <li className=' hover:cursor-pointer text-[var(--text-color)]'>
            <Link  to="about" smooth={true} duration={500} offset={-120}>About</Link>
            <p></p>
          </li>
          <li  className=' hover:cursor-pointer text-[var(--text-color)]'>
            <Link  to="services" smooth={true} duration={500} offset={-120}>Services</Link>
            <p></p>
          </li>
          <li  className=' hover:cursor-pointer text-[var(--text-color)]'>
            <Link to="portfolio" smooth={true} duration={500} offset={-120}>Portfolio</Link>
            <p></p>
          </li>
          <li  className=' hover:cursor-pointer text-[var(--text-color)]'>
            <Link to="contactme" smooth={true} duration={500} offset={-120}>Get in touch</Link>
            <p></p>
          </li>
      </ul>

      <div className="transition ease-in-out delay-100 p-2 w-28 
      font-bold text-[var(--text-color)] max-sm:hidden flex gap-3 items-center">
        <a href='https://github.com/taarekelshenawy' target='_blank'     rel="noopener noreferrer">
         <img src={github_icon} alt='github-icon' className='bg-white w-11 rounded-full cursor-pointer border'></img>
        </a>
        <a href='https://www.linkedin.com/in/tarek-el-shenawy/' target='_blank'  rel="noopener noreferrer">
         <img src={Linked_icon} alt='github-icon' className='bg-white w-11 rounded-full cursor-pointer border'></img>
        </a>
     
      
      </div>
      <img src={menubar} alt='menu-bar-icib' className='menu-bar ml-3' onClick={()=>setMenuicon(!menuicon)} ></img>

    </nav>
  )
}
