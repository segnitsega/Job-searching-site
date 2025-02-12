import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
// import logo from '../assets/dummyLogo.svg'

const Job = ({ logo, title, company, salary, type, description, isBookMarked, handleClick}) => {

   
  return (
    <div className='flex w-[628px] mb-4 gap-4 p-4 shadow-lg shadow-gray-300 border border-gray-200  rounded-2xl '>
        <div>
            <img src={logo} alt="logo" width='53px' height='53px'/>        
        </div>

        <div className="w-full">
            <div className='flex items-center justify-between'>
                <h1 className="text-[32px] ">{title}</h1>
                <div className='flex gap-2'>
                    {
                        isBookMarked ? <FaBookmark size={32} onClick={handleClick}/> : <CiBookmark size={32} onClick={handleClick}/> 
                    }                  
                    <CiShare2 size={32}/>
                </div>
            </div>
            <p className="text-[20px] ">{company}</p>
            <div className='flex gap-4'>
                {/* <p>{model}</p> */}
                <p className="bg-gray-200">{type}</p>
                <p className="bg-gray-200 py-1 px-2">{salary}</p>
            </div>
            <p>{description}</p>
        </div>
       
    </div>
  )
}

export default Job
