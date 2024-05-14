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
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
      url: '/site.webmanifest',
    },
  ]
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
