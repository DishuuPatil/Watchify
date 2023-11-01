"use client";
import React, { useState } from "react"
import { useRouter } from 'next/navigation';

export default function SearchBox() {
    const [search, setSearch] = useState("");
    {/*created to states search and setSearch. */}
    const router = useRouter();
    function handleSubmit(e) {
        e.preventDefault();
        if(!search) return;
        router.push(`/search/${search}`);
        setSearch("");
        {/*After user redirected to next page search term will be empty again.*/}
        {/*here we are redirecting to the new page with above url. which is /search{with search(piece of state)}. */}
    }
  return (
    <form onSubmit={handleSubmit} className="flex max-w-6xl mx-auto justify-between items-center px-5">
        {/*when we will submit the form it will go to handleSubmit function. 
        created input which has value of search and it has unchanged event listener(e) which is going to trigger the function 
        which is going to set the search(setSearch()) to e.target.value which is coming from the value of the input.*/}
        <input 
        value={search}
        onChange={(e) => setSearch(e.target.value)} 
        type="text" placeholder="Search Keywords..."
        className="w-full h-14 rounded-sm placeholder-color-gray-500 outline-none bg-transparent flex-1"/>
        <button disabled={!search} type="submit" className="text-amber-600 disabled:text-gray-400">Search</button>
        {/*Button will be disabled if there is nothing in search. */}
    </form>
  )
}

{/*{react hooks : eg : useState is used to store data across renders.
useEffect is used to execute side effects when that data changes.}

To save the input we need to use some react hooks. While using any hooks we need to change the component to be client side otherwise we will get error.

"handleSubmit" function is provided with e(changed value or search value)
if (!search) return; if search not present it will return,(means we cannot submit the form).
if there is something, using router(hook from nextjs 13) : useRouter and redirect to new page.

*/}