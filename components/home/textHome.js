import React from "react"
import stylesTextHome from '../../styles/Home.module.css'
import TextTransition, {presets} from "react-text-transition";



export default function TextHome ({dataPrez}) {
    const letterHello = ()=> {
        return (
            
                `${dataPrez.hello}`.split("").map((letter, i)=>{
                    // let style = "helloLetter letter"
                    let style = `${stylesTextHome.hello} ${stylesTextHome.letter}`
                    if(letter===" "){
                        // style = "helloLetter spaceLetter"
                        style = `${stylesTextHome.helloLetter} ${stylesTextHome.spaceLetter}`
                    }
    
                    return (
                        <TextTransition
                            text={letter}
                            springConfig={presets.wobbly}
                            className={style}
                            delay = {i*50}
                        />
                    )
                })
        )
    }
    const letterName = ()=> {
        return (
            
                `${dataPrez.name}`.split("").map((letter, i)=>{
                    // let style = "helloLetter letter nameLetter"
                    let style = `${stylesTextHome.helloLetter} ${stylesTextHome.letter} ${stylesTextHome.nameLetter}`

                    if(letter===" "){
                        // style = "helloLetter spaceLetter"
                        style = `${stylesTextHome.helloLetter} ${stylesTextHome.spaceLetter}`
                    }
    
                    return (
                        <TextTransition
                            text={letter}
                            springConfig={presets.wobbly}
                            className={style}
                            delay = {(i*50)+300}
                        />
                    )
                })
        )
    }
    const letterDevWeb = ()=> {
        return (
            
                `${dataPrez.devWeb}`.split("").map((letter, i)=>{
                    // let style = "helloLetter letter"
                    let style = `${stylesTextHome.helloLetter} ${stylesTextHome.letter}`
                    if(letter===" "){
                        // style = "helloLetter spaceLetter"
                        style = `${stylesTextHome.helloLetter} ${stylesTextHome.spaceLetter}`
                    }
    
                    return (
                        <TextTransition
                            text={letter}
                            springConfig={presets.wobbly}
                            className={style}
                            delay = {(i*50)+600}
                        />
                    )
                })
        )
    }
    const letterFrontEnd = ()=> {
        return (
            
                `${dataPrez.frontText}`.split("").map((letter, i)=>{
                    // let style = "helloLetter"
                    let style = `${stylesTextHome.helloLetter} `
                    if(letter===" "){
                        // style = "spaceLetter"
                        style = ` ${stylesTextHome.spaceLetter}`
                    }
    
                    return (
                        <TextTransition
                            text={letter}
                            springConfig={presets.wobbly}
                            className={style}
                            delay = {(i*50)+600}
                        />
                    )
                })
        )
    }

    return (
        <div className= {stylesTextHome.mainHome}>
            <div className={stylesTextHome.leftPageHome}>
                <div className={stylesTextHome.hello}>
                    {/* {letterHello()} */}
                    Hello World
                </div>
                <div className={stylesTextHome.name}>
                    {/* {letterName()} */}
                    Laurent Niasme
                </div>
                <div className={stylesTextHome.dev}>
                    {/* {letterDevWeb()} */}
                    Développeur Web
                </div>
                <div className={stylesTextHome.frontEnd}>
                    {/* {letterFrontEnd()} */}
                    Front End
                </div>    
            </div>
            <div className={stylesTextHome.rightPageHome}>  
            </div> 
        </div>
    )
}