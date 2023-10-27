import React from 'react'

{/*This page is for loading effect when user will load the page, 
when user change the page or navigate to another page 
Nextjs 13 automatically understands that there is wait and client/user is waiting for the result
for that we are not only using loading by just writing down "loading", we are going to use "loading spinner". */}
export default function loading() {
  return (
    <div className="flex justify-center">
        <img className="h-26" src="Spinner.svg" alt="loading..." />
    </div>
  )
}
