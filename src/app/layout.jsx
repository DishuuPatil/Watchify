import Providers from './Providers'
import Header from './components/Header'
import './globals.css'
//import { Inter } from 'next/font/google'



export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <Providers>
          {/* Header*/}
          <Header/>
          
          {/* Navbar */}
          {/* SearchBox */}

          {children}
        </Providers>
        </body>
    </html>
  )
}
