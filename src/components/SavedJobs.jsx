// import Job from './Job'
import { IoCloseOutline } from "react-icons/io5";

function SavedJobs({company, model, salary}) {
  return (
    <div className="flex flex-col items-center w-[330px] shadow-lg shadow-gray-300 border border-gray-200  rounded-2xl ">
      <h1 className="text-[32px]">Saved Jobs</h1>
      <div className='flex flex-col items-center w-[280px] border border-gray-200 shadow-lg shadow-gray-300 rounded-2xl p-4'>
        <div className="flex gap-20 p-2">
            <div>
                <h2>{company}</h2>
                <p>{model}</p>
                <p>{salary}</p>  
            </div>
            <div className="">
                <IoCloseOutline size={20}/>  
            </div>
        </div>   
      </div>
    </div>
  )
}

export default SavedJobs
