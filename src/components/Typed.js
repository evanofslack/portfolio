import React from "react";
import { ThemeProvider } from '@material-ui/core'
import myTheme from './themes/myTheme'
import Typewriter from "typewriter-effect";


export default function Typed() {
  return (
    <ThemeProvider theme={myTheme}> 
        <div>
            <Typewriter
            options={{
                strings: [
                "Designer",
                "Tinkerer",
                "Coder",
                "Developer",
                "Contributor",
                "Photographer",
                ],
                autoStart: true,
                loop: true,
                delay: 85,
                pauseFor: 1500,
                cursor: "_",
            }}
            />
        </div>
    </ThemeProvider>
  );
}


/*

"design products",
"build robots",
"integrate electronics",
"create prototypes",
"write software",
"layout PCBs",              

*/