import Job from './Job';
// import { useState } from 'react'

function Feed({ jobsList , setjobsList}) {
  
  const handleClick = (id) => {
    setjobsList((prevJobsList)=>
      prevJobsList.map((job)=>(
        job.id === id ? {...job , isBookMarked : !job.isBookMarked} : job
      ))
    )
    
  }
  return (
    <div>
        {
            jobsList.map((job)=>(               
                <Job key={job.id} title={job.title} company={job.company} type={job.type} salary={job.salary} description={job.description} isBookMarked={job.isBookMarked} handleClick={()=>handleClick(job.id)}/>                           
            )               
            )
        }
        
    </div>
  )
}

export default Feed
