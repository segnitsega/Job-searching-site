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
    <div className="flex flex-col justify-center items-center h-screen gap-8 my-8">
        <h1 className="text-blue-500  text-8xl">Post A Job</h1>
        <h1 className="text-blue-500 text-2xl">Fill The Following Descriptions For The Job</h1> 
        {/* <Form1 /> */}
        {/* <Form2 /> */}
        <CurrentForm />

    </div>
  )
  // bg-[url('path_to_image.jpg')]
}

export default JobPost


// style={{
//   backgroundImage: `url(${loginLogo})`,
//   backgroundSize: 'cover', // Ensures it covers the whole area
//   backgroundPosition: 'center', // Centers the image
// }}