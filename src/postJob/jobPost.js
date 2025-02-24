import { useJobForm } from "../store/useJobForm"

const apiUrl = `https://joblisting-3hjv.onrender.com/api/jobs`

// const check = {
//     title:"Check Post",
//     type:"Full-time", // only works if t is small 
//     salary: "72000",
//     description: "Develop and maintain web applications.",
//     company: "Google",
//     location:"San Francisco, USA",
//     experienceLevel:"Mid Level",
//     currency:"USD",
// }

//     const form30 = {
//         title: "Software Engineer",
//         type: "Full-time",
//         salary: "95000",
//         description: "Develop and maintain web applications.",
//         company: "Turing",
//         // "logo": "https://logo.clearbit.com/google.com",
//         // "isBookMarked": true,
//         location: "San Francisco, USA",
//         experienceLevel: "Mid Level",
//         currency: "USD"
//       }

const post = async(form1, form2) => {
    const form3 = {
        ...form1, 
        ...form2
      }
      console.log(form3)

    try{
        const response = await fetch(apiUrl,{
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(form3)
        })
        if(!response.ok){
            const errorResponse = await response.text()
            throw new Error(`Failed to send data: ${errorResponse}`)
        }
        
        const data = await response.json()
        console.log("Response from server",data)

    }catch(error){
        console.log(error)
    }
    
}

export default post

