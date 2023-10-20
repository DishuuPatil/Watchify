import Providers from './Providers'
import Header from './components/Header'
import Navbar from './components/Navbar'
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
          <Navbar /> {/* Navbar is imported here nd in navbar file parameters will be passed to NavbarItems.(parameters are Title and url)*/}
          {/* SearchBox */}

          {children}
        </Providers>
        </body>
    </html>
  )
}
