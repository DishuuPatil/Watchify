"use client";

{/*This page will be client side, because we need to use the Use effect from react*/}
import {useEffect} from "react"

{/* this {error,reset} will give us 2 things. It will catch the error, 
if an error happens and we can reset by creating the button and reset the fetching*/}

export default function Error({error, reset}) {
    useEffect(()=> {
        console.log(error)
    }, [error]);
    {/*If an error happens it will print(console.log()) for us. We need to create that message here*/}
  return (
    <div className="text-center mt-10">
        <h1>Something went wrong</h1>
        {/*if some error occurs while fetching data it will print this message */}
        <button className="hover:bg-amber-500 hover:text-white font-bold py-2 px-2 rounded-lg mr-1" onClick={()=>reset()}>Try Again</button>
        {/*when user click on Try Again button reset function will be called and it will try again to fetch the data 
        When we use "useEffect" and "onclick" we need to make the page as client side by declaring "use client" at top of it*/}
    </div>
  )
}
