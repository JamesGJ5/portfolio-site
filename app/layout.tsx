import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'
import NavBar from '@/components/NavBar/NavBar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'James Graca-Jones -- Software Developer',
  description: 'Portfolio of James Graca-Jones, showcasing projects, skills, and professional experiences in software development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
