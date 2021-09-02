import React from "react";
import { ThemeProvider } from "@material-ui/core";
import myTheme from "./themes/myTheme";
import TextLoop from "react-text-loop";

export default function TextCycler() {
    const items = ["Designer", "Tinkerer", "Developer", "Creator", "Photographer"];

    return (
        <ThemeProvider theme={myTheme}>
            <div>
                <TextLoop children={items} duration={2000} />
            </div>
        </ThemeProvider>
    );
}
