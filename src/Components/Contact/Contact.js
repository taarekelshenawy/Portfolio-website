import React from 'react';
import Title from '../Title/Title';


export default function Contact() {
  return (

        <div className=' contactme my-56 m-auto'>
           <Title title="Contact me"/>
             <p className='text-center mb-8 font-bold text-2xl text-[var(--text-color)] max-sm:text-xl'>Please fill out the form below to discuss any work opportuintes</p>
             <div className='flex justify-center items-center '>
                  <form className=' flex flex-2 flex-col w-[80%]'>
                        
                              <input className='bg-neutral-700 p-2 pl-5 rounded-md w-full h-16 text-white text-xl mb-3 border-none outline-none' type="text"  placeholder='Enter name' name="name" required></input>
                              <input  className='bg-neutral-700 p-2 pl-5 rounded-md w-full h-16 text-white text-xl mb-3 border-none outline-none' type="number"  placeholder='Enter Phone' name='phone' required></input>
                              <textarea className='bg-neutral-700 pl-5 p-2 rounded-md w-full text-xl h-36 mb-3 text-white' type="text" placeholder='enter your massege' name='message' rows={5}  required></textarea>
                              <button type='submit' className=' h-12 w-40 mx-auto mt-5 bg-[var(--text-color)] font-bold text-lg hover:bg-red-500 rounded'>Submit now</button>
                  </form>
                        
                
              </div>


        </div>

  )
}
