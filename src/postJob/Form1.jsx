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
        title: yup.string().required("Please enter job title"),
        type: yup.string().required("Please enter job type"),
        salary: yup.string().required("Please enter salary"),
        description: yup.string().required("please enter job description")
        
    })

  return (
        <Formik 
            initialValues={form1}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {()=>(
                <Form className='flex flex-col w-fit border border-gray-300 p-4 rounded-lg shadow gap-2'>
                    <label>Job Title</label>
                    <Field name='title' placeholder="Software Engineer" className='outline-none p-1 border border-gray-400 rounded-md'/>
                    <ErrorMessage name='title' component='span' className='text-red-500'/>

                    <label>Job Type</label>
                    <Field name='type' placeholder='Full Time' className='outline-none p-1 border border-gray-400 rounded-md'/>
                    <ErrorMessage name='type' component='span' className='text-red-500'/>

                    <label>Job Salary</label>
                    <Field name='salary' placeholder='1000USD' className='outline-none p-1 border border-gray-400 rounded-md'/>
                    <ErrorMessage name='salary' component='span' className='text-red-500'/>

                    <label>Job Description</label>
                    <Field name='description' placeholder='Job description' className='outline-none p-1 border border-gray-400 rounded-md'/>
                    <ErrorMessage name='description' component='span' className='text-red-500'/>

                    <button type='submit'  className='outline-none p-1 rounded-md bg-blue-500 hover:bg-blue-400 text-white'>Next</button>
                </Form>
            )}
            

        </Formik>
  )
}

export default Form1