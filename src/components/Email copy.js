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
        paddingBottom: "20px",
    },
    container: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr",
      gridTemplateAreas:`
        "labelName inputName"
        ". nameAlert"
        "labelEmail  inputEmail"
        ". emailAlert"
        "labelMessage inputMessage"
        ". messageAlert"`,
    },
    name: {
      gridArea: "inputName",
      width: "30vw",
      padding: "8px 8px",
      marginTop: "15px",
      marginBottom: "15px",
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
    email: {
      gridArea: "inputEmail",
      width: "45vw",
      padding: "8px 8px",
      marginTop: "15px",
      marginBottom: "15px",
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
    message: {
      gridArea: "inputMessage",
      width: "60vw",
      fontFamily: "mada",
      fontSize: "calc(10px + 1vw)",
      height: "10em",
      padding: "8px 8px",
      marginTop: "15px",
      marginBottom: "15px",
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
      display: "block",
      justifySelf: "center",
      alignSelf: "center",
      gridArea: "labelName",
    },
    labelEmail: {
      textAlign: "left",
      fontFamily: "mada",
      fontSize: "calc(10px + 1vw)",
      fontWeight: "400",
      display: "block",
      justifySelf: "center",
      alignSelf: "center",
      gridArea: "labelEmail",
    },
    labelMessage: {
      textAlign: "left",
      fontFamily: "mada",
      fontSize: "calc(10px + 1vw)",
      fontWeight: "400",
      display: "block",
      justifySelf: "center",
      alignSelf: "center",
      gridArea: "labelMessage",
    },
    alertName: {
      gridArea: "alertName",
      fontSize: "calc(10px + .5vw)",
      color: "#b50000",
      display: "block",
      justifySelf: "center",
      alignSelf: "center",
    },
    alertEmail: {
      gridArea: "alertEmail",
      fontSize: "calc(10px + .5vw)",
      color: "#b50000",
      display: "block",
      justifySelf: "center",
      alignSelf: "center",
    },
    alertMessage: {
      gridArea: "alertMessage",
      fontSize: "calc(10px + .5vw)",
      color: "#b50000",
      display: "block",
      justifySelf: "center",
      alignSelf: "center",
    },
    submit: {
      color: "#0a1338",
      background: "white",
      border: "2px",
      borderColor: "#0a1338",
      borderStyle: "solid",
      padding: "10px 20px",
      borderRadius: "5px",
      fontSize: "calc(10px + .5vw)",
      fontWeight: "650",
      backgroundPosition: "center",
      transition: "background 0.8s",
      //webkitTransition: "0.5s",
      //transition: "0.8s",
      "&:hover": {
        color: "#0a1338",
        background: "#f6f1bb radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%"
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

  function sendEmail(e) {
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
      <div className={classes.title}>
        Let's Connect:
      </div>
      <form className={classes.form} onSubmit={handleSubmit(sendEmail)}>
        <div className={classes.container}>
          <label className={classes.labelName}>
            Name: &nbsp;
          </label>
          <input 
            className={classes.inputName} 
            type="text" 
            name="user_name" 
            aria-invalid={errors.user ? "true" : "false"}
            {...register("user_name", {
                required: true,
              })}
            placeholder='Name' />
          {errors.user_name && <p className={classes.alertName}>⚠ Name is required</p>}
            
        
          <label className={classes.labelEmail}>
            Email: &nbsp;
          </label>
          <input 
            className={classes.labelEmail} 
            type="email" 
            name="email" 
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email", {
                required: true,
              })}
            placeholder='Email' />
          {errors.email && <p className={classes.alertEmail}>⚠ Email is required</p>}
          
          <label className={classes.labelMessage}>
            Message: &nbsp;
          </label>
          <textarea 
              className={classes.inputMessage} 
              type="text"
              name="message" 
              aria-invalid={errors.message ? "true" : "false"}
              {...register("message", {
                  required: true,
                })}
              placeholder='Message'/>
            {errors.message && <p className={classes.alertMessage}>⚠ Message is required</p>}
          </div>
            <br/>
          
        <Button
            type="submit"
            className={classes.submit}
            startIcon={<SendIcon/>}
            >
            Send
          </Button>
      </form>
    </div>
  );
}