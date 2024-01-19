'use client'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Suspense } from 'react'
import Loading from './loading'
import { Provider } from 'react-redux'
import { store } from '@/store/store'

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
      <html lang="en">
        <body className={montserrat.className}>{children}</body>
      </html>
    </Provider>
  )
}
