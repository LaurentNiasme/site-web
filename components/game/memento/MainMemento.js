import React, {useState, useEffect, memo} from 'react';


import ZoneMemento from './ZoneMemento';
import mementoStyle from '../../../styles/memento.module.css';
import { title } from 'process';




const MainMemento =({dataMemento}) => {
    const [nbrColor, setNbrColor] = useState(2)
    const [start, setStart] = useState(false)
    const [reset, setReset] = useState(false)
    const [nbrDuosFind, setNbrDuosFind] = useState(1)
    const [txtNbrDuos, setTxtNbrDuos] = useState("Choisissez le nombre de duos à trouver")

    const onPress = (e, nbr)=> {
        e.preventDefault()

        setNbrColor(nbr)

    }
// lancer le jeu, les boutons reset et les flêches disparaissent 
    const onPressGo =() => {
        setStart(true)
        duosFind(0)
    };
// RESET : on affiche de nouveau les flêches et on remet tout à zéro
    const onPressReset = (e) => {
        e.preventDefault()
        setStart(false)
        setReset(true)
        setNbrDuosFind(0)
    }
// On n'est plus dans le reset
    const disableReset = () => {
        setReset(false)
    }
// Changer le texte qui affiche le nombre de duos à trouver
    const duosFind = (nbrDuos)=> {
        setNbrDuosFind(nbrDuos)

    }

    const changeTextDuos = () => {
      
        let nbrString = (nbrColor-nbrDuosFind).toString()
        let text
        if((nbrColor-nbrDuosFind) === 1){
           text = start ? `Encore ${nbrString} duo à trouver` : `${nbrString} duo à trouver`
            setTxtNbrDuos(text)
        }else if((nbrColor-nbrDuosFind) === 0){
            text = "AAAAH bah bravo :-)"
             setTxtNbrDuos(text)
         } else {
         
            text = start ? `Encore ${nbrString} duos à trouver` : `${nbrString} duos à trouver` 
            setTxtNbrDuos(text) 
         }
    }

// Fleche pour descendre le nombre de duos à trouver
    const onPressDecrease = (e) => {
        e.preventDefault()
        setStart(false)
        if(nbrColor<2){

        }else{

            setNbrColor(nbrColor-1)
            duosFind(0)
        }
    }

// flêche pour augmenter le nombre de duos à trouver
    const onPressIncrease = (e) => {
        e.preventDefault()
        setStart(false)
      
        if(nbrColor>12){
        }else{
            setNbrColor(nbrColor+1)
            duosFind(0)
        }
        
    }
    useEffect(()=>{
        start ? null : changeTextDuos()
    },[nbrColor])

    useEffect(()=>{
        start ?  changeTextDuos() : null
    },[start])

    useEffect(()=> {
        changeTextDuos()
    },[nbrDuosFind])
    return (
        
            <div className={mementoStyle.containerMementoGame}>
                <div className={mementoStyle.mainContenerInterface}>
                    <div className={mementoStyle.title}>
                    Memento
                    </div>
                
                    <div className={mementoStyle.containerMemento }>
                        <ZoneMemento nbrColor={nbrColor} start={start} reset={reset} disableReset={disableReset} duosFind={duosFind} dataMemento={dataMemento}/>
                    </div>
                    
                        <div className={mementoStyle.txtNbrColor}>
                            {/* {nbrColor-nbrDuosFind} {((nbrColor-nbrDuosFind) === 1) ? 'duo à trouver' : 'duos à trouver'} */}
                            {txtNbrDuos}
                        </div>
                    
                    <div className={mementoStyle.containerArrow}>
                        {start ?  null :  <div onClick={(e)=>onPressDecrease(e)} className={mementoStyle.buton}>
                                -
                        </div>}
                    {start ? null : <div onClick={(e)=>onPressIncrease(e)} className={mementoStyle.buton}>
                                +
                        </div>}
                    </div> 

                    <div className={mementoStyle.actionPlay}>
                    {start ? null : <div onClick={(e)=>onPressGo()} className={mementoStyle.buton}>
                            Jouer
                        </div>}
                        <div onClick={(e)=>onPressReset(e)} className={mementoStyle.buton}>
                            Reset
                        </div>
                    </div>

                </div>
                
            </div>
     
    )
}

export default MainMemento