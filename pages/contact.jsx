
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import {useRef} from "react";
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'



const Contact = () => {
  const form = useRef();
const notify =()=> toast.success("message sent successfly")
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "AnimalHelp",
        "template_lydog77",
        form.current,
        "KuJRI2mjM9D2t9S3o"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
          
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div style={{paddingTop:25,paddingBottom:25,paddingLeft:400,background: "linear-gradient(to left, #46e074, #facf6e)"}}>
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label style={{color:'#FCF6F5',fontSize:30,paddingLeft:80,fontFamily:"Times New Roman"}}>Contact me</label>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Subject</label>
        <input type="text" name="subject" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" onClick={notify} />
      </form>
    </StyledContactForm>
    <ToastContainer/>
    </div>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    background: #42803c;
    padding: 10px 40px;
    border-radius: 14px;
    
    
    

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      
      &:focus {
        border: 3px solid #da61ff;
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid #da61ff;
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: linear-gradient(to right, #0062ff, #da61ff);
      color: white;
      border: none;
    }
  }
`;