import React from 'react';
import myprofile from '../Images/myprofile.png'
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';
import { Link } from 'react-scroll';

export default function Home() {

    useEffect(() => {
        Aos.init({
          duration: 1000, 
          once: true,     
        });
      }, []);


  return (
          <div className='home h-screen px-2  m-auto flex flex-col 
            items-center  justify-center  mt-20 max-sm:justify-start max-sm:pt-8'
          >

              <div className='flex flex-col items-center gap-6  mx-auto w-[95%]'>

                    <div className=' flex justify-center items-center'>
                          <img   src={myprofile} alt='myprofile-image' className='w-[230px] object-contain  bg-sky-100 rounded-full'></img>
                    </div>

                    <div data-aos="zoom-in" data-aos-duration="2000"  data-aos-delay="200" data-aos-easing="ease-in-out" className='flex flex-col flex-1 text-3xl leading-[60px] font-bold '>
                        <p className='lg:text-5xl font-bold flex flex-col gap-5 text-[var(--text-color)] max-sm:text-3xl sm:text-4xl'>Hello there , i'm
                        Tarek El Shenawy<br></br>
                        <span className='text-red-600 typing '>Front-End Web Developer</span> </p>
                        <button   className="rounded-full text-slate-50 border-red-700 border-2 hover:bg-red-500 w-40 text-lg mt-5 p-3">
                        <Link  to="about" smooth={true} duration={500} offset={-120}>About me</Link>
                          </button>
                    </div>

              </div>
            
          </div> 
 
  )
}
