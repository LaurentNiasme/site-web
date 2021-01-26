import React, {useState} from 'react';
// import { Redirect, useHistory } from "react-router-dom";
import Link from 'next/link';
import styleNavBar from '../../styles/navBar.module.css'


const ButonNavBar = ({name, route, url, urlIcone, handleClick, nameClick})=> {
    // const history = useHistory();
    const [overButon, setOverButon] = useState();
    const [nameButon, setNameBUton] = useState(false);
    const [urlIconeButon, setUrlIconeButon] = useState(urlIcone)

    const mouseOver = ()=> {
        if (window.innerWidth>800){

            setUrlIconeButon(null)
            setNameBUton(true)
        }
    }

    const mouseIn = () => {
       
    };

    const mouseLeave = () => {
        if (window.innerWidth>800){
            setNameBUton(false)
            setUrlIconeButon(urlIcone)
        }
    };

    // function handleClick(e) {
    // e.preventDefault();
      
    // //   if (!url){
    // //      history.push(route);
    // //   }else{

    // //       return <Redirect to ='https://www.instagram.com/'/>
    // //   };
    // }

    return(
        <div className= {styleNavBar.buton_nav_bar}>
            <Link href={route} as={(route==="/")? "":`${route}.html`}>
 
            <a className= {styleNavBar.button_click}  onMouseEnter={mouseIn} onMouseLeave={mouseLeave} onMouseOver={mouseOver} onClick={()=>handleClick(name)} >
            { (nameButon || (name===nameClick)) ?  name : <img className={styleNavBar.image} src={urlIconeButon}  alt={name}  />}
            </a>
            </Link>
        
            {/* <input type="image"  
            className= {styleNavBar.button_click} 
            onClick={handleClick} img src={urlIconeButon}  
            value={nameButon} 
            onMouseEnter={mouseIn} 
            onMouseLeave={mouseLeave} 
            onMouseOver={mouseOver}  /> */}
            {/* <button onClick={handleClick} /> */}
        </div>
    )
}

export default ButonNavBar;