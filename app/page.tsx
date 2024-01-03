'use client'
import Input, { PasswordInput } from '@/components/Input'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {

  const router = useRouter()

  const submitHandler = (e: React.FormEvent) => {

    router.push('/dashboard')
    e.preventDefault();
  }

  return (
    <main className="w-full h-screen bg-primary flex items-center ">
      <div className="w-1/2 h-full bg-primary1 overflow-hidden login-bg">
        {/* <Image
          src={require('../assets/images/login.png') }        
          alt='hometown-admin.com'
          style={{
            width: "100%",
            
          }}
        /> */}
      </div>
      <div className="w-1/2 h-full bg-white">
        <div className="w-full h-full flex flex-col items-center justify-center gap-[1rem] ">




          {/* LOGO MARK */}
          <div className='w-[8%]' >
            <Image
              src={require('../assets/images/logoandtext.png')}
              alt='hometown-admin.com'
              style={{
                width: "100%",
              }}
            />
          </div>



          {/* FORM */}
          <div className='w-[80%] max-w-[542px] mx-auto shadow-lg p-[40px] 2xl:p-[60px] rounded ' >

            <h2 className='text-lg 2xl:text-2xl font-semibold text-head' >Login to your account</h2>
            <p className='text-xs 2xl:text-sm my-[1rem] font-normal text-input' >Enter your email address and password to continue</p>
            <form className='flex flex-col gap-4' >
              <Input type='email' label="Email" placeholder='Please enter your email' />
              <PasswordInput label="Password" placeholder='Please enter your email' />
              <button type='submit' onClick={submitHandler} className="buttons">Log in</button>
            </form>

            <p className='mt-[1rem] text-xs 2xl:text-sm text-80% font-semibold'>Trouble signing in?  <span className='text-primary1 cursor-pointer hover:underline '>contact support</span></p>
          </div>

        </div>
      </div>
    </main>
  )
}
