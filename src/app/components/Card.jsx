import Image from "next/image";
import Link from "next/link";
import React from "react";
import {FaRegThumbsUp} from "react-icons/fa";


export default function Card({result}) {
  return (
    <div div className="cursor-pointer sm:p-3
     sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border
      sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
        <Link href={`/movie/${result.id}`}>
            <Image src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path
          }`}
            width={500} height={300}
            className="sm:rounded-t-lg 
            group-hover:opacity-80 transition-opacity duration-200"
            style={
                {
                    maxWidth : "100%",
                    height: "auto",
                }
            }
            placeholder="blur" blurDataURL="/Spinner.svg" 
            alt="Image is not available"></Image>
            {/*Let's have div for other part like adding title, 2 line description and reduce the image size so that description can be added.*/}
            <div className="p-2">
                <p className="line-clamp-2 text-md">{result.overview}</p>
                <h2 className="truncate text-lg font-bold">{result.title || result.name}</h2>
                <p className="flex items-center">
                    {result.release_date || result.first_air_date}
                    <FaRegThumbsUp className="h-5 mr-1 ml-3"/> {result.vote_count}
                </p>
            </div>
            {/*In Tailwind css has one way called as "truncate". truncate will limit the overview text in one line.
            But for two lines we need to install "line clamp" from tailwind css: 
            :A plugin that provides utilities for visually truncating text after a fixed number of lines.
            To install it "npm install -D @tailwindcss/line-clamp" run this here in terminal And add plugins to tailwind.config.js.*/}
        </Link>
    </div>
  );
}



{/*Image src="" is the link to fetch images from tmdb.*/}
{/*when we add style in react we need to add 2 curly braces.
And in style we declare maximum width as 100% and height of image is auto so that when we add description or overview it will be adjustable*/}
{/* above classes are for image manipulation on webpage. its height width, border,hover effects, transition effect and opacity.*/}
{/*This blurDataURL is using spinner which will add loading effect when images are loading or before loading images. and alternative message if image is not available*/}
{/*This classes are used for multiple purpose. Like when cursor goes on image it should be pointer. padding effect,shadow effect when hover on image,border effect, transition effect for shadow, shadow color,duration. */}
