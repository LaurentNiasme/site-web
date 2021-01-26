import React, {useState} from 'react'
// import MainAbout from '../about/MainAbout';
import emailjs from 'emailjs-com';
import FormContact from './FormContact'


const MainContact = () => {
    // donnée clefs, de emailjs pour se connecter au compte emailjs
const EMAILID = process.env.REACT_APP_EMAILJS_USER_ID;
const SERVICEID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

//useState pour sauvegarder les value input
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
        // on récupère toutes les valeurs taper
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
        //init de toutes les erreur à false
        let error = {
            errorEmail : false,
            errorMessage : false,
            errorName: false,
            errorSubject : false
        }
        if((email==="") || (subject==="") || (message ==="") || (name==="")){
            // checker les erreurs
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