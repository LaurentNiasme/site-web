import React, {useState} from 'react';
import styleWorks from '../../styles/works.module.css';


const VideoWorks = ({launchVideo, urlVideo, titleVideo}) => {

    return(
        <div className={styleWorks.videoWorks}>
            <h2 >{titleVideo}</h2>
            <button className={styleWorks.btn_video}  onClick={(e)=>launchVideo(false)}>Fermer</button>
            <div className={styleWorks.player_wrapper}>
                <iframe className={styleWorks.iframeVideo}
                src={urlVideo}
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>

                </iframe>
            </div>
        </div>

    )
}

export default VideoWorks;