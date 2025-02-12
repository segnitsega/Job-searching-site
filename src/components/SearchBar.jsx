import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';

const SearchBar = ({searchTerm, setSearchTerm, location, setLocation}) => {
    // const handleSearch = () => {

    // }
  return (
    <div className='flex justify-center mt-8'>
        <div className="flex items-center justify-center border shadow-lg border-none p-2 rounded-full w-[627px]">
            <FaSearch className="text-gray-500" />
            <input
                type="text"
                placeholder="Job title, Key Words, or Company name"
                className="flex-grow p-2 outline-none w-[200px]"
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
            />
            <FaMapMarkerAlt className="text-gray-500 " />
            <input
                type="text"
                placeholder="Location"
                className="flex-grow p-2 outline-none w-[80px]"
                value={location}
                onChange={(e)=>setLocation(e.target.value)}
            /> 
            <button
                className="bg-blue-700 text-white px-8 py-2 rounded border mr-4"
                
            >
                Search
            </button>
    
        </div>

    </div>
  );
};

export default SearchBar;
