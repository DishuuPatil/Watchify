"use client";

import Link from "next/link";

import {useSearchParams} from "next/navigation";

export default function NavbarItem({title , param}) 
{   
    const searchParams = useSearchParams(); {/*we cannot use this component to server side to need to add this client at the top, "use client"*/}
    const genre = searchParams.get("genre");
    return (
    <div>
        <Link 
        className={`m-4 hover:text-pink-600 font-semibold p-2 ${
            genre && genre === param && "underline underline-offset-8 decoration-4 decoration-pink-500 rounded-lg"
        }`}
        href={`/?genre=${param}`}>
            {title}
        </Link>
    </div>
  );
}

{/*for dynamic styling we need to add `(backtick) while defining class names
and inside the dynamic section we added dollar sign and curly braces and added the conditions like if genre=== param(topTrending / topRated)*/}