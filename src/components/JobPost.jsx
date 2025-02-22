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
    <div className="flex flex-col justify-center items-center h-screen gap-2">
        <h1 className="text-blue-500  font-bold text-3xl">Post A Job</h1>
        <h1>Fill The Following Descriptions For The Job</h1> 
        {/* <Form1 /> */}
        {/* <Form2 /> */}
        <CurrentForm />

    </div>
  )
}

export default JobPost