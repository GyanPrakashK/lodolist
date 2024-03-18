

import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='sm:mt-24 mt-16 flex flex-col items-center justify-center text-center'>
      <div >
        <h1 className='text-5xl font-extrabold'>
          ToDo LisT
        </h1>
        <h2 className="max-w-4xl sm:text-3xl font-semibold mt-3 sm:mt-6 ">
          Organize your life, one task at a time
        </h2>

        <p className="mt-2 sm:mt-3 max-w-xl text-lg">
          A to-do list is a tool for organizing tasks, ensuring completion, and managing time effectively.
        </p>
      </div>
      <Link href='/todolistview' target='_blank' className='mt-6 sm:mt-12  border border-gray-800 rounded-xl'>
        <button className='p-4'>get start </button>
      </Link>
      <div className='mt-6' >
        <img src="/todoweb.png" alt="uploading  preview"
          height={545}
          width={1917}
          quality={100}
          className='hidden sm:block'
       />
        <img src="/todoapp.png" alt="uploading  preview"
          height={413}
          width={270}
          quality={100}
          className='sm:hidden'
       />
      </div>
    </div>
  )
}

export default page







