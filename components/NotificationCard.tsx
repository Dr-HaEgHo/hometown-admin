'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Modal from './Modal'

const NotificationCard = ({ item }: { item: any }) => {
    
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(true)
     }
    
    return (
        <div className='w-full cursor-pointer ' >

            <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            >
                <div className='w-full flex flex-col items-center' >
                    <Image
                        src={require('../assets/icons/noteFill.png')}
                        alt='hometown-admin.com'
                        className='w-[60px] transform -rotate-45 mb-6'
                    />
                    <h2 className='text-base font-semibold text-center mb-1' >{item?.title}</h2>           
                    <p className='text-smallHeadText text-sm text-center' >{item?.desc}</p>
                </div>
            </Modal>

            <div onClick={handleOpen} className='w-full flex items-start gap-2 border-b border-border2 pb-2 pt-[6px] px-3 2xl:px-4 mb-4 hover:bg-sidebarTxtHover active:bg-sidebarTxtActive' >
                {/* ICON */}
                <div className='w-10 h-10 bg-dashboardBg p-2'>
                    <Image
                        src={require('../assets/icons/message.png')}
                        alt='hometownadmin.com'
                        className='w-full'
                    />
                </div>
                <div className='flex flex-1 flex-col ' >
                    <h3 className='text-sm 2xl:text-base text-head font-medium my-1' >{item?.title}</h3>
                    <p className='text-xs text-head '  >{item?.desc}</p>
                    <span className='text-[10px] text-head font-normal mt-2' >{item?.time}</span>
                </div>
            </div>
        </div>
    )
}

export default NotificationCard