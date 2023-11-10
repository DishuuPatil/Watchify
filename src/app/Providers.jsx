"use client";

import { ThemeProvider } from "next-themes";

export default function Providers({children}) {
  return(
   <ThemeProvider enableSystem={true} attribute="class">
    <div className="dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen select-none">
        {children}
    </div>
    </ThemeProvider>
  );
}

{/* enableSystem={true} - the theme we are using on browser or selected theme this themeProvider will use that theme.
        AND "class" is used to add darkMode. use this class only for the dark mode. and add this class to tailwindCss file.*/}
