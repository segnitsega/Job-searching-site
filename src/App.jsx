import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import Feed from './components/Feed'
import SavedJobs from './components/SavedJobs'
import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Pagination from './components/Pagination'

function App() {


let [jobsList, setjobsList] = useState([])
 
const apiUrl = "https://joblisting-rd8f.onrender.com/api/jobs?company=&search=&page=1&limit=50"

  useEffect(()=>{
    const fetchData = async()=>{
      try{
          const response = await fetch(apiUrl)
          if(!response.ok) throw new Error("Failed to fetch data")
          const data = await response.json()
          // console.log(data)
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
      <Pagination />
      
    </div>
  )
}

export default App
