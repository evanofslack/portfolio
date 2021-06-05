import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Particles from 'react-particles-js'
import ParticleConfig from './config/ParticleConfig'

const useStyles = makeStyles((theme) => ({
    canvas: {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        zIndex: "-1",
        background: "white",
    },    
}))

export default function ParticleBackground() {
    const classes = useStyles();
  
    return (
        <div>
            <div >
                <Particles canvasClassName={classes.canvas} height="100vh" width="100vw" params={ParticleConfig}>
                </Particles>
            </div>
           
        </div>
        
    );
}