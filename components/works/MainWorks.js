import React, {useState} from 'react';
import ButonWorks from '../buton/ButonWorks';
import MainImageWorks from './MainImageWorks';
import VideoWorks from './VideoWorks';
import styleWorks from "../../styles/works.module.css"

const MainWorks =({dataWorks}) => {
    // Consantte la video doit être montrée, l'id du travaille qui est sélectionné
    // Quel catégorie de domaine est sélectionné. Quel titre et urlVideo est sélectionné
    const [showVideo, setShowVideo] = useState(false);
    const [selectedWorks, setSelectedWorks] = useState(0);
    const [nameDomainWorks, setNameDomainWorks] = useState('Programmeur web front');
    const [urlVideo, setUrlVideo] = useState();
    const [titleVideo, setTitleVideo] = useState();

    // On montre la vidéo grace à un appel de la fonction venant du composant MainImageWorks
    const launchVideo = (launchingVideo, urlVideo, titleImage) => {
        setUrlVideo(urlVideo)
        setTitleVideo(titleImage)
        setShowVideo(launchingVideo)       
    };
    // On sélectionne un domaine de travail
    const handleClick = (e,id, name) =>{
        setSelectedWorks(id);
        setNameDomainWorks(name);
        setShowVideo(false);
    };

    return (
        <div className={styleWorks.main_works}>
            {/* barre de navigation */}
           <div className={styleWorks.nav_bar_works}>
               <ButonWorks name={"Développeur web front"} 
               idBtn={0} handleClick={handleClick} 
               btnSelected={selectedWorks} /> 

               <ButonWorks name={"3d interactive"} 
               idBtn={1} handleClick={handleClick} 
               btnSelected={selectedWorks}/>
           </div>
            <h1 className={styleWorks.title_domain_works}>
                {nameDomainWorks}
            </h1>
            {/* on montre la video ou on montre les icones de travail */}
           {showVideo ? <VideoWorks launchVideo={launchVideo}  urlVideo={urlVideo} titleVideo={titleVideo} /> : <MainImageWorks dataWorks={dataWorks} launchVideo={launchVideo} selectedWorks={selectedWorks} />}
        </div>
    )
}
export default MainWorks;
