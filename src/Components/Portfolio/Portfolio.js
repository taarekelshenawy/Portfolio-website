import React from 'react';
import youtube from '../Images/youtubeclone.avif';
import wheater from "../Images/wheaterapp.png";
import university from "../Images/university.png";
import tictac from "../Images/tictactoe.webp";
import facebookclone from '../Images/facebookimage.webp'
import Title from '../Title/Title';
import store from '../Images/store.webp';
import dashboard from '../Images/dashboard.webp';
import blban from '../Images/blban.jpg'

export default function Portfolio() {
  let data =[
    {
      image:youtube,
      href:"https://youtube-clone-815w.vercel.app/",
      name:"Youtube clone",
    },
    {
      image:facebookclone,
      href:"https://facebook-clone-using-react.vercel.app/",
      name:'Facebook clone'
    },
    {
      image:store,
      href:'https://steady-llama-a23988.netlify.app/',
      name:'Store Ecommerce',

    },
    {
      image:dashboard,
      href:'https://admin-dashboard-xi-six-65.vercel.app/',
      name:'Admin Dashboard'

    },
    {
      image:blban,
      href:'https://delightful-gaufre-719003.netlify.app/',
      name:'Blban'

    },
    {
      image:wheater,
      href:"https://taarekelshenawy.github.io/wheather-App/",
      name:"Wheater App",
    },
    {
       image:university,
      href:"https://taarekelshenawy.github.io/university-website/",
      name:"University website",

    },
    {
       image:tictac,
      href:"https://tic-tac-toe-sooty-one-95.vercel.app/",
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
