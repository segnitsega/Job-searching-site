import { create } from "zustand";


export const useJobForm = create((set)=>({
    form1:{
        title:"",
        type:"",
        salary:"",
        description:""
    },
    form2:{
        company:"",
        location:"",
        experienceLevel:"",
        currency:"",
    },
    setForm1: (values) => set((state)=>({
        form1:{
            ...state.form1,
            ...values 
        }

    })),
    setForm2: (values) => set((state)=>({
        form2:{
            ...state.form2,
            ...values
        }
        
    }))
}))

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