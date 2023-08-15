import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './component/Header'
import Footer from './component/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next first page',
  description: 'anand swami',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  )
}
