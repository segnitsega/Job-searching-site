
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp   } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
let checked = []
const Filter = ({jobs, setjobs, jobsList}) => {
    const [selectedValue, setSelectedValue] = useState("Last 24 Hours");
    const options = ["Last Hour", "Last Week", "Last Month", "Last Year"];
    const [isopen, setIsopen] = useState(false)

    const [level, setLevel] = useState("Mid Level")
    const levels = ["Entry Level","Mid Level","Senior Level"]
    const [levelOpen, setIslevelOpen] = useState(false)
    const [store, setStore] = useState(jobs)


// filter by checkBox
    const handleCheckboxSearch = (e, option) => {
        if(e.target.checked){
            checked.push(option)
        }
        else{
            checked = checked.filter(item => item !== option)
        }
        if(checked.length === 0){
            setjobs(store)
            return 
            
        } 
        let filtered = jobsList.filter((job) => checked.some(typ => job.type.toLowerCase().includes(typ.toLowerCase())))

        setjobs(filtered) 
    }

    // filter by Location
    const handleLocationSearch = (e, element) => {
        let search = e.target.value.toLowerCase()
        if(search.length == 0){
            setjobs(store)
            return
        }
        let filtered = jobsList.filter((job)=>job.location.toLowerCase().includes(search))
        if(filtered.length === 0){
            element.textContent = "Please Enter a valid city or country"
            setjobs(store)
            return
        }
        element.textContent = ""
        setjobs(filtered)
        
    }

    // filter by Experience Level
    const handleExperienceSearch = (e) => {
        let search = e.target.textContent.toLowerCase()
        if(search.length == 0){
            setjobs(store)
            return
        }
        let filtered = jobsList.filter((job)=>job.experienceLevel.toLowerCase().includes(search))
        setjobs(filtered)
        
    }

  return (
    <div className="flex flex-col h-fit w-[300px] shadow-md shadow-gray-300 border border-gray-200  rounded-2xl ">
        <h1 className="text-[32px] text-center">Filter</h1>

        <div className=" w-64 m-4">

            <div className="mb-4 ">
                <p className="text-[20px] mb-2">Date Posted</p>

                <div className="border  border-gray-200 rounded p-2 flex items-center text-gray-500">
                    <input
                        type="text"
                        value= {selectedValue}
                        readOnly
                        className="outline-none"
                        onClick={()=>setIsopen(!isopen)}

                    />
                    <button className="absolute left-65  -translate-y-0.5 translate-x-4" tabIndex={-1} onClick={()=>setIsopen(!isopen)}>
                    {
                        isopen ? <IoIosArrowUp /> : <IoIosArrowDown  />
                    }
                        
                    </button>
                </div>

                
                {
                    isopen && (
                        <ul className=" w-full bg-white border border-gray-200 rounded-md mt-1">
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
                <p className="text-[20px]">Job Type</p>
                <div className="mt-2 border border-gray-300 rounded-lg p-2 ">
                    {["Full-time", "Hybrid", "Remote", "Internship", "Contract", "Volunteer"].map((option, index) => (
                        <label key={index} className="flex items-center space-x-2">
                            <input type="checkbox" className="w-4 h-4" onClick={(e)=>handleCheckboxSearch(e, option)}/>
                            <p>{option}</p>
                        </label> 
                    ))} 
                </div>                        
               
            </div>

                <div className="flex flex-col">
                        <label className="text-[20px]">Location</label>
                        <p className="text-red-500" id="sendElement"></p>
                        <div className="flex items-center gap-1 border border-gray-300 p-2 rounded-md mb-2"> 
                            <FaMapMarkerAlt className="text-gray-500 " />
                            <input type="text" placeholder="Enter your location" className="outline-none" onChange={(e)=>handleLocationSearch(e, document.getElementById("sendElement"))}/>
                        </div>
                            
                        <div className="mb-4 ">
                        <p className="text-[20px]">Experience Level</p>
                        <div  className="border  border-gray-200 rounded p-2 flex items-center text-gray-500">
                            <input 
                                type="text"
                                value= {level}
                                readOnly
                                className="outline-none"
                                onClick={()=>setIslevelOpen(!levelOpen)}

                            />
                            <button className="absolute left-65 top-1/2 -translate-y-5" tabIndex={-1} onClick={()=>setIslevelOpen(!levelOpen)}>
                            {/* {
                                levelOpen ? <IoIosArrowUp /> : <IoIosArrowDown  />
                            } */}
                                
                            </button>
                        </div>

                        
                        {
                            levelOpen && (
                                <ul className=" w-full bg-white border border-gray-200 rounded-md mt-1">
                                    {levels.map((level, index) => (
                                        <li
                                            key={index}
                                            className="p-2 hover:bg-gray-200 cursor-pointer"
                                            onClick={(e) => {setLevel(level); setIslevelOpen(false); handleExperienceSearch(e)}}
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
