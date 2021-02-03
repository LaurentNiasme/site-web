import React, { useEffect, useState } from 'react';

import mementoStyle from '../../../styles/memento.module.css';
// import dataMemento from './dataMemento';
import CaseMemento from './CaseMemento';



const ZoneMemento =({nbrColor, start, reset, disableReset, duosFind, dataMemento} ) => {

    const [zoneColor, setZoneColor] = useState();
    const [nbrCaseSelect, setNbrCaseSelect] = useState(0);
    const [entitySelect, setEntitySelect] = useState({entity:"", keycase:-100});
    const [bothEntitySelect, setBothEntitySelect] = useState([])
    const [entityFind, setEntityFInd] = useState([]);
    const [allCreate, setAllCreate] = useState(false)
    const [verifyCase, setVerifyCase] = useState(false)


    const createZone =  async (nbr)  => {
        setAllCreate(false);
        setEntityFInd([]);
        setBothEntitySelect([]);
        setEntitySelect({entity:"", keycase:-100});
        setZoneColor([]);

        const color = await dataMemento.filter((data)=> data.entity !== 'neutre');
        const shuffleColor = await color.sort(() => Math.random() - 0.5);
        const selectColor = await shuffleColor.slice(0, nbr)
        let fullColor = []
        let randomColor = []
  
        let zoneEmpty  = dataMemento[0]
        let fullZoneEmpty =[]

        const fillZoneEmpty = () => {
         
        for  (let index = (nbr*2); index <36; index++) {
            fullZoneEmpty =[...fullZoneEmpty, zoneEmpty];
        }}
     
        const fill = await fillZoneEmpty()
        
       
         fullColor = [...selectColor, ...selectColor, ...fullZoneEmpty].sort(() => Math.random() - 0.5);
        randomColor = fullColor.sort(() => Math.random() - 0.5);
         setZoneColor(randomColor)
         disableReset()
        
         
        return (
            fullColor
        )
    }

    const showZone =  (fullColor) => {
      
        return (
           <>
                {fullColor.map((dataMemento, index)=>{
                    return(
                        <CaseMemento dataMemento={dataMemento} onPressCase={onPressCase} keyCase={index} 
                        entityFind={entityFind} start={start} allCreate={allCreate} bothEntitySelect={bothEntitySelect}/>
                    )
                })}
           </>
        )

    }
// Vérifier si la case est neutre ou si la double case a été trouvée
    const onPressCase = (entity, keycase)=> {
        if (start && verifyCase===false){

            //    Entity neutre      
                if(entity==="neutre" || entityFind.includes(entity)){
                 
                }else{
                    checkCase(entity, keycase)
                } 
        }
    };

    //  Vérifier si c'est la bonne case ou pas
    const checkCase = (entity, keycase)=> {
        if (entitySelect.entity!==""  && entitySelect.keycase===keycase){
            // on sélectionne la même case, on l'annule
             setEntitySelect({entity:"", keycase:-100})
             setBothEntitySelect([])

        }else if (entitySelect.entity===""){
            // aucune case n'est sélectionnée, on l enregiste
             setEntitySelect({
                 entity, 
                 keycase
             })
             setBothEntitySelect([keycase])
        }else if(entitySelect.entity!=="" && entitySelect.keycase!==keycase && entitySelect.entity===entity){
            //on a trouvé la seconde case, on gagne
    
         setEntitySelect({entity:"", keycase:-100})
         setEntityFInd([...entityFind, entity])
         setBothEntitySelect([...bothEntitySelect, keycase])
         duosFind(entityFind.length+1)
         setVerifyCase(true)
         setTimeout(() => {
            setBothEntitySelect([])
            setVerifyCase(false)
         }, 1000);
         
           
        }else if(entitySelect.entity!=="" && entitySelect.keycase!==keycase && entitySelect.entity!==entity){
            // La seconde case n'est pas la même entité, on perd
         setBothEntitySelect([...bothEntitySelect, keycase])
         setEntitySelect({entity:"", keycase:-100})
         setVerifyCase(true)
         setTimeout(() => {
            setVerifyCase(false)
            setBothEntitySelect([])
         }, 1000);
        }
       
    }
    //-------------------------------------use Effect Zone ------------------------------------------**
// on lance la création lorsqu'on change le nombre de couleur
    useEffect (()=>{
        createZone(nbrColor)
    },[nbrColor])

    useEffect(()=>{
        if(reset){
            createZone(nbrColor)
           
        }
    },[reset])
// init les array de sélections
    // useEffect(()=>{
    //     setEntityFInd([])
    //     setEntitySelect({entity:"", keycase:-100})
    //     if(!start){
    //         setZoneColor([])
    //     }else{
            
    //     }
    // },[start])
// On regarde si on a tout trouvé
    useEffect(()=>{
        if (entityFind.length === nbrColor&& start){
   
        }
       
    },[entityFind])
    return (
     
        <div className={mementoStyle.ZoneMemento}>
            {/* {createZone(1)} */}
            {zoneColor ? showZone(zoneColor):null}
     

        </div>
    )
}

export default ZoneMemento