
import MenuItem from "./MenuItem"
import {RiHomeSmileFill} from "react-icons/ri";
import {BsInfoCircleFill} from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
        

        <div className="flex">
            <MenuItem title="HOME" address="/" Icon={RiHomeSmileFill}></MenuItem>
            <MenuItem title="ABOUT" address="/about" Icon={BsInfoCircleFill}></MenuItem>

        </div>

        <div className="flex items-center space-x-5">
          <DarkModeSwitch/>
            <Link href="/">
                <h2 className= "text-2xl">
                  <span className="font-bold bg-pink-400 py-1 px-2 rounded-lg mr-1">WATCHIFY</span>
                </h2>
            </Link>
        </div>
    </div>
  )
}
