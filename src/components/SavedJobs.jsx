// import Job from './Job'
import { IoCloseOutline } from "react-icons/io5";

function SavedJobs({jobsList, setjobsList}) {

    const handleClick = (id) =>(
        setjobsList((prevJobsList)=>
          prevJobsList.map((job)=>(
            job.id === id ? {...job , isBookMarked : !job.isBookMarked} : job
          ))
        )
    )
    
  return (
    <div className="flex flex-col items-center w-[330px] shadow-lg shadow-gray-300 border border-gray-200  rounded-2xl ">
      <h1 className="text-[32px]">Saved Jobs</h1>
     
        {
                jobsList.map((job, index)=>(
                    job.isBookMarked && 
                    <div key={index} className='flex flex-col items-center w-[280px] border border-gray-200 shadow-lg shadow-gray-300 rounded-2xl p-4 mb-4'> 
                    <div  className="flex gap-20 p-2 ">  
                        <div >
                            <h2>{job.type}</h2>
                            {/* <p>{job.model}</p> */}
                            <p>{job.salary}</p>  
                        </div>
                        <div className="">
                            <IoCloseOutline size={20} onClick={() => handleClick(job.id)}/>  
                        </div>
                    </div> 
                     </div>
                ))
            }
        

            
            
               
     
    </div>
  )
}

export default SavedJobs
