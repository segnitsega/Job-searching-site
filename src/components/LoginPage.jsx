import loginLogo from '../assets/loginLogo.svg'
import appleLogo from '../assets/appleLogo.svg'
import facebookLogo from '../assets/facebookLogo.svg'
import googleLogo from '../assets/googleLogo.svg'
import linkedInLogo from '../assets/linkedInLogo.svg'
import mail from '../assets/mail.svg'
import pass from '../assets/pass.svg'


const LoginPage = () => {
  return (
    <div className='flex'>
        <div className='h-screen'>
            <img src={loginLogo} alt="loginLogo" className='h-full'/>
        </div>
        <div className='ml-[100px] mt-[50px] w-[466px] h-[702.28px] flex flex-col gap-8'>
            <img src='favicon.svg' alt="" className=' w-[158px] h-[61.28px]'/>
            <h1 className='text-[36px]'>Login in to your account</h1>

            <form action="#" className='flex flex-col gap-8'>
              <div className='flex border border-gray-300 p-2 rounded-md gap-2'>
                <img src={mail} alt="" />
                <input type="email" placeholder='Email' className='outline-none'/>
              </div>

              <div className='flex border border-gray-300 p-2 rounded-md gap-2'>
                <img src={pass} alt="" />
                 <input type="password" placeholder='Password' className='outline-none'/>
              </div>
              
              <button className='bg-[#0034D1] text-white p-2 rounded-md'>Login</button>
            </form>
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
              <p>Don't have an account?</p>
              <a href="#" className='text-[#0034D1]'>Create an account</a>
            </div>

        </div>
    </div>

  )
}

export default LoginPage
