import React, {useState, useEffect} from 'react';
import styleAbout from '../../styles/about.module.css'

import ButonYearsJob from '../buton/ButonYearsJob';
import TextJob from './TextJob'

const MainAbout =({worksYears})=> {

    // sauvegarder les données d'un job selon l'année
    const [dataJob, setDataJob] = useState(worksYears[0])
    //Séelectionner l'année du job
    const [selectedYears, setSelectedYears] = useState(0)

    // Changer l'année du job et sauvegarder de nouvelle donnée reçu
    function handleClick(e, data, idBtn) {
        e.preventDefault();
        setDataJob(data)
        setSelectedYears(idBtn)
    }

    //créer le text explicatif du job
    const createText =()=> {
        return(
            < >
                {
                    dataJob.job.map(data=> {
                            return(   
                                <TextJob data={data} styleAbout={styleAbout}/>
                            )
                    })
                }
            </>
        )
    }

   
    // buton des années
    const createButon = () => {

        return(
           <div className={styleAbout.mainYearsNavBar}>
                {
                worksYears.map((data,i)=> {
               
                    return(
                        <ButonYearsJob data ={data} handleClick={handleClick} idBtn={i} btnSelected={selectedYears} styleAbout={styleAbout}/>
                    )
                })
                }
           </div>
        )
    }

    return (
        <div className = {styleAbout.mainAbout}>
            <h1 className={styleAbout.aboutTitle , styleAbout.h1Title} > A propos de moi</h1>
            <div className={styleAbout.aboutText}>
                Suite à une reconversion professionnelle en tant que programmeur dans le développement web en front-end, à l’issue de ma formation, je me spécialise dans la technologie React Js, Redux toolkit.
                <br/>
                <br/>
                Avant cette reconversion, j’étais graphiste 3D depuis 12 ans, puis
                programmeur nodal/blueprint sur le logiciel Unreal Engine, grâce
                auquel j’ai élaboré des logiciels ancrés dans un univers interactif.
                <br/>
                <br/>
                Ces différentes expériences dans la programmation d’applications en réalité virtuelle, m’ont permis d’acquérir de solides connaissances
                dans plusieurs domaines de la production, tout en développant ma curiosité à rechercher de nouvelles technologies, à apprendre en autodidacte
                et mon ambition pour évoluer.
            </div>
            {/* création des boutons et du text */}
            <div className={styleAbout.aboutMainYears}>
                    {createButon()}
                    {dataJob ? createText() : null}
            </div>
            
        </div>
    )
}

export default MainAbout