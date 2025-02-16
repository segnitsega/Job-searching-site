import { useState } from "react"

const Pagination = ({jobsList, setJobs}) => {
  const [prev, setPrev] = useState(0)
  const handlePagination = (n)=>{
    setPrev(n)
    if((n >= 0) && (n < 8)){
      setJobs(jobsList.slice(0 + n*5, 5 + n*5))
      setPrev(n)
    }
    else if(n === 8){
      setJobs(jobsList.slice(0 + n*5, 7 + n*5))
      setPrev(n)
    }
   
  }

  return (
    
    <div className='flex justify-center gap-4 mb-4'>
      <button className='bg-gray-300 py-2 px-4 rounded-md' onClick={()=>handlePagination(prev - 1)}>Prev</button>
      <button className='border border-gray-500 px-2' onClick={()=>handlePagination(0)}>1</button>
      <button className='border border-gray-500 px-2' onClick={()=>handlePagination(1)} >2</button>
      <button className='border border-gray-500 px-2' onClick={()=>handlePagination(2)}>3</button>
      <button className='border border-gray-500 px-2' onClick={()=>handlePagination(3)}>4</button>
      <button className='border border-gray-500 px-2' onClick={()=>handlePagination(4)}>5</button>
      <button className='bg-gray-300 py-2 px-4 rounded-md' onClick={()=>handlePagination(prev + 1)}>Next</button>   
    </div>
  )
}

export default Pagination
