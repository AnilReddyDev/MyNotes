import React from 'react'
import Notes from './Notes'

export default function Home() {
  return (
    <div className='w-full min-h-screen  box-border  bg-orangegrad1 px-5 '>
        <h1 className='text-3xl bebas-neue-regular sm:text-4xl font-normal box-border text-white max-w-[960px] mx-auto py-5 sm:px-5'>MyNotes</h1>
        <Notes/>
        <h1 className='poppins-medium text-white relative sm:absolute bottom-1 left-1 py-5'>Created with ❤️ by <a className=' underline' href="https://anilreddy.netlify.app/" target='_blank'>Anil Reddy</a></h1>
    </div>
  )
}
