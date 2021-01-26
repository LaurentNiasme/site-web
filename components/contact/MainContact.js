import React, {useState} from 'react'
// import MainAbout from '../about/MainAbout';
import emailjs from 'emailjs-com';
import FormContact from './FormContact'


const MainContact = () => {
    
const EMAILID = process.env.REACT_APP_EMAILJS_USER_ID;
const SERVICEID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;



const [email, setEmail] = useState("");
const [subject, setSubject] = useState("");
const [message, setMessage] = useState("");
const [name, setName] = useState("");
const [errorForm, setErrorForm] = useState(
    {
        errorEmail : false,
        errorMessage : false,
        errorName: false,
        errorSubject : false

    }
);
const {errorEmail, errorMessage, errorName, errorSubject} = errorForm


    const fillContactMessage = (e) => {
        e.preventDefault()

        if(e.target.name=="user_name"){
            setName(`${e.target.value}`)
        }else
        if(e.target.name=="subject"){
            setSubject(`${e.target.value}`)
          
        }
        if(e.target.name=="email"){
            setEmail(`${e.target.value}`)
        }
        if(e.target.name=="message"){
            setMessage(`${e.target.value}`)
        }
    }
    function sendEmail(e) {
        e.preventDefault();
        let error = {
            errorEmail : false,
            errorMessage : false,
            errorName: false,
            errorSubject : false
        }
        if((email==="") || (subject==="") || (message ==="") || (name==="")){
    
            if(email===""){
                error.errorEmail = true
            }
            if(subject===""){
                error.errorSubject = true
            }
            if(message===""){
                error.errorMessage = true
            }
            if(name===""){
                error.errorName = true
            }  
            setErrorForm({...error})
        }else{

            emailjs.sendForm(`${SERVICEID}`, `${TEMPLATID}`, e.target, `${EMAILID}`)
            .then((result) => {
        
                setErrorForm({...error})
                setMessage("")
                setEmail("")
                setName("")
                setSubject("")
            }, (error) => {
              
            });
        }
      }
    return (
        <> 
            <FormContact errorForm={errorForm} sendEmail={sendEmail} fillContactMessage={fillContactMessage}
             email = {email}
             subject = {subject}
             message  = {message}
             name = {name}
            />
        </>

    )
}
export default MainContact