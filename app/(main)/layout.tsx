import '../globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import Bottombar from '@/components/shared/Bottombar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import RightSidebar from '@/components/shared/RightSidebar'
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from '@/lib/utils'
import Topbar from '@/components/shared/Topbar'

const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Minglee',
  description: 'A complete social media web application.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(font.className, "bg-white dark:bg-[#000000]")}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey='minglee-theme'>
            <Topbar />
            <div className='mx-auto max-h-screen overflow-hidden'>
              <main className="grid grid-cols-9">
                <LeftSidebar />
                <section className="xl:col-span-5 pt-24 pb-24 xl:pb-10 col-span-7 max-md:col-span-9 p-4 max-h-screen overflow-y-scroll">
                  {children}
                </section>
                <RightSidebar />
              </main>
            </div>
            <Bottombar />

          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}