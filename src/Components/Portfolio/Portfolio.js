import youtube from '../Images/youtubeclone.avif';
import wheater from "../Images/wheaterapp.png";
import university from "../Images/university.png";
import tictac from "../Images/tictactoe.webp";
import facebookclone from '../Images/facebookimage.webp'
import Title from '../Title/Title';
import store from '../Images/store.webp';
import dashboard from '../Images/dashboard.webp';
import blban from '../Images/blban.jpg';
import { motion } from "framer-motion";

export default function Portfolio() {
  let data =[
    {
      image:youtube,
      href:"https://youtube-clone-815w.vercel.app/",
      name:"Youtube clone",
      desc:"A responsive YouTube clone built using React.js and YouTube Data API that replicates the core functionalities of the YouTube platform.",
      language:['React','CSS','API']
    },
    {
      image:facebookclone,
      href:"https://facebook-clone-using-react.vercel.app/",
      name:'Facebook clone',
      desc:"Facebook Clone built with React JS and React-bootstrap, fully responsive with authentication using API, users can add and delete posts, fetch dynamic data from API, and manage content with a clean modern UI.",
      language:['React','bootstarp','API','Context']
    },
    {
      image:store,
      href:'https://steady-llama-a23988.netlify.app/',
      name:'Store Ecommerce',
      desc:"E-commerce Store built with React JS and Tailwind CSS, fully responsive with API integration, features include product listing, product details, add to cart, wishlist, and checkout flow with modern UI/UX.",
      language:['React','tailwind','TypeScript','Redux','API']

    },
    {
      image:dashboard,
      href:'https://admin-dashboard-xi-six-65.vercel.app/',
      name:'Admin Dashboard',
      desc:"Admin Dashboard built with React JS and Tailwind CSS, fully responsive with API integration, features include user management, product management (add, edit, delete), analytics dashboard with charts, and role-based authentication.",
        language:['React','tailwind','API']

    },
    {
      image:blban,
      href:'https://delightful-gaufre-719003.netlify.app/',
      name:'Blban',
      desc:"Brand Website built with React JS and Tailwind CSS, fully responsive with API integration, includes brand catalog, product listing, filtering by categories, wishlist, and shopping cart functionality for a smooth e-commerce experience.",
      language:['React','tailwind','API']
    },
    {
      image:wheater,
      href:"https://taarekelshenawy.github.io/wheather-App/",
      name:"Wheater App",
      desc:"Weather App built with React JS and Tailwind CSS, fully responsive with real-time API integration, allows users to search cities, view current weather conditions, temperature, humidity, and 5-day forecast with a clean modern UI.",
      language:['React','Css']
    },
    {
       image:university,
      href:"https://taarekelshenawy.github.io/university-website/",
      name:"University website",
      desc:"University Website built with React JS and Tailwind CSS, fully responsive with API integration, includes course listings, departments, faculty profiles, events calendar, and contact forms with a clean and modern UI/UX.",
      language:['React','Css']

    },
    {
       image:tictac,
      href:"https://tic-tac-toe-sooty-one-95.vercel.app/",
      name:"Tic tac toe Game",
      desc:"Tic Tac Toe Game built with React JS, fully responsive, allows two players to play on the same device with interactive UI, win detection, score tracking, and reset functionality.",
       language:['React','Css']
    }
]
  return (
    <div className='my-56 mx-auto w-[90%]' id="portfolio">
         <Title title="Profile"/>
          <div className='grid  gap-5 xl:grid-cols-3
              sm:grid-cols-2 max-sm:grid-cols-1'>
                {
                  data.map((item,index)=>{
                    return(
                      <>
                         <motion.div
                            key={index}
                            className="mx-auto border  rounded p-2 w-full max-w-[420px]" 
                            whileHover={{
                              scale: 1.05,          // يكبر شوية
                              boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
                              borderColor: "#ef4444",
                              // ظل أقوى
                            }}
                            whileTap={{ scale: 0.95 }} // لما تضغط عليه يصغر بسيط
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                        <div key={index} className='mx-auto p-2'>
                          
                            <img src={item.image} alt='project-image'
                                  className='w-full h-64 object-cover rounded-md' ></img>
                            <div className='flex items-center justify-between mt-6'>
                              <p className='font-bold text-2xl  text-[var(--text-color)]'>{item.name}</p>
                              <a href={item.href}   target="_blank" 
                                  rel="noopener noreferrer" className='text-red-500 text-lg font-bold' >Demo</a>
                            </div>
                            <p className=' text-md mt-2 text-gray-400'>{item.desc}</p>
                            <div className='flex gap-2 mt-6 flex-wrap'>
                             {item.language.map((el)=>{
                              return(
                                <p className='w-20  p-1 text-[14px] flex justify-center rounded-xl text-sm font-bold text-gray-700  bg-gray-100'>{el}</p>

                              )
                            })}

                            </div>
          
                            
                      
                        </div>

                      </motion.div>
                      </>
               

                  

                    )
                  })
                }
              
            
          </div>
    </div>
  )
}
