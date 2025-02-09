
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp   } from "react-icons/io";

const Filter = () => {
    const [selectedValue, setSelectedValue] = useState("Last 24 Hours");
    const options = ["Last Hour", "Last Week", "Last Month", "Last Year"];

    const [isopen, setIsopen] = useState(false)


  return (
    <div className="flex flex-col w-[350px] shadow-lg shadow-gray-300 border border-gray-200  rounded-2xl ">
        <h1 className="text-[32px] text-center">Filter</h1>
        

        <div className=" w-64 m-4">

            <div className="mb-4 ">
                <p>Date Posted</p>
                <input
                    type="text"
                    value= {selectedValue}
                    readOnly
                    className="relative w-full border px-3 py-2 rounded-md focus:outline-none"
                    onClick={()=>setIsopen(!isopen)}

                />
                <button className="absolute left-65 top-1/2 -translate-y-5" tabIndex={-1} onClick={()=>setIsopen(!isopen)}>
                {
                    isopen ? <IoIosArrowUp /> : <IoIosArrowDown  />
                }
                    
                </button>
                {
                    isopen && (
                        <ul className=" w-full bg-white border rounded-md mt-1">
                        {options.map((option, index) => (
                        <li
                            key={index}
                            className="p-2 hover:bg-gray-200 cursor-pointer"
                            onClick={() => {setSelectedValue(option); setIsopen(false)}}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
                    )
                }
            </div>
            
            <div>
                <p>Job Type</p>
                <div className="mt-2 border border-gray-300 rounded-lg p-2 shadow">
                    {["Full-time", "Part-time", "Internship", "Contract", "Volunteer"].map((option, index) => (
                        <label key={index} className="flex items-center space-x-2">
                            <input type="checkbox" className="w-4 h-4" />
                            <p>{option}</p>
                        </label>
                    ))}
                </div>                        
               
            </div>
            
        </div>
                   
    </div>
  )
}

export default Filter
