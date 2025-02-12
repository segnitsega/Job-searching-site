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
    <div className="inline-flex flex-col h-fit items-center w-[270px] shadow-lg shadow-gray-300 border border-gray-200  rounded-2xl ">
      <h1 className="text-[32px]">Saved Jobs</h1>
     
        {
                jobsList.map((job, index)=>(
                    job.isBookMarked && 
                    <div key={index} className='flex flex-col w-[230px] border border-gray-200 shadow-lg shadow-gray-300 rounded-2xl p-2 mb-4'> 
                      <div  className="flex justify-between p-1 ">  
                          <div className="ml -4">
                            <h1 className="text-[20px]">{job.title}</h1>
                            <p className="text-sm">{job.company}</p>
                            <div className="flex gap-2 text-sm">
                              <h2 className="bg-gray-200 p-1">{job.type}</h2>                              
                              <p className="bg-gray-200 p-1">{job.salary}</p>
                            </div>
  
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
