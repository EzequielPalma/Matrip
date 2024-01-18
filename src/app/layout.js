import { Inter } from 'next/font/google'
import './globals.css'
import ScrollToTopButton from './components/ScrollToTopButton'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Matrip',
  description: 'La mejor guía para disfrutar Madrid',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar/>
        </header>
        {children}
      </body>
    </html>
  )
}
