import React from "react";
import styleWorks from '../../styles/works.module.css';

const ImageWorks =({data, handleClickMovie}) => {
    return (
        <div className={styleWorks.contain_image}>
              
                <img div className={styleWorks.image_picture} src={data.urlImage} onClick={(e)=>handleClickMovie(data.urlVideo, data.titleImage)}/>
                <div className={styleWorks.title_image}> {data.titleImage}</div>
              
        </div>

    )
}

export default ImageWorks;