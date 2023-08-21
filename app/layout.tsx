import { Analytics } from '@vercel/analytics/react'

import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/footer'
import ThemeSwitch from '@/components/theme-switch'
import ThemeContextProvider from '@/context/theme-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Matthew Dean | Designer & Developer',
  description: 'Matthew Dean is a designer and developer with 10 years of experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"  className='!scroll-smooth'>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opactiy-90 overflow-x-hidden w-full`}>
        <div className="bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[-35rem] h-[50rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <div className='w-full overflow-hidden absolute bottom-[-3rem] left-0 h-[150rem] -z-10'>
          <div className="bg-[#dbd7fb] absolute -z-10 bottom-[-1rem] right-[-35rem] h-[50rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:right-[-33rem] lg:right-[-28rem] xl:right-[-15rem] 2xl:right-[-5rem] dark:bg-[#676394]"></div>
          <div className="bg-[#fbe2e3] absolute -z-10 bottom-[-6rem] left-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        </div>
        
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Analytics />
            <Toaster position='bottom-left'/>
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        </body>
    </html>
  )
}
