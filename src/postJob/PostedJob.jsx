import { useJobForm } from "../store/useJobForm"

function PostedJob() {
    const {form1, form2, setForm1, setForm2} = useJobForm()
  return (
    <div className="flex flex-col w-fit border border-gray-300 p-4 rounded-lg shadow gap-2">
        <h1 className='text-2xl'>Job Details</h1>
        <h2>Job Title: {form1.title}</h2>
        <h2>Job Type: {form1.type}</h2>
        <h2>Salary: {form1.salary}</h2>
        <h2>Company: {form2.company}</h2>
        <h2>Location: {form2.location}</h2>
        <h2>Experince Level: {form2.experience}</h2>
        <h2>Currency: {form2.currency}</h2>
        <h2>Description: {form1.description}</h2>
         
    </div>
  )
}

export default PostedJob