import React from 'react'
import { Formik,Form,ErrorMessage, Field } from 'formik'
import { useJobForm } from '../store/useJobForm'
import * as yup from 'yup'
import { useStepper } from '../store/useStepper'


function Form2() {

    const{back, next} = useStepper()
    const{form1,form2, setForm2} = useJobForm()
    // console.log(form1)

    const onSubmit = (values) => {
        setForm2(values)
        next()
    }
    const validationSchema = yup.object({
        company: yup.string().trim().required("Please enter company name").matches(/^[A-Za-z\s,]+$/, "Company name must not contain numbers"),
        location: yup.string().trim().required("Please enter company location").matches(/^\s*[A-Za-z\s]+(?:,\s*[A-Za-z\s]+)?\s*$/, "Invalid location format"
        ),
        experience: yup.string().trim().required("Please enter experience level").matches(/^\s*(senior|intermediate|entry|junior)\s*(level)?\s*$/i, "Enter a valid experience level"),
        currency: yup.string().required("please enter currency").transform((value)=>value.toUpperCase()).oneOf(["USD", "Euro", "INR", "GBP"], "Currency must be one of: USD, Euro, INR, GBP")
    })


  return (
        <Formik 
            initialValues={form2}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {()=>(
                <Form className='flex flex-col  border border-gray-300 p-8 rounded-lg shadow gap-2 w-[400px]'>
                    <label>Company</label>
                    <Field name='company' placeholder="Bloomberg, Google, CSEC" className='outline-none p-2 border border-gray-400 rounded-md'/>
                    <ErrorMessage name='company' component='span' className='text-red-500'/>

                    <label>Location</label>
                    <Field name='location' placeholder='City, or country' className='outline-none p-2 border border-gray-400 rounded-md'/>
                    <ErrorMessage name='location' component='span' className='text-red-500'/>

                    <label>Experience</label>
                    <Field name='experience' placeholder='Intermediate, Senior Level, Entry Level' className='outline-none p-2 border border-gray-400 rounded-md'/>
                    <ErrorMessage name='experience' component='span' className='text-red-500'/>

                    <label>Currency</label>
                    <Field name='currency' placeholder='USD, INR, GBP, Euro' className='outline-none p-2 border border-gray-400 rounded-md'/>
                    <ErrorMessage name='currency' component='span' className='text-red-500'/>

                    <button type='submit'  className='outline-none p-2 rounded-md bg-blue-500 hover:bg-blue-400 text-white'>Post</button>
                    <button  className='border border-gray-400 hover:bg-gray-200 outline-none p-2 rounded-md ' onClick={back}>Back</button>

                </Form>
            )}
            

        </Formik>
  )
}

export default Form2