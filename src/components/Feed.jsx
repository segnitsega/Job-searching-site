import Job from './Job';

function Feed({ jobsList , setjobsList}) {
  // console.log(jobsList)
  const handleClick = (id) => {
    setjobsList((prevJobsList)=>
      prevJobsList.map((job)=>(
        job.id === id ? {...job , isBookMarked : !job.isBookMarked} : job
      ))
    )
    
  }
  // console.log("jobsss", jobsList)
  return (
    <div>
        {
            
            jobsList.map((job)=>(               
                <Job key={job.id} logo={job.logo} title={job.title} company={job.company} type={job.type} salary={job.salary} description={job.description} isBookMarked={job.isBookMarked} handleClick={()=>handleClick(job.id)}/>                           
            )               
            )
        }
        
    </div>
  )
}

export default Feed
