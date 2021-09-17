import React from "react";
import { ThemeProvider } from "@material-ui/core";
import myTheme from "./themes/myTheme";
import TextLoop from "react-text-loop";

export default function TextCycler() {
    const items = ["Designer", "Tinkerer", "Developer", "Creator", "Photographer"];

    return (
        <ThemeProvider theme={myTheme}>
            <div>
                <TextLoop
                    children={items}
                    // duration={2500}
                    fade={true}
                    interval={3500}
                    springConfig={{ stiffness: 70, damping: 10 }}
                />
            </div>
        </ThemeProvider>
    );
}
