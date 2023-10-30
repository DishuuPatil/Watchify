"use client";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

export default function SearchBox() {
    const [search, setSearch] = useState("");
    const router = useRouter();
    function handleSubmit(e) {
        e.preventDefault();
        if(!search) return;
        router.push(`/search/${search}`);
    }
  return (
    <form onSubmit={handleSubmit} className="flex max-w-6xl mx-auto justify-between items-center px-5">
        <input 
        value={search}
        onChange={(e) => setSearch(e.target.value)} 
        type="text" placeholder="Search Keywords..."
        className="w-full h-14 rounded-sm placeholder-color-gray-500 outline-none bg-transparent flex-1"/>
        {/*we are using input to take text input from user and search as button. this input(search) will be stored in value, which will be passed to setSearch(). 
        onChange(if search value is changed) will get e as changed search Value from {search}, and passed it to handleSubmit() on submit.*/}
        <button disabled={!search} type="submit" className="text-amber-600 disabled:text-gray-400">Search</button>
        {/*Button will be disabled if there is nothing in search. */}
    </form>
  )
}
{/*{react hooks : eg : useState is used to store data across renders.
useEffect is used to execute side effects when that data changes.}

To save the input we need to use some react hooks. While using any hooks we need to change the component to be client side otherwise we will get error.

"handleSubmit" function is provided with e(changed value or search value)
if (!search) return; if search not present it will return,(means we cannot submit it).
if there is something, using router(hook from nextjs 13) : useRouter 


By checking the input and going to redirect a person to the different pages.

*/}