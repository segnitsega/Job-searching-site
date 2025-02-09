
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp   } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";

const Filter = () => {
    const [selectedValue, setSelectedValue] = useState("Last 24 Hours");
    const options = ["Last Hour", "Last Week", "Last Month", "Last Year"];
    const [isopen, setIsopen] = useState(false)

    const [level, setLevel] = useState("Intermediate")
    const levels = ["Junior","Intermediate","Senior"]
    const [levelOpen, setIslevelOpen] = useState(false)

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

                <div className="flex flex-col">
                        <label>Location</label>
                        <div className="flex items-center gap-1 border border-gray-300 p-2 rounded-md mb-2"> 
                            <FaMapMarkerAlt className="text-gray-500 " />
                            <input type="text" placeholder="Enter your location" className="outline-none"/>
                        </div>
                            
                        <div className="mb-4 ">
                        <p>Experience Level</p>
                        <input 
                            type="text"
                            value= {level}
                            readOnly
                            className="relative w-full border px-3 py-2 rounded-md focus:outline-none"
                            onClick={()=>setIslevelOpen(!levelOpen)}

                        />
                        <button className="absolute left-65 top-1/2 -translate-y-5" tabIndex={-1} onClick={()=>setIslevelOpen(!levelOpen)}>
                        {/* {
                            levelOpen ? <IoIosArrowUp /> : <IoIosArrowDown  />
                        } */}
                            
                        </button>
                        {
                            levelOpen && (
                                <ul className=" w-full bg-white border rounded-md mt-1">
                                {levels.map((level, index) => (
                                <li
                                    key={index}
                                    className="p-2 hover:bg-gray-200 cursor-pointer"
                                    onClick={() => {setLevel(level); setIslevelOpen(false)}}
                                >
                                    {level}
                                </li>
                            ))}
                        </ul>
                            )
                        }
                    </div>
                
                </div>
            
        </div>
                   
    </div>
  )
}

export default Filter
