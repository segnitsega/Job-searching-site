import React from 'react'
import { Formik,Form,ErrorMessage, Field } from 'formik'
import { useJobForm } from '../store/useJobForm'
import * as yup from 'yup'
import { useStepper } from '../store/useStepper'

function Form1() {
    const{next} = useStepper()

    const{form1, setForm1} = useJobForm()
    const onSubmit = (values) => {
        setForm1(values)
        next()
    }
    const validationSchema = yup.object({
        title: yup.string().trim().required("Please enter job title").matches(/^[A-Za-z\s,]+$/, "Title must not contain numbers").min(3, 'Invalid job title'),
        type: yup.string().trim().matches(/^\s*(full[\s-]*time|part[\s-]*time)\s*$/i
, "Invalid job type").required("Please enter job type"),
        // salary: yup.number().typeError("Salary must be a number").positive("Salary must be a positive number").required("Please enter salary"),
        salary: yup.string().matches(/^[0-9,]+$/, "Salary must be a valid positive number").required("Please enter salary"),
        description: yup.string().trim().matches(/^[A-Za-z0-9\s.,!?'"()-]+$/, "Description must be a valid string").required("please enter job description").min(5, "Enter at least five descriptive letters")
        
    })

  return (
        <Formik 
            initialValues={form1}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {()=>(
                <Form className='flex flex-col  border border-gray-300 p-8 rounded-lg shadow gap-2 w-[400px]'>
                    <label>Job Title</label>
                    <Field name='title' placeholder="Software Engineer" className='outline-none p-2 border border-gray-400 rounded-md'/>
                    <ErrorMessage name='title' component='span' className='text-red-500'/>

                    <label>Job Type</label>
                    <Field name='type' placeholder='Full Time, Part Time' className='outline-none p-2 border border-gray-400 rounded-md'/>
                    <ErrorMessage name='type' component='span' className='text-red-500'/>

                    <label>Job Salary</label>
                    <Field name='salary' placeholder='1000' className='outline-none p-2 border border-gray-400 rounded-md'/>
                    <ErrorMessage name='salary' component='span' className='text-red-500'/>

                    <label>Job Description</label>
                    <Field name='description' placeholder='Job description' className='outline-none p-2 border border-gray-400 rounded-md'/>
                    <ErrorMessage name='description' component='span' className='text-red-500'/>

                    <button type='submit'  className='outline-none p-2 rounded-md bg-[#0034D1] hover:bg-blue-400 text-white'>Next</button>
                </Form>
            )}
            

        </Formik>
  )
}

export default Form1