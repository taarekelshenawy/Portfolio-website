import React from 'react';

export default function Title({title}) {
  return (
    <div>
           <p className='mx-auto font-bold text-3xl mb-14
             text-[var(--text-color)] border-2 rounded-full 
              border-red-500 hover:bg-red-500 w-52 p-4 text-center
             '>
                {title}
            </p>
    </div>
  )
}
