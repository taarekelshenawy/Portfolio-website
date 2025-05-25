import React from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';
import Title from '../Title/Title';

export default function About() {

    useEffect(() => {
        Aos.init({
          duration: 1000, 
          once: true,     
        });
      }, []);
  return (

      <div className='about my-56 mx-4 flex flex-col '>

            <Title title="About"/>
            <div className='flex gap-16 text-xl
             md:flex-col lg:flex-row sm:flex-col
              max-sm:flex-col'
              >
                    <p data-aos="fade-up"
                    data-aos-duration="1000" 
                    data-aos-delay="200"     
                    data-aos-easing="ease-in-out" 
                    className='flex-1 p-3 rounded-lg text-[var(--text-color)]
                      text-2xl bg-slate-500 '
                    >
                        I'm Tarek El Shenawy ,
                        <span>Front-End Web Developer</span> I can create websites
                          and applications using web languages such as
                          HTML, CSS, and JavaScript that allow users to access
                            and interact with the site or app. When you visit a website,
                            the design elements you see were created by 
                            a front-end developer.
                    </p>
                    <div  data-aos="fade-up"
                                  data-aos-duration="1000" 
                                  data-aos-delay="200"     
                                  data-aos-easing="ease-in-out" 
                                  className='flex-1 leading-10 
                                    p-3 rounded-lg text-2xl bg-slate-500'
                      >
                                <p className='text-[var(--text-color)]'>
                                  <span className='font-bold text-black'>Name : </span>
                                  Tarek El Sayed El Shenawy.
                                </p>
                                <p className=' text-[var(--text-color)]'>
                                  <span className='font-bold  text-black'>Email : </span>
                                  <span className='max-sm:text-xl font-bold'>tarekelshenawy1997@gmail.com</span>
                                </p>
                                <p className='text-[var(--text-color)]'> 
                                  <span className='font-bold text-2xl  text-black'> Place : </span>
                                    Damietta
                                </p>
                    </div>

            </div>
      </div>  

  )
}
