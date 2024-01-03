import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    
  return (
      <div className='w-full h-screen flex items-start bg-dashboardBg ' >
          
          <div className="flex flex-1 h-full"> 
              <Sidebar/>
          </div>
          <div className="flex flex-[4] h-full flex-col">
              
              {/* NAVBAR COMPONENT */}
              <div className='w-full border-primary1 border-t-4 bg-white' >
                  <Navbar/>
              </div>

              {/* EACH PAGE ROUTED TO FROM THE FILE STRUCTURE */}
              <div className='h-full w-full scroll-2' >
                  {children}
              </div>
          </div>
          
    </div>
  )
}

export default layout;