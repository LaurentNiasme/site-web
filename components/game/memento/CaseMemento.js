import React, {useEffect, useState} from 'react';

import mementoStyle from '../../../styles/memento.module.css';


const CaseMemento = ({dataMemento, onPressCase, keyCase, entityFind, start, allCreate, bothEntitySelect}) => {
    
    const  [styleColor, setStyleColor] = useState("black")
    const [styleCase, setStyleCase] = useState(mementoStyle.caseInit)
    const [urlIcone, setUrlIcone] = useState(dataMemento.icone)
    // if (dataMemento.entity !== "neutre"){
       
    // }
    const switchColor = () => {
        // si le duos est trouvé
        if(entityFind.includes(dataMemento.entity)){
            // setStyleColor(dataMemento.color)
            setStyleCase(mementoStyle.caseFind)
            setUrlIcone(dataMemento.icone)
        }else if (dataMemento.entity !=="neutre"){
            // setStyleColor("black")
            setUrlIcone('/images/icones_animaux/icone_interrogation.png')
            setStyleCase(mementoStyle.caseBack)
        } 
    }

    useEffect(()=>{
        // si les cases sont simplement retournés 
        if(bothEntitySelect.includes(keyCase)){
            // setStyleColor(dataMemento.color)
            setUrlIcone(dataMemento.icone)
            setStyleCase(mementoStyle.caseReturn)
        }else if (dataMemento.entity !=="neutre"&& entityFind.includes(dataMemento.entity)!==true){
            setUrlIcone('/images/icones_animaux/icone_interrogation.png')
            setStyleCase(mementoStyle.caseBack)
        } 
    },[bothEntitySelect])
    
    useEffect(()=> {
        if (start){

            switchColor()
          
        }
    },[entityFind])

    useEffect(()=>{
     
        if(start){
            switchColor()
        }else{

            setStyleCase(mementoStyle.caseInit)
            setUrlIcone(dataMemento.icone)
           
        }
    },[start])

 

    return (
      
            <div key={keyCase} onClick={()=>onPressCase(dataMemento.entity, keyCase)} 
            // style={start ? [mementoStyle.case, {backgroundColor:styleColor}]:[mementoStyle.case, {backgroundColor:dataMemento.color}]}
            // style={start ? [mementoStyle.case, {backgroundColor:styleColor}]:mementoStyle.case}
            // className={(dataMemento.entity ==="neutre") ? (mementoStyle.case, mementoStyle.caseNeutre):(mementoStyle.case, styleCase)}
            className={(dataMemento.entity ==="neutre") ? (`${mementoStyle.case} ${mementoStyle.caseNeutre}`):(`${mementoStyle.case} ${styleCase}`)}
            >
                    {(dataMemento.entity ==="neutre") ? null : <img src={urlIcone} className={mementoStyle.iconeMemento} />}
                
            </div>
        
    )
}

export default CaseMemento