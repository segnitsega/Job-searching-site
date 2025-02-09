import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import Feed from './components/Feed'
import SavedJobs from './components/SavedJobs'
import { useEffect, useState } from 'react'
import Filter from './components/Filter'

function App() {

//   let [jobsList, setjobsList] = useState([
//     {
//      id: 1,
//      title: "Product Design",
//      company:"Binford Ldt",
//      model:"Remote",
//      time:"Full-time",
//      isBookmarked: false,
//      salaryRange:"$200 - $1200",
//      description: "Design intuitive and visually appealing user interfaces for web and mobile applications. Conduct user research and create wireframes, prototypes, and mockups to improve user experience. Work closely with developers to implement designs."
//     },
//     {
//      id: 2,
//      title: "Frontend Developer",
//      company:"Addis Software",
//      model:"Onsite",
//      time:"Full-time",
//      isBookmarked: true,
//      salaryRange:"$200 - $1200",
//      description: "Design intuitive and visually appealing user interfaces for web and mobile applications. Conduct user research and create wireframes, prototypes, and mockups to improve user experience. Work closely with developers to implement designs."
    
//     },
//     {
//      id: 3,
//      title: "Javascript Developer",
//      company:"iCog Labs",
//      model:"Remote",
//      time:"Full-time",
//      isBookmarked: false,
//      salaryRange:"$200 - $1200",
//      description: "Design intuitive and visually appealing user interfaces for web and mobile applications. Conduct user research and create wireframes, prototypes, and mockups to improve user experience. Work closely with developers to implement designs."
    
//     },
//  ])

let [jobsList, setjobsList] = useState([])
 
const apiUrl = "https://joblisting-rd8f.onrender.com/api/jobs?company=&search=&page=1&limit=50"

  useEffect(()=>{
    const fetchData = async()=>{
      try{
          const response = await fetch(apiUrl)
          if(!response.ok) throw new Error("Failed to fetch data")
          const data = await response.json()
          console.log(data)
          setjobsList(data.jobs)
      }catch(error){
        console.log(error)
    }
    };
    fetchData()
  }, [])

  return (
    <div className=''>
      <NavBar />
      <SearchBar />

      <div className='flex mx-4 mt-4 gap-4'>
        
        <Filter />       
        <Feed  jobsList={jobsList} setjobsList={setjobsList}/>  
        <SavedJobs jobsList={jobsList} setjobsList={setjobsList} />
      </div>
      
      
    </div>
  )
}

export default App
