import React from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
    // Gross CSS ahead, beware
    title: {
        fontSize: "calc(12px + 1.4vw)",
        color: "#0a1338",
        paddingTop: "10vh",
        paddingBottom: "2vh",
        paddingLeft: "3vw",
        fontFamily: "manrope",
        fontWeight: "600",
        letterSpacing: "-.12rem",
    },
    container: {
        display: "grid",
        gridTemplateColumns: "1fr 12fr",
        gridTemplateRows: "auto",
        gridTemplateAreas: `
        "labelName inputName"
        ". alertName"
        "labelEmail  inputEmail"
        ". alertEmail"
        "labelMessage inputMessage"
        ". alertMessage"
        ". submit"
        `,
    },
    inputName: {
        gridArea: "inputName",
        alignSelf: "center",
        width: "80%",
        maxWidth: "170px",
        padding: "8px 8px",
        marginTop: "5px",
        marginBottom: "5px",
        marginLeft: "7px",
        boxSizing: "border-box",
        fontFamily: "mada",
        fontSize: "calc(10px + .6vw)",
        borderStyle: "solid",
        borderColor: "grey",
        border: "1.5px",
        borderRadius: "3px",
        resize: "none",
        outline: "none",
        webkitTransition: "0.5s",
        transition: "0.5s",
    },
    inputEmail: {
        alignSelf: "center",
        gridArea: "inputEmail",
        width: "80%",
        maxWidth: "250px",
        padding: "8px 8px",
        marginTop: "5px",
        marginBottom: "5px",
        marginLeft: "7px",
        boxSizing: "border-box",
        fontFamily: "mada",
        fontSize: "calc(10px + .6vw)",
        borderStyle: "solid",
        borderColor: "grey",
        border: "1.5px",
        borderRadius: "3px",
        resize: "none",
        outline: "none",
        webkitTransition: "0.5s",
        transition: "0.5s",
    },
    inputMessage: {
        gridArea: "inputMessage",
        width: "80%",
        maxWidth: "450px",
        fontFamily: "mada",
        fontSize: "calc(10px + .6vw)",
        height: "10em",
        padding: "8px 8px",
        marginTop: "5px",
        marginBottom: "5px",
        marginLeft: "7px",
        boxSizing: "border-box",
        borderStyle: "solid",
        borderColor: "grey",
        border: "1.5px",
        borderRadius: "3px",
        resize: "none",
        outline: "none",
        webkitTransition: "0.5s",
        transition: "0.5s",
    },
    labelName: {
        textAlign: "left",
        fontFamily: "mada",
        fontSize: "calc(10px + .6vw)",
        fontWeight: "400",
        justifySelf: "right",
        alignSelf: "center",
        gridArea: "labelName",
    },
    labelEmail: {
        textAlign: "left",
        fontSize: "calc(10px + .6vw)",
        fontFamily: "mada",
        fontWeight: "400",
        justifySelf: "right",
        alignSelf: "center",
        gridArea: "labelEmail",
    },
    labelMessage: {
        textAlign: "left",
        fontFamily: "mada",
        fontSize: "calc(10px + .6vw)",
        fontWeight: "400",
        justifySelf: "right",
        alignSelf: "center",
        gridArea: "labelMessage",
    },
    alertName: {
        gridArea: "alertName",
        fontSize: "calc(8px + .4vw)",
        color: "#b50000",
        justifySelf: "left",
        alignSelf: "center",
        fontFamily: "public-sans, sans-serif",
        fontWeight: "400",
    },
    alertEmail: {
        gridArea: "alertEmail",
        fontSize: "calc(8px + .4vw)",
        color: "#b50000",
        justifySelf: "left",
        alignSelf: "center",
        fontFamily: "mada",
        fontWeight: "400",
    },
    alertMessage: {
        gridArea: "alertMessage",
        fontSize: "calc(8px + .4vw)",
        color: "#b50000",
        justifySelf: "left",
        alignSelf: "center",
        fontFamily: "mada",
        fontWeight: "400",
    },
    submit: {
        justifySelf: "left",
        alignSelf: "center",
        gridArea: "submit",
        color: "#0a1338",
        background: "white",
        border: "2px",
        borderColor: "#0a1338",
        borderStyle: "solid",
        padding: "7px 12px",
        marginTop: "15px",
        marginLeft: "7px",
        borderRadius: "5px",
        fontSize: "calc(10px + .4vw)",
        fontWeight: "600",
        fontFamily: "mada",
        backgroundPosition: "center",
        "&:hover": {
            textDecoration: "underline",
            textDecorationThickness: ".3vh",
            background: "white",
        },
        "&active": {
            backgroundSize: "100%",
        },
    },
    characters: {
        fontSize: "1.5vw",
    },
}));

export default function Email() {
    const classes = useStyles();
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    function sendEmail(data, e) {
        e.preventDefault();
        const form = document.querySelector("#contact-form");

        emailjs.sendForm("outlook", "basic", e.target, "user_6PEnWgQ1LFiBmJrspbPFv").then(
            (result) => {
                //console.log(result.text);
                Swal.fire({
                    title: "Email Successfully Sent",
                    icon: "success",
                });
                form.reset();
            },

            (error) => {
                //console.log(error.text);
                Swal.fire({
                    title: "Email Failed to Send",
                    icon: "error",
                });
            }
        );
    }

    return (
        <div>
            <div className={classes.title}>Let's Connect:</div>
            <form className={classes.form} id="contact-form" onSubmit={handleSubmit(sendEmail)}>
                <div className={classes.container}>
                    <label className={classes.labelName}>Name:</label>
                    <input
                        className={classes.inputName}
                        type="text"
                        name="user_name"
                        aria-invalid={errors.user ? "true" : "false"}
                        {...register("user_name", {
                            required: true,
                        })}
                        placeholder="First Last"
                    />
                    {errors.user_name && (
                        <div className={classes.alertName}>⚠ Name is required</div>
                    )}

                    <label className={classes.labelEmail}>Email:</label>
                    <input
                        className={classes.inputEmail}
                        type="email"
                        name="email"
                        aria-invalid={errors.email ? "true" : "false"}
                        {...register("email", {
                            required: true,
                        })}
                        placeholder="first.last@example.com"
                    />
                    {errors.email && <div className={classes.alertEmail}>⚠ Email is required</div>}

                    <label className={classes.labelMessage}>Message:</label>
                    <textarea
                        className={classes.inputMessage}
                        type="text"
                        name="message"
                        aria-invalid={errors.message ? "true" : "false"}
                        {...register("message", {
                            required: true,
                        })}
                        placeholder="Type something..."
                    />
                    {errors.message && (
                        <div className={classes.alertMessage}>⚠ Message is required</div>
                    )}

                    <Button type="submit" className={classes.submit} startIcon={<SendIcon />}>
                        Send
                    </Button>
                </div>
            </form>
        </div>
    );
}
