import React, {useState} from 'react';
import ImageWorks from './ImageWorks';
import styleWorks from '../../styles/works.module.css';


const MainImageWorks = ({dataWorks, selectedWorks, launchVideo}) => {

    //handle Click pour lancer la vdéio en récupérant l'uril et le titre de la vidéo
const handleClickMovie =(urlVideo, titleImage)=> {
   return (
    <>
         {launchVideo(true,urlVideo, titleImage )}
    </>
   )
}
//Création des image en récupérant les données 
    const createImageWorks = () => {
        return(
            <div className={styleWorks.contain_all_image}>
                {dataWorks.filter(works=>works.id===selectedWorks).map(works=>{
                    return(
                        <ImageWorks data={works.dataWorksImage} handleClickMovie={handleClickMovie}  />
                    )
                })}
            </div>
        )
    }

    return (
        <>
            {createImageWorks()}
        </>
    )
}
export default MainImageWorks;