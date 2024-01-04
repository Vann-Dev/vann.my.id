import type { Metadata } from 'next'
import { Jua } from 'next/font/google'
import './globals.css'
import ScrollSmooth from '@/components/scrollSmooth'

const inter = Jua({
  weight: "400",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: 'Vann-Dev',
  description: 'Personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='bg-background'>
          <ScrollSmooth>
            {children}
          </ScrollSmooth>
        </main>
      </body>
    </html>
  )
}
