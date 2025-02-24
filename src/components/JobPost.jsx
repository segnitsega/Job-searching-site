import Form1 from "../postJob/Form1"
import Form2 from "../postJob/Form2"
import { useStepper } from "../store/useStepper"
import PostedJob from "../postJob/PostedJob"


function JobPost() {

    const {step, back, next} = useStepper()
    // console.log(step)
    const jobForm = [
        Form1,
        Form2,
        PostedJob
    ]

    const CurrentForm = jobForm[step]
  return (
    <div className="flex flex-col mt-16 mb-8 justify-center items-center h-screen gap-8 my-8">
        <h1 className="text-[#0034D1] text-8xl">Post A Job</h1>
        <h1 className="text-[#0034D1] text-2xl">Fill The Following Descriptions For The Job</h1> 
        {/* <Form1 /> */}
        {/* <Form2 /> */}
        <CurrentForm />
        {/* <button className='outline-none p-2 rounded-md bg-[#0034D1] hover:bg-blue-400 text-white'>Home</button> */}

    </div>
  )
  
}

export default JobPost


