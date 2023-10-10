import Header from './components/Header'
import './globals.css'
//import { Inter } from 'next/font/google'



export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        {/* Header*/}
        <Header/>
        
        {/* Navbar */}
        {/* SearchBox */}

        {children}</body>
    </html>
  )
}
