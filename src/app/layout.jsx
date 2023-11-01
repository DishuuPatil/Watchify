
import Head from "next/head";
import Providers from "./Providers"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import SearchBox from "./components/SearchBox"
import "./globals.css"
import next from "next"



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Watchify</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="This is movie watching website." />
        <link rel="icon" href="/favicon2.ico" />
      </Head>

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
