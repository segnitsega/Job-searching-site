import jobsList from "../constants/jobsList"
import Job from './Job';

function Feed() {
  return (
    <div>
        {
            jobsList.map((job)=>(
                 <Job key={job.id} title={job.title} company={job.company} model={job.model} time={job.time} salary={job.salaryRange} description={job.description}/>
            )               
            )
        }
        
    </div>
  )
}

export default Feed
