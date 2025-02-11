import React from 'react'

const Pagination = () => {
  return (
    <div className='flex justify-center gap-4 mb-4'>
      <button className='bg-gray-300 py-2 px-4 rounded-md '>Prev</button>
      <button className='border border-gray-500 px-2'>2</button>
      <button className='border border-gray-500 px-2'>3</button>
      <button className='border border-gray-500 px-2'>4</button>
      <button className='border border-gray-500 px-2'>5</button>
      <button className='border border-gray-500 px-2'>6</button>
      <button className='bg-gray-300 py-2 px-4 rounded-md '>Next</button>   
    </div>
  )
}

export default Pagination
