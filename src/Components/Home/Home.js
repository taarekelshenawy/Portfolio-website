import React from 'react';
import myprofile from '../Images/myprofile.jpg'
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

import TextType from './TextType';

export default function Home() {


    

  return (
          <section id="home" className='px-2 py-8 md:py-0  m-auto h-screen
             mt-20' 
          >
            <div className='flex md:flex-row  h-screen items-center gap-5  mx-auto w-[80%] flex-col'>

                   <div  className='flex gap-4 flex-col font-bold max-w-[600px]'>
                       
                        <h1 className="xl:text-5xl  font-bold flex flex-col gap-5 text-[var(--text-color)] max-sm:text-3xl sm:text-3xl  ">Hey! I'm Tarek El Sayed El Shenawy !</h1>
                      
                        <TextType 
                          text={["Frontend Developer (React.js | Next.js)"]}
                          className='text-red-500 text-center text-2xl'
                          typingSpeed={75}
                          pauseDuration={1500}
                          showCursor
                          cursorCharacter="_"
                          deletingSpeed={50}
                          variableSpeedEnabled={false}
                          variableSpeedMin={60}
                          variableSpeedMax={120}
                          cursorBlinkDuration={0.5}
                        />
                        <p className='font-bold text-xl text-white'>I develop high-quality, interactive, and responsive web applications
                           using React and modern web tools.</p>
                        <button   className="rounded bg-red-500 text-slate-50 border-red-700 border-2  w-32 text-lg h-10 hover:scale-105 duration-300">
                        <Link  to="about" smooth={true} duration={500} offset={-120}>About me</Link>
                        </button>
                   </div>

                    <div className=' flex justify-center items-center flex-1'>
                    <motion.img
                    src={myprofile}
                    alt="Profile"
                    className="max-w-80 rounded-full object-cover"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />  
                    </div>
                                
               

            </div>
            
          </section> 
 
  )
}
