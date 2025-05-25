import React, { useState } from 'react';
import menubar from "../Images/menu.png";
import { Link } from 'react-scroll';


export default function Navbar() {
  const[menuicon,setMenuicon]=useState(false);
  return (
    <nav className="flex justify-between items-center px-12 pt-5 pb-3 fixed
     top-0 left-0 right-0 bg-[var(--main-color)] z-20 h-20"
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

      <button className="transition ease-in-out delay-100 
      rounded-full border-4 p-2 w-28 hover:bg-red-500 
      font-bold text-[var(--text-color)] max-sm:hidden ">
       <Link to="contactme" smooth={true} duration={500} offset={-120}>lets talk</Link>
      </button>
      <img src={menubar} alt='menu-bar-icib' className='menu-bar ml-3' onClick={()=>setMenuicon(!menuicon)} ></img>

    </nav>
  )
}
