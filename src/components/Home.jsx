
import NavBar from './NavBar'
import SearchBar from './SearchBar'
import Feed from './Feed'
import SavedJobs from './SavedJobs'
import { useEffect, useState } from 'react'
import Filter from './Filter'
import Pagination from './Pagination'



function Home() {
  const [jobsList, setjobsList] = useState([])
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const apiUrl = `https://joblisting-rd8f.onrender.com/api/jobs?company=&search=&location=&page=1&limit=50`

  // Sending request to the api
  useEffect(()=>{
    const fetchData = async()=>{
      try{    
          const response = await fetch(apiUrl)
          if(!response.ok) throw new Error("Failed to fetch data")
          const data = await response.json()
          console.log("Your data is here ", data)
          setjobsList(data.jobs)
          setJobs(data.jobs.slice(0, 5))

      }catch(error){
        console.log(error)
    }finally{
      setLoading(false)
    }
    };
    fetchData()
  }, [])

     
if(!loading) return (

    
    <div className=''>
      <NavBar />
      <SearchBar jobs={jobs} setjobs={setJobs} jobsList={jobsList}/>

      <div className='flex justify-around'>
        
        <Filter jobs={jobs} setjobs={setJobs} jobsList={jobsList}/>       
        <Feed  jobsList={jobs} setjobsList={setJobs}/>  
        <SavedJobs jobsList={jobs} setjobsList={setJobs} />
      </div>
      <Pagination jobsList={jobsList} jobs={jobs} setJobs={setJobs}/> 
    </div>
  )
}

export default Home
