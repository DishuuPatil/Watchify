import Providers from "./Providers";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";
import "./globals.css";
import next from "next"
import head from "next/head"
import react from "react"



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Watchify</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="This is movie watching website." />
        <link rel="icon" href="/favicon2.ico" />
  </head>

      <body>
        <Providers>
          {/* Header*/}
          <Header/>
          
          {/* Navbar */}
          <Navbar /> {/* Navbar is imported here and in navbar file parameters will be passed to NavbarItems.(parameters are Title and url)*/}
          {/* SearchBox */}
          <SearchBox />
          {/*SearchBox file is imported like header and navbar and provider. */}
          {children}
        </Providers>
        </body>
    </html>
  );
}
