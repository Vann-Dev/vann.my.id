import type { Metadata } from 'next'
import { Jua } from 'next/font/google'
import './globals.css'
import ScrollSmooth from '@/components/scrollSmooth'
import { keywords } from '@/keywords'

const inter = Jua({
  weight: "400",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: 'Vann-Dev',
  description: 'Fullstack Developer based in Indonesia, known as Vann-Dev at GitHub and Vann at Discord. Currently living in BSD City, Tangerang, Banten, Indonesia.',
  category: 'Personal Portfolio',
  authors: [
    {
      name: 'Stevan Vincent',
      url: 'https://vann.my.id',
    }
  ],
  keywords: keywords,
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
