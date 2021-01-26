import React, {useState} from 'react';
// import { Redirect, useHistory } from "react-router-dom";
import Link from 'next/link';
import styleNavBar from '../../styles/navBar.module.css'


const ButonNavBar = ({name, route, url, urlIcone, handleClick, nameClick})=> {
    const [overButon, setOverButon] = useState();
    const [nameButon, setNameBUton] = useState(false);
    const [urlIconeButon, setUrlIconeButon] = useState(urlIcone)

// afficher le texte ou une icone
    const mouseOver = ()=> {
        if (window.innerWidth>800){
            setUrlIconeButon(null)
            setNameBUton(true)
        }
    }

    const mouseIn = () => {
       
    };
    //AFficher l'icone
    const mouseLeave = () => {
        if (window.innerWidth>800){
            setNameBUton(false)
            setUrlIconeButon(urlIcone)
        }
    };

    return(
        <div className= {styleNavBar.buton_nav_bar}>
            <Link href={route} as={(route==="/")? "":`${route}.html`}>
 
            <a className= {styleNavBar.button_click}  onMouseEnter={mouseIn} onMouseLeave={mouseLeave} onMouseOver={mouseOver} onClick={()=>handleClick(name)} >
            {/* Si la souris est over the buton ou on a sélectionné le bouton on affiche le texte sinon l'icone */}
            { (nameButon || (name===nameClick)) ?  name : <img className={styleNavBar.image} src={urlIconeButon}  alt={name}  />}
            </a>
            </Link>
        
        </div>
    )
}

export default ButonNavBar;