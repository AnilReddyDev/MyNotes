import React from 'react'

export default function InputNote({textHandler,addHandler,inputText}) {

  const charLeft = 150 - inputText.length;

   
  return (
    <div className=" bg-note poppins-medium  backdrop-blur-5 shadow-note border-2 border-note border-solid text-white p-[15px] min-h-[150px] sm:min-h-[220px] rounded-lg col-span-1  flex flex-col justify-between break-words">
        <textarea name="noteInput" placeholder='Type Here...' className='w-full h-full placeholder:text-lg placeholder:text-white bg-transparent resize-none outline-none text-xl text-white' maxLength={150} onChange={textHandler} value={inputText}></textarea>
        <div className='flex items-center justify-between'>
            <p>{charLeft} Left</p>
            <button className=' w-16 h-8 poppins-medium rounded-lg bg-transparent border-2 border-white text-white' onClick={addHandler}>Add</button>
        </div>
    </div>
  )
}
