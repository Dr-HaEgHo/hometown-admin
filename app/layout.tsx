'use client'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Suspense, useEffect } from 'react'
import Loading from './loading'
import { Provider } from 'react-redux'
import { persistor, store } from '@/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { useAppSelector } from '@/store/hooks'
import { useRouter } from 'next/navigation'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

// export const metadata: Metadata = {
//   title: 'Hometown | Admin login',
//   description: 'Admin dashboard for the hometown market agents',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  


  
  return (


    <Provider store={store} >
      {/* <PersistGate persistor={persistor} > */}
        <html lang="en">
          <body className={montserrat.className}>{children}</body>
        </html>
      {/* </PersistGate> */}
    </Provider>
  )
}