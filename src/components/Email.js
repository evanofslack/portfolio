import React from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
    title: {
      fontSize: "calc(16px + 2vw)",
      color: "#0a1338",
      paddingBottom: "3vw",
    },
    container: {
      display: "grid",
      gridTemplateColumns: "1fr 12fr",
      gridTemplateRows: "auto",
      gridTemplateAreas:`
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
      width: "calc(100px + 10vw)",
      padding: "8px 8px",
      marginTop: "15px",
      marginBottom: "15px",
      marginLeft: "7px",
      boxSizing: "border-box",
      fontFamily: "mada",
      fontSize: "calc(10px + 1vw)",
      borderStyle: "solid",
      border: "1.5px",
      borderRadius: "3px",
      resize: "none",
      outline: "none",
      webkitTransition: "0.5s",
      transition: "0.5s",
      "&:focus": {
        backgroundColor: "#f5f5f5",
      },
    },
    inputEmail: {
      alignSelf: "center",
      gridArea: "inputEmail",
      width: "calc(120px + 20vw)",
      padding: "8px 8px",
      marginTop: "15px",
      marginBottom: "15px",
      marginLeft: "7px",
      boxSizing: "border-box",
      fontFamily: "mada",
      fontSize: "calc(10px + 1vw)",
      borderStyle: "solid",
      border: "1.5px",
      borderRadius: "3px",
      resize: "none",
      outline: "none",
      webkitTransition: "0.5s",
      transition: "0.5s",
      "&:focus": {
        backgroundColor: "#f5f5f5",
      },
    },
    inputMessage: {
      gridArea: "inputMessage",
      width: "60vw",
      fontFamily: "mada",
      fontSize: "calc(10px + 1vw)",
      height: "10em",
      padding: "8px 8px",
      marginTop: "15px",
      marginBottom: "15px",
      marginLeft: "7px",
      boxSizing: "border-box",
      borderStyle: "solid",
      border: "1.5px",
      borderRadius: "3px",
      resize: "none",
      outline: "none",
      webkitTransition: "0.5s",
      transition: "0.5s",
      "&:focus": {
        backgroundColor: "#f5f5f5",
      },
    },
    labelName: {
      textAlign: "left",
      fontFamily: "mada",
      fontSize: "calc(10px + 1vw)",
      fontWeight: "400",
      justifySelf: "right",
      alignSelf: "center",
      gridArea: "labelName",
    },
    labelEmail: {
      textAlign: "left",
      fontFamily: "mada",
      fontSize: "calc(10px + 1vw)",
      fontWeight: "400",
      justifySelf: "right",
      alignSelf: "center",
      gridArea: "labelEmail",
    },
    labelMessage: {
      textAlign: "left",
      fontFamily: "mada",
      fontSize: "calc(10px + 1vw)",
      fontWeight: "400",
      justifySelf: "right",
      alignSelf: "center",
      gridArea: "labelMessage",
    },
    alertName: {
      gridArea: "alertName",
      fontSize: "calc(10px + .5vw)",
      color: "#b50000",
      justifySelf: "left",
      alignSelf: "center",
    },
    alertEmail: {
      gridArea: "alertEmail",
      fontSize: "calc(10px + .5vw)",
      color: "#b50000",
      justifySelf: "left",
      alignSelf: "center",
    },
    alertMessage: {
      gridArea: "alertMessage",
      fontSize: "calc(10px + .5vw)",
      color: "#b50000",
      justifySelf: "left",
      alignSelf: "center",
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
      padding: "10px 20px",
      marginTop: "15px",
      marginLeft: "7px",
      borderRadius: "5px",
      fontSize: "calc(10px + .5vw)",
      fontWeight: "650",
      backgroundPosition: "center",
      transition: "background 0.8s",
      webkitTransition: "background 0.8s",
      "&:hover": {
        color: "#0a1338",
        textDecoration: "underline",
        textDecorationThickness: ".3vh",
      },
      "&active": {
        backgroundColor: "#ede477",
        backgroundSize: "100%",
        transition: "background 0s",
      },
    },
    characters: {
        fontSize: "1.5vw",
    },
})
)

export default function Email() {
    const classes = useStyles();
    const { register, formState: { errors }, handleSubmit } = useForm();

  function sendEmail(datda, e) {
    e.preventDefault();

    emailjs.sendForm('outlook', 'basic', e.target, 'user_6PEnWgQ1LFiBmJrspbPFv')
      .then((result) => {
          console.log(result.text);
          Swal.fire({
            title: 'Email Successfully Sent',
            icon: 'success'
          })
      }, (error) => {
          console.log(error.text);
          Swal.fire({
            title: 'Email Failed to Send',
            icon: 'error'
          })
      });
  }

  return (
    <div>
      <div className={classes.title}>Let's Connect:</div>
      <form className={classes.form} onSubmit={handleSubmit(sendEmail)}>
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
            placeholder='First Last' />
          {errors.user_name && <div className={classes.alertName}>⚠ Name is required</div>}
            
          <label className={classes.labelEmail}>Email:</label>
          <input 
            className={classes.inputEmail} 
            type="email" 
            name="email" 
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email", {
                required: true,
              })}
            placeholder='first.last@example.com' />
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
              placeholder='Type something...'/>
            {errors.message && <div className={classes.alertMessage}>⚠ Message is required</div>}

            <Button type="submit" className={classes.submit} startIcon={<SendIcon/>}>
              Send
            </Button>
        </div>
      </form>
    </div>
  );
}