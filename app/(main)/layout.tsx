import '../globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import Topbar from '@/components/shared/Topbar'
import Bottombar from '@/components/shared/Bottombar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import RightSidebar from '@/components/shared/RightSidebar'
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from '@/lib/utils'

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

          <main className="flex flex-row">
            <LeftSidebar />

            <section className="flex min-h-screen flex-1 flex-col items-center px-6 pb-10 pt-24 max-md:pb-32 sm:px-10">
              <div className="w-full max-w-4xl">
                {children}
              </div>
            </section>

            <RightSidebar />
          </main>

          <Bottombar />
      </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  )
}
