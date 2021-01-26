import React, {useState} from 'react';
import ImageWorks from './ImageWorks';
import styleWorks from '../../styles/works.module.css';


const MainImageWorks = ({dataWorks, selectedWorks, launchVideo}) => {

const handleClickMovie =(urlVideo, titleImage)=> {

    // setVideo({
    //     urlVideo, titleImage
    // })
    // setShowVideo(true)
   return (
    <>
         {launchVideo(true,urlVideo, titleImage )}
    </>
   )
    
}

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