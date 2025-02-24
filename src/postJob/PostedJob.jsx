import { useJobForm } from "../store/useJobForm"
import { Link } from "react-router-dom"
import { useStepper } from "../store/useStepper"

function PostedJob() {
  const {back} = useStepper()
    const {form1, form2, setForm1, setForm2} = useJobForm()
  return (
    <div className="flex flex-col w-[400px] border border-gray-300 p-8 rounded-lg shadow gap-4">
        <h1 className='text-2xl'>Job Details</h1>
        <h2 >Job Title: {form1.title}</h2>
        <h2>Job Type: {form1.type}</h2>
        <h2>Salary: {form1.salary}</h2>
        <h2>Company: {form2.company}</h2>
        <h2>Location: {form2.location}</h2>
        <h2>Experince Level: {form2.experience}</h2>
        <h2>Currency: {form2.currency}</h2>
        <h2>Description: {form1.description}</h2>
        <button className='border border-gray-400 hover:bg-gray-200 outline-none p-2 rounded-md ' onClick={back}>back</button>
        <button className='border border-gray-400 bg-[#0034D1] hover:bg-[#0034d194] outline-none p-2 rounded-md'><Link to="/">Home</Link></button>
    </div>
  )
}

export default PostedJob