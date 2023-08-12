import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Providers } from './redux/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
        <body className={`${inter.className} container`}>
          <Providers>
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </Providers>
        </body>
    </html>
  )
}