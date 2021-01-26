import React from "react";
import styleContact from '../../styles/contact.module.css';

const FormContact = ({errorForm,sendEmail,fillContactMessage, email, subject, message, name}) => {
    
    return(
        <div className= {styleContact.main_contact}>
        <h1 className={styleContact.contact_title}> Contactez moi</h1>
        <form className={styleContact.form_contact} onSubmit={sendEmail}>
             <div className={styleContact.form_contact_group}>
          
                 <input type="text" className={errorForm.errorName? `${styleContact.form_contact_control_name} ${styleContact.error_input}`:`${styleContact.form_contact_control_name}`} value={name}  placeholder="Nom" name="user_name" onChange={(e)=>fillContactMessage(e)} />
                 <input type="text" className={errorForm.errorSubject? `${styleContact.form_contact_control_sujet}` `${styleContact.error_input}` : `${styleContact.form_contact_control_sujet}`} value={subject} placeholder="Sujet" name="subject" onChange={(e)=>fillContactMessage(e)} />
             </div>
             <div className={styleContact.form_contact_group}>
                 <input type="email" className={errorForm.errorEmail? `${styleContact.form_contact_control_email}` `${styleContact.error_input}` : `${styleContact.form_contact_control_email}`} aria-describedby="emailHelp" value={email} placeholder="email"  name="email" onChange={(e)=>fillContactMessage(e)}/>
             </div>
             <div className={styleContact.form_contact_group}>
                 
                 <textarea className={errorForm.errorMessage? `${styleContact.form_contact_control_message}` `${styleContact.error_input}` : `${styleContact.form_contact_control_message}`} rows="5" placeholder="Message" value={message} name="message" onChange={(e)=>fillContactMessage(e)}/>
             </div>
             <div className={styleContact.form_btn_send}>
                 <button type="submit" className="btn_envoyer" >Envoyer</button>
             </div>
        </form>
        
    </div> 

    )
}
export default FormContact