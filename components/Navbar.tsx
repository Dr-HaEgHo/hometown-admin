'use client'
import { Notification } from 'iconsax-react'
import Image from 'next/image'
import { useParams, usePathname } from 'next/navigation'
import React, { useState } from 'react'

const Navbar = () => {

    const [isNotification, setIsNotifications] = useState(true)
    const location = usePathname();
    const params = useParams();

  return (
      <div className='w-full bg-white py-4' >
          <div className="dash-container">
              <div className="w-full flex items-center justify-between">
                  
                   
                  {/* LEFT */}
                  <div className='flex flex-col items-start' >
                      <p className='text-smallHeadTxt text-xs 2xl:text-sm ' >Overview</p>
                      <h2 className='text-bigHeadTxt font-semibold text-sm 2xl:text-base '>
                          {location === "/dashboard" && 'Analytics'}
                          {location === "/dashboard/incubatees" && 'Incubatees'}
                          {location === "/dashboard/incubatees/new-incubatee" && 'Add Incubatee'}
                          {location === `/dashboard/incubatees/${params?.id}` && 'Incubatee Details'}
                          {location === "/dashboard/users" && 'Users'}
                          {location === `/dashboard/users/${params?.id}` && 'User Details'}
                      </h2>
                  </div>

                  {/* RIGHT */}
                  <div className='flex items-center gap-3'>
                      {/* Icon */}
                      <button className='transition duration-200 w-[40px] h-[40px] rounded-[6px] bg-noteIconBtn hover:bg-sidebarTxtHover active:bg-sidebarTxtActive flex items-center justify-center relative'>
                          <Notification />
                          { isNotification && <div className='absolute w-2 h-2 rounded-full top-[6px] right-[12px] bg-error' /> }
                      </button>
                      <button className='w-[36px] h-[36px] rounded-full bg-noteIconBtn overflow-hidden '>
                          <Image
                              src={require('../assets/images/Avatar.png')}
                              alt="hometownadmin.com"
                          />
                      </button>

                  </div>
                  

              </div>
         </div>
    </div>
  )
}

export default Navbar