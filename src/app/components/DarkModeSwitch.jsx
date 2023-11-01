"use client";
import React, { useEffect, useState } from "react";
import {MdLightMode} from "react-icons/md";
import {HiMoon} from "react-icons/hi";
import {useTheme} from "next-themes";
export default function DarkModeSwitch() {
    const {systemTheme, theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const currentTheme = theme==="system" ? systemTheme:theme;
    {/* if currentTheme is equal to system then use system theme otherwise use the theme that we are setting by clicking on these icons. */}
  return (
    <>
        {mounted && 
            (currentTheme==="dark"? (
              <MdLightMode 
                className="text-xl cursor-pointer hover:text-pink-500" 
                onClick={()=>setTheme("light")}
              />
              ) : (
              <HiMoon 
                className="text-xl cursor-pointer hover:text-pink-500" 
                onClick={()=>setTheme("dark")}
              />
              )
            )
        }         
    </>
  );
}
{/**when theme will be dark and we clicked on icon it will change the theme to light and Same for light theme.*/}