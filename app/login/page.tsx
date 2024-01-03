'use client'
import Input, { PasswordInput } from '@/components/Input'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {

    const router = useRouter()

    const submitHandler = (e: React.FormEvent<HTMLButtonElement>) => {

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
            <div className="w-1/2 h-full bg-white scroll">
                <div className="w-full flex flex-col items-center py-[5rem] justify-center gap-[3rem] ">




                    {/* LOGO MARK */}
                    <div className='w-[10%]' >
                        <Image
                            src={require('../../assets/images/logoandtext.png')}
                            alt='hometown-admin.com'
                            style={{
                                width: "100%",
                            }}
                        />
                    </div>



                    {/* FORM */}
                    <div className='w-[70%] 2xl:w-[80%] max-w-[592px] mx-auto shadow-md p-[40px] 2xl:p-[60px] rounded ' >

                        <h2 className='text-lg 2xl:text-2xl font-medium text-head' >Login to your account</h2>
                        <p className='text-xs 2xl:text-sm my-[1.4rem] font-normal text-input' >Enter your email address and password to continue</p>
                        <form className='flex flex-col gap-4 2xl:gap-8' >
                            <Input label="Email" type='email' placeholder='Please enter your email' />
                            <PasswordInput label="Password" placeholder='Please enter your email' />
                            <button type='submit' onClick={submitHandler} className="buttons">Log in</button>
                        </form>

                        <p className='mt-[2rem] text-xs 2xl:text-sm text-80% font-medium'>Trouble signing in?  <span className='text-primary1 cursor-pointer hover:underline '>contact support</span></p>
                    </div>

                </div>
            </div>
        </main>
    )
}
