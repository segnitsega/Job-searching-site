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
        company: yup.string().required("Please enter company name"),
        location: yup.string().required("Please enter company location"),
        experience: yup.string().required("Please enter experience level"),
        currency: yup.string().required("please enter currency")
        
    })

  return (
        <Formik 
            initialValues={form2}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {()=>(
                <Form className='flex flex-col w-fit border border-gray-300 p-4 rounded-lg shadow gap-2'>
                    <label>Company</label>
                    <Field name='company' placeholder="Bloomberg" className='outline-none p-1 border border-gray-400 rounded-md'/>
                    <ErrorMessage name='company' component='span' className='text-red-500'/>

                    <label>Location</label>
                    <Field name='location' placeholder='London' className='outline-none p-1 border border-gray-400 rounded-md'/>
                    <ErrorMessage name='location' component='span' className='text-red-500'/>

                    <label>Experience</label>
                    <Field name='experience' placeholder='Intermediate' className='outline-none p-1 border border-gray-400 rounded-md'/>
                    <ErrorMessage name='experience' component='span' className='text-red-500'/>

                    <label>Currency</label>
                    <Field name='currency' placeholder='USD' className='outline-none p-1 border border-gray-400 rounded-md'/>
                    <ErrorMessage name='currency' component='span' className='text-red-500'/>

                    <button type='submit'  className='outline-none p-1 rounded-md bg-blue-500 hover:bg-blue-400 text-white'>Post</button>
                    <button  className='outline-none p-1 rounded-md ' onClick={back}>Back</button>

                </Form>
            )}
            

        </Formik>
  )
}

export default Form2