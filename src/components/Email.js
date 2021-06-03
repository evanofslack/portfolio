import React from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
    title: {
      fontSize: "calc(14px + 2vw)",
        color: "#0a1338",
    },
    input: {
        width: "60vw",
        padding: "8px 8px",
        marginTop: "30px",
        boxSizing: "border-box",
        fontFamily: "mada",
        fontSize: "1rem",
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
        width: "60vw",
        fontFamily: "mada",
        fontSize: "1rem",
        height: "10em",
        padding: "8px 8px",
        marginTop: "30px",
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
    alert: {
      fontSize: "calc(10px + .5vw)",
      color: "red",
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
      webkitTransition: "0.5s",
      transition: "0.5s",
      "&:before": {
        content: "\f1d8",
      },
      "&:hover": {
        color: "#0a1338",
        background: "#dff7f6",
      },
      "&.active": {
        color:'#ede477',
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
    <div className={classes.title}>
      Let's Connect:
      <form className={classes.form} onSubmit={handleSubmit(sendEmail)}>
        <input 
          className={classes.input} 
          type="text" 
          name="user_name" 
          aria-invalid={errors.user ? "true" : "false"}
          {...register("user_name", {
              required: true,
            })}
          placeholder='Name' />
          {errors.user_name && <p className={classes.alert}>⚠ Name is required</p>}
      
        <input 
          className={classes.input} 
          type="email" 
          name="email" 
          aria-invalid={errors.email ? "true" : "false"}
          {...register("email", {
              required: true,
            })}
          placeholder='Email' />
          {errors.email && <p className={classes.alert}>⚠ Email is required</p>}

        <textarea 
            className={classes.message} 
            type="text"
            name="message" 
            aria-invalid={errors.message ? "true" : "false"}
            {...register("message", {
                required: true,
              })}
            placeholder='Message'/>
            {errors.message && <p className={classes.alert}>⚠ Name is required</p>}
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