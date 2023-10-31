import Link from 'next/link'
import React from 'react'

{/*Here we will get title , address and Icon from Header.jsx and show it here*/}

export default function MenuItem({title, address, Icon}) {
  return (
    <div>
        {/*Put them inside Link tag, this wil go ti that webside to that Url*/}
        <Link href={address} className="mx-4 lg:mx-6 hover:text-pink-600">
                    {/*mx-4 will add some margin to x-axis, lg:mx-6 will only visible on large screen which is greater than or equal to mx-6 and hover will change color*/ 
                    /*****this address is url which will get open when we will hit title*****/}
        <Icon className="text-2xl sm:hidden mx-4"/>
                    {/* text-2xl will make icon larger to 1.5rem or 24px and sm:hidden will hide the icon for larger screen it will only visible on smaller screen mx-4 to have some margin between icons along X-axis*/}
            <p className="hidden sm:inline my-2 text-sm">{title}</p>
                    {/* hidden to hide text HOME for smaller screen, sm:inline will make menu inline for larger screen, my-2 will add some margin to Y-axis and text-sm will make text smaller to 14px */}
                    {/*this will make title as link(which is passed from Header as "HOME")*/}
        </Link>
    </div>
  )
}
