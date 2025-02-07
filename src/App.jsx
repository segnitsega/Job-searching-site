import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import Feed from './components/Feed'
import SavedJobs from './components/SavedJobs'
import { useState } from 'react'

function App() {

  let [jobsList, setjobsList] = useState([
    {
     id: 1,
     title: "Product Design",
     company:"Binford Ldt",
     model:"Remote",
     time:"Full-time",
     isBookmarked: false,
     salaryRange:"$200 - $1200",
     description: "Design intuitive and visually appealing user interfaces for web and mobile applications. Conduct user research and create wireframes, prototypes, and mockups to improve user experience. Work closely with developers to implement designs."
    },
    {
     id: 2,
     title: "Frontend Developer",
     company:"Addis Software",
     model:"Onsite",
     time:"Full-time",
     isBookmarked: true,
     salaryRange:"$200 - $1200",
     description: "Design intuitive and visually appealing user interfaces for web and mobile applications. Conduct user research and create wireframes, prototypes, and mockups to improve user experience. Work closely with developers to implement designs."
    
    },
    {
     id: 3,
     title: "Javascript Developer",
     company:"iCog Labs",
     model:"Remote",
     time:"Full-time",
     isBookmarked: false,
     salaryRange:"$200 - $1200",
     description: "Design intuitive and visually appealing user interfaces for web and mobile applications. Conduct user research and create wireframes, prototypes, and mockups to improve user experience. Work closely with developers to implement designs."
    
    },
 ])
 

  return (
    <div className=''>
      <NavBar />
      <SearchBar />

      <div className='flex mt-4 gap-4'>
        <div className='w-[361px] bg-sky-500'>
          filter
        </div>
        
        <Feed  jobsList={jobsList} setjobsList={setjobsList}/>  
        <SavedJobs jobsList={jobsList} setjobsList={setjobsList} />
      </div>
      
      
    </div>
  )
}

export default App
