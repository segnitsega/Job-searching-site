import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import logo from '../assets/dummyLogo.svg'

const Job = ({ title, company, salary, type, description, isBookMarked, handleClick}) => {

   
  return (
    <div className='flex w-[628px] mb-4 gap-4 p-4 shadow-lg shadow-gray-300 border border-gray-200  rounded-2xl '>
        <div>
            <img src={logo} alt="logo" />        
        </div>

        <div>
            <div className='flex justify-between items-center'>
                <h1>{title}</h1>
                <div className='flex gap-2'>
                    {
                        isBookMarked ? <FaBookmark size={32} onClick={handleClick}/> : <CiBookmark size={32} onClick={handleClick}/> 
                    }                  
                    <CiShare2 size={32}/>
                </div>
            </div>
            <p>{company}</p>
            <div className='flex gap-4'>
                {/* <p>{model}</p> */}
                <p>{type}</p>
                <p>{salary}</p>
            </div>
            <p>{description}</p>
        </div>
       
    </div>
  )
}

export default Job
