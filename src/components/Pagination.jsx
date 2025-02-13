import { useState } from "react"

const Pagination = ({jobsList, setJobs}) => {
  const [prev, setPrev] = useState(1)
  const [pastJobs, setPastjobs] = useState([jobsList.slice(0, 4)])

  const handlePagination = (n)=>{
    if( n >= 1){
      setJobs(jobsList.slice(n - 1, n + 4))
      setPastjobs(jobsList.slice(n - 1, n + 4))
      setPrev(n)
    }

  }

  return (
    
    <div className='flex justify-center gap-4 mb-4'>
      <button className='bg-gray-300 py-2 px-4 rounded-md' onClick={()=>handlePagination(prev - 1)}>Prev</button>
      <button className='border border-gray-500 px-2' onClick={()=>handlePagination(1)}>1</button>
      <button className='border border-gray-500 px-2' onClick={()=>handlePagination(2)} >2</button>
      <button className='border border-gray-500 px-2' onClick={()=>handlePagination(3)}>3</button>
      <button className='border border-gray-500 px-2' onClick={()=>handlePagination(4)}>4</button>
      <button className='border border-gray-500 px-2' onClick={()=>handlePagination(5)}>5</button>
      <button className='bg-gray-300 py-2 px-4 rounded-md' onClick={()=>handlePagination(prev + 1)}>Next</button>   
    </div>
  )
}

export default Pagination
