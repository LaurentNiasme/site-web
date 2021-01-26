import React from "react"
import stylesTextHome from '../../styles/Home.module.css'
import TextTransition, {presets} from "react-text-transition";



export default function TextHome ({dataPrez}) {
   
    return (
        <div className= {stylesTextHome.mainHome}>
            <div className={stylesTextHome.leftPageHome}>
                <div className={stylesTextHome.hello}>
                    Hello World
                </div>
                <div className={stylesTextHome.name}>
                    Laurent Niasme
                </div>
                <div className={stylesTextHome.dev}>
                    Développeur Web
                </div>
                <div className={stylesTextHome.frontEnd}>                  
                    Front End
                </div>    
            </div>
            <div className={stylesTextHome.rightPageHome}>  
            </div> 
        </div>
    )
}