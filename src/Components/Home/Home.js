import React from 'react';
import myprofile from '../Images/myprofile.jpg'
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

export default function Home() {

    useEffect(() => {
        Aos.init({
          duration: 1000, 
          once: true,     
        });
      }, []);


  return (
          <div id="home" className='h-screen px-2  m-auto flex  
            items-center  justify-center mt-20' 
          >

              <div className='flex flex-col items-center gap-5  mx-auto w-[95%]'>
                 
                     <div className=' flex justify-center items-center'>
                      <motion.img
                      src={myprofile}
                      alt="Profile"
                      className="w-52 rounded-full object-cover"
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

                    <div data-aos="zoom-in" data-aos-duration="2000"  data-aos-delay="200" data-aos-easing="ease-in-out" className='flex gap-2 flex-col font-bold '>
                        <p className='xl:text-5xl  font-bold flex flex-col gap-5 text-[var(--text-color)] max-sm:text-3xl sm:text-3xl  items-center'>
                          Hey! I'm Tarek El Sayed El Shenawy 
                        </p>
                        <p className='text-red-500 text-center text-2xl'> Frontend Developer (React.js | Next.js) </p>
                        <button   className="rounded bg-red-500 text-slate-50 border-red-700 border-2  w-32 text-lg h-10">
                        <Link  to="about" smooth={true} duration={500} offset={-120}>About me</Link>
                        </button>
                    </div>

              </div>
            
          </div> 
 
  )
}
