'use client'
import { CloseSquare } from 'iconsax-react'
import React, { useState } from 'react'

const Prompt = ({ title, subtitle, action, action2, btn1, btn2, isOpen, setIsOpen }: { title: string, subtitle: string, action:any, action2:any, btn1:string, btn2:string, isOpen:boolean, setIsOpen: Function }) => {

    // STATE


    // FUNCTIONS
    const handleClick = () => {
        setIsOpen((prev:boolean) => prev = !prev)
    }

    return (
        <div className={isOpen === true ? 'prompt-bg-open' : 'prompt-bg-close'} >
            <div className='w-full h-full relative' >
                <div className={isOpen === true ? 'card-open' : 'card-close'} >
                    <div className='w-full h-full flex flex-col items-center relative p-8' >
                        <CloseSquare onClick={handleClick} size='28' variant='Bold' className='text-sidebarTxt absolute top-3 right-3 hovers-text' />
                        <h2 className='text-lg 2xl:text-xl text-head font-semibold'>{title}</h2>
                        <p className='text-sm 2xl:text-base' >{subtitle}</p>
                        
                        <div className='flex items-center gap-6 mt-6' >
                            <button onClick={action} className='text-sm 2xl:text-base text-white bg-error rounded-lg px-8 py-3 hover:opacity-80 active:opacity-100 transition duration-200' >{ btn1 }</button>
                            <button onClick={action2} className='text-sm 2xl:text-base text-susccess border-success border rounded-lg px-8 py-3 hover:bg-success hover:text-white  active:opacity-80 transition duration-200' >{ btn2 }</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prompt