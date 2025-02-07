import Job from './Job';
// import { useState } from 'react'

function Feed({ jobsList , setjobsList}) {
  
  const handleClick = (id) => {
    setjobsList((prevJobsList)=>
      prevJobsList.map((job)=>(
        job.id === id ? {...job , isBookmarked : !job.isBookmarked} : job
      ))
    )
    
  }
  return (
    <div>
        {
            jobsList.map((job)=>(               
                <Job key={job.id} title={job.title} company={job.company} model={job.model} time={job.time} salary={job.salaryRange} description={job.description} isBookmarked={job.isBookmarked} handleClick={()=>handleClick(job.id)}/>                           
            )               
            )
        }
        
    </div>
  )
}

export default Feed
