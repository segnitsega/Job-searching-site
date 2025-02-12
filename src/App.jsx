import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import Feed from './components/Feed'
import SavedJobs from './components/SavedJobs'
import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Pagination from './components/Pagination'
import LoginPage from './components/LoginPage'

function App() {
const [searchTerm, setSearchTerm] = useState("")
const [location, setLocation] = useState("")
const [pages, setPages] = useState(1)
const [jobsList, setjobsList] = useState([])
 
const apiUrl = `https://joblisting-rd8f.onrender.com/api/jobs?company=&search=${searchTerm}&location=${location}&page=${pages}&limit=5`


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
  }, [pages, searchTerm, location])

  return (
    <div className=''>
      <NavBar />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} location={location} setLocation={setLocation}/>

      <div className='flex mx-4 mt-4 gap-4'>
        
        <Filter />       
        <Feed  jobsList={jobsList} setjobsList={setjobsList}/>  
        <SavedJobs jobsList={jobsList} setjobsList={setjobsList} />
      </div>
      <Pagination setPages={setPages} pages={pages}/>
      
       {/* <LoginPage /> */}
    </div>
  )
}

export default App
