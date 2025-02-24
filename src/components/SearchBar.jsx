import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';

const SearchBar = ({jobs, setjobs, jobsList}) => {
    const [toSearch, setToSearch] = useState(jobsList)
    const [store, setStore] = useState(jobs)


    console.log("jobs", jobs)
    console.log("jobsList", jobsList)
    // Search by key word, country or company
        const handleSearch = (e) => {
            let search = e.target.value.toLowerCase()
            if(search.length == 0){
                setjobs(store)
                return 
            }
            let filtered = toSearch.filter((job)=> job.title.toLowerCase().includes(search) || job.description.toLowerCase().includes(search) || job.company.toLowerCase().includes(search))
            if(filtered.length === 0){
                setjobs(store)
                return
            }
            
            setjobs(filtered) 
        }

        // Search by Location
        const handleLocationSearch = (e) => {
            let search = e.target.value.toLowerCase()
            if(search.length == 0){
                setjobs(store)
                return
            }
            let filtered = toSearch.filter((job)=>job.location.toLowerCase().includes(search))
            if(filtered.length === 0){
                setjobs(store)
                return
            }
            setjobs(filtered)
        }


  return (
    <div>
        <p className='absolute left-[400px] text-red-500' id='sendElement'></p>
        <div className='relative flex justify-center mt-8 mb-12'>
        
            <div className="flex items-center justify-center border border-gray-200 shadow-md  p-2 rounded-full w-[627px]">
                <FaSearch className="text-gray-500 " />
                <input
                    type="text"
                    placeholder="Job title, Key Words, or Company name"
                    className="flex-grow p-2 outline-none w-[200px]"
                    onChange={(e)=>handleSearch(e)}
                />
                <FaMapMarkerAlt className="text-gray-500 " />
                <input
                    type="text"
                    placeholder="Location"
                    className="flex-grow p-2 outline-none w-[80px]"
                    onChange={handleLocationSearch}
                /> 
                <button
                    className="bg-blue-700 hover:bg-blue-500 cursor-pointer text-white px-8 py-2 rounded border mr-4"
                    
                >
                    Search
                </button>
        
            </div>

        </div>
    </div>
    
  );
};

export default SearchBar;
