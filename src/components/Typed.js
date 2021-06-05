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
                "design products",
                "build robots",
                "integrate electronics",
                "create prototypes",
                "write software",
                "layout PCBs",
                ],
                autoStart: true,
                loop: true,
                cursor: "_",
            }}
            />
        </div>
    </ThemeProvider>
  );
}