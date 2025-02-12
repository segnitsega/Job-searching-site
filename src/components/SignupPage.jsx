import signupLogo from '../assets/signupLogo.svg'
import nameLogo from '../assets/nameLogo.svg'
import mail from '../assets/mail.svg'
import pass from '../assets/pass.svg'
import appleLogo from '../assets/appleLogo.svg'
import facebookLogo from '../assets/facebookLogo.svg'
import googleLogo from '../assets/googleLogo.svg'
import linkedInLogo from '../assets/linkedInLogo.svg'
import { Link } from 'react-router-dom'

function SignupPage() {
  return (
    <div className='flex ml-[200px] justify-between'>
        <div className='flex flex-col w-[466px] gap-4 my-8'>
            <img src="favicon.svg" width="148px" height="51px" alt="" />
            <h1 className='text-[36px]'>Create your account</h1>
            <div className='flex gap-2 border border-gray-300 p-2 rounded-md w-full'>
                <img src={nameLogo} alt="" />
                <input type="text" placeholder='First name' className='outline-none'/>
            </div>
            <div className='flex gap-2 border border-gray-300 p-2 rounded-md w-full'>
                <img src={nameLogo} alt="" />
                <input type="text" placeholder='Last name' className='outline-none'/>
            </div>
            <div className='flex gap-2 border border-gray-300 p-2 rounded-md w-full'>
                <img src={mail} alt="" />
                <input type="email" placeholder='Email' className='outline-none'/>
            </div>
            <div className='flex gap-2 border border-gray-300 p-2 rounded-md w-full'>
                <img src={pass} alt="" />
                <input type="password" placeholder='Password' className='outline-none'/>
            </div>
            <div className='flex gap-2 border border-gray-300 p-2 rounded-md w-full'>
                <img src={pass} alt="" />
                <input type="password" placeholder='Confirm password' className='outline-none'/>
            </div>

            <button className='bg-[#0034D1] p-4 rounded-md text-[#ffff]'><Link to="/login">Create account</Link></button>


            
                        <div className='flex items-center gap-1'>
                          <div className='border-t border-gray-300 w-[220px]'></div>
                          <p>OR</p>
                          <div className='border-t border-gray-300 w-[220px]'></div>
                        </div>
                        <div className='flex justify-between'>
                          <img src={googleLogo} alt="" />
                          <img src={appleLogo} alt="" />
                          <img src={facebookLogo} alt="" />
                          <img src={linkedInLogo} alt="" />
                        </div>
            <div className='flex'>
              <p >Already have an account?</p>
              <a href="#" className='text-[#0034D1]'><Link to='/login'>Login</Link></a>
            </div>

            
        </div>
        <div className='h-screen'>
            <img src={signupLogo} alt="" className='h-full'/>
        </div>
    </div>
  )
}

export default SignupPage
