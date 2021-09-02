import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    imageContainer: {
        margin: "1.25vw",
        paddingBottom: "1vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        backgroundColor: "white",
        boxShadow: "0px 2px 2px lightGray",
        transition: "0.25s",
        "&:hover": {
            boxShadow: "1px 4px 6px lightGray",
        },
    },
    image: {
        maxWidth: "100%",
        height: "auto",
        position: "relative",
        display: "block",
    },
    info: {
        margin: "calc(5px + 1vw)",
    },
    name: {
        color: "#3f4047",
        fontSize: "calc(18px + .6vw)",
        fontFamily: "barlow",
        marginBottom: "1.5vh",
        fontWeight: "500",
        textAlign: "left",
        textDecoration: "none",
    },
    description: {
        color: "#3f4047",
        fontSize: "calc(12px + .25vw)",
        margin: "0",
        fontFamily: "barlow",
        fontWeight: "400",
        textAlign: "left",
        textDecoration: "none",
    },
});

export default function ProjectCard(props) {
    const classes = useStyles();
    const { project, name, description } = props;

    return (
        <div className={classes.imageContainer}>
            <Link to={`projects/${project}`} style={{ textDecoration: "none" }}>
                <img
                    src={`static/projects/${project}/cover.png`}
                    alt="project"
                    className={classes.image}
                />
                <div className={classes.info}>
                    <div className={classes.name}>{name}</div>
                    <p className={classes.description}>{description}</p>
                </div>
            </Link>
        </div>
    );
}
