import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className="flex justify-center dark:bg-gray-600 bg-amber-100 lg-text-lg p-4">
        {/*This title and param is passed to the NavbarItem. and NavbarItem is imported here. */}
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top Rated" param="fetchTopRated" />

    </div>
  )
}
