import Image from 'next/image'
import React from 'react'

const NotificationCard = ({item} : {item:any}) => {
    return (
        <div className='w-full flex items-start gap-2 border-b border-border2 pb-2 pt-[6px] mb-4' >

            {/* ICON */}
            <div className='w-10 h-10 bg-dashboardBg p-2'>
                <Image
                    src={ require('../assets/icons/message.png')}
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
    )
}

export default NotificationCard