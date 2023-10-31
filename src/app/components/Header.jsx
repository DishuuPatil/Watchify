import React from 'react'
import MenuItem from './MenuItem'
import {RiHomeSmileFill} from "react-icons/ri";
import {BsInfoCircleFill} from "react-icons/bs";
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
        {/*this div is for full Header*/
        /*  flex is to make it horizontally aline(HOME and ABOUT with WATCHIFY), justify-between to some space between them, mx-2 to add margin at X-axis, max-w-6xl : maximum width to 6xl, sm:mx-auto : auto margin along x axis for smaller screen, items-center to make it vertically center in Header, py-6 for padding along y-axis */}

        <div className="flex">{/*This div is for Menu*/
                              /* flex class is to aside the MenuItems in horizontal way */}

        {/*Import MenuItem file and passed the data for "title", "address", "Icon"*/
        /*To add the Icon import it and pass it as Icon to MenuItem*/
        /*add one MenuItem for HOME, one for ABOUT*/}
            <MenuItem title="HOME" address="/" Icon={RiHomeSmileFill}></MenuItem>
            <MenuItem title="ABOUT" address="/about" Icon={BsInfoCircleFill}></MenuItem>

        </div>

        <div className="flex items-center space-x-5">{/*This div is for LOGO*/}
          <DarkModeSwitch/>
            <Link href="/">
                <h2 className= "text-2xl">
                  <span className="font-bold bg-pink-400 py-1 px-2 rounded-lg mr-1">WATCHIFY</span>
                </h2>
                {/* text-2xl for larger size.  font-bold for bold text, bg-amber-500 is background color py-1 is padding at Y-axis and px-2 is padding at X-axis, rounded-lg is to make curves rounded and mr-1 is for margin at right*/}
            </Link>
        </div>
    </div>
  )
}
