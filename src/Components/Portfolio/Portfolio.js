import React from 'react';
import youtube from '../Images/youtubeclone.jpg';
import wheater from "../Images/wheaterapp.png";
import university from "../Images/univerity.png";
import tictac from "../Images/tictactoe.png";
import Title from '../Title/Title';

export default function Portfolio() {
  let data =[
    {
      image:youtube,
      href:"https://youtube-clone-red-nine.vercel.app/",
      name:"Youtube clone",
    },
    {
      image:wheater,
      href:"",
      name:"Wheater App",
    },
    {
       image:university,
      href:"",
      name:"University website",

    },
    {
       image:tictac,
      href:"https://tarekshenawy.github.io/university-website/",
      name:"Tic tac toe Game",

    }
]
  return (
    <div className='portfolio  my-56 mx-auto w-[90%] '>
         <Title title="Profile"/>

          <div className='grid  gap-10 xl:grid-cols-3 lg:grid-cols-2 w-[85%] mx-auto
             md:grid-cols-1 sm:grid-cols-1 max-sm:grid-cols-1'>
                {
                  data.map((item,index)=>{
                    return(
                    <div key={index} className='mx-auto'>
                        <div  className=" image-project w-80 h-80 relative">
                              <img src={item.image} alt='project-image'
                              className='w-[100%] h-[100%] object-cover rounded-md' ></img>
                              <p className='btn-hover absolute top-0 left-0 right-0 bottom-0'>
                              <a href={item.href} >live demo</a>
                              </p>
                        </div>
                        <p className='text-center font-bold text-2xl mt-6 text-[var(--text-color)]'>{item.name}</p>
                  
                    </div>

                    )
                  })
                }
              
            
          </div>
    </div>
  )
}
