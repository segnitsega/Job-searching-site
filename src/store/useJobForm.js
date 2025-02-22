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
        experience:"",
        currency:"",
    },
    setForm1: (values) => set((state)=>({
        form1:{
            ...state,
            ...values 
        }

    })),
    setForm2: (values) => set((state)=>({
        form2:{
            ...state,
            ...values
        }
        
    }))
}))