import React, {useRef,useState, useEffect} from 'react';
import styleWorks from '../../styles/works.module.css';

const ButonWorks = ({handleClick, data, name, idBtn, btnSelected})=> {
    const [idBouton, setIdButon] = useState(idBtn)
    const [styleBtn, setStyleBtn] = useState()
    useEffect(()=> {
        // Changer le style de bouton, cette manière n'est pas bonne car derrived state. 
        // Note à mo même, la modifier comme dans le portfolio réaliser en react native
        if(btnSelected===idBtn){
            setStyleBtn(`${styleWorks.button_works} ${styleWorks.button_works_selected}`)
        }else{
            setStyleBtn(`${styleWorks.button_works}`)
          
        }
    },[btnSelected])
    return(
        <>
            <input type="button" id={idBouton} className={styleBtn} value={name}  onClick={(e)=>handleClick(e,idBtn, name)}/>
        </>
    )

};

export default ButonWorks;