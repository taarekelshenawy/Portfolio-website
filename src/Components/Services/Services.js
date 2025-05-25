import React from 'react';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import webdevelop from '../Images/webdevelopment.png';
import creative from "../Images/creative.png";
import responsive from "../Images/responsive.webp";
import webideas from "../Images/webideas.png";
import support from "../Images/support.png";
import Title from '../Title/Title';

export default function Services() {
  let information =[
    {
      Image:webdevelop,
      title:"web development",
      desc:"I can build user interface of website using html and css and javascript and React js, ..etc."
   },
   {
    Image:responsive,
    title:"Responsive Design",
    desc:"your website will be 100% responsive for all devices."

   },
   {
    Image:creative,
    title:"Creative Design",
    desc:"I can edit and create new content to make website much better."

   },
   {
    Image:webideas,
    title:"web ideas",
    desc :"I could turn your ideas into a real projects with high quality."
   },
   {
    Image:support,
    title:"Support",
    desc:"support is available if you want any changes in webstie after delvering it.."

   }
]
    useEffect(() => {
        Aos.init({
          duration: 1000, 
          once: true,     
        });
      }, []);
  return (
    
        <div className=' services mx-16 my-52'>
          <Title title="Services"/>

              <div className=' mt-24 grid  gap-10 px-12 
              lg:grid-cols-3 md:grid-cols-2
               sm:grid-cols-2 max-sm:grid-cols-1'>

                  {
                    information.map((item,index)=>{
                      return(
                        <div key={index}
                          data-aos="fade-up"
                          data-aos-duration="1000" 
                          data-aos-delay="200"     
                          data-aos-easing="ease-in-out"
                          className='flex flex-col gap-3 text-center w-70 text-[var(--text-color)]'>
                          <img src={item.Image} className='w-40 mx-auto hover:scale-105' alt='item-image'></img>
                          <p className='mt-5 font-bold text-2xl text-red-500'>{item.title}</p>
                          <p className='text-lg'>{item.desc}</p>
                       </div>

                      )
                    })
                  }
                 

              </div>

        </div>

  )
}
