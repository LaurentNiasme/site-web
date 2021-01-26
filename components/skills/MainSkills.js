import React from 'react';
import SkillTransition from './SkillTransition';
import  styleSkills from '../../styles/skills.module.css';

const MainSkill = ({skills, textSkills, textColor})=> {
    return (
        <div className={styleSkills.main_skill}>
            <div className={styleSkills.left_page_skill}>
                <h1 className={styleSkills.skill_title}> Expérience et compétence</h1>
                <div className={styleSkills.skill_text}>
                    Je me spécialise dans le front-end du développement web et son
                    dynamisme avec les technologies <span className={styleSkills.boldText}> JS, REACTJs, NEXTJS, HTML, CSS.</span> 
                    <br/>
                    <br/>
                    Pour aller plus loin dans le front-end, j’utilise :
                    <br/>
                    <span className={styleSkills.boldText}>Redux-toolkit</span> donnant une simplicité pour transférer
                    les données entre les composant.
                    <br/>
                    <span className={styleSkills.boldText}>SocketIo</span> pour connecter les utilisateurs entre eux afin qu’ils
                    puissent communiquer en live.
                    <br/>
                    <br/>
                    J’ai également acquis une base en back-end avec <span className={styleSkills.boldText}> Nodejs, Express, Data-mapper, postgres.</span>
                    <br/>
                    <br/>
                    Mon ancienne profession de graphiste 3D et programmation nodale,
                    m’ont permit de matiriser les logiciels : 3dsmax, Photoshop, Unreal
                    Engine
                </div>
            </div>
           <div className={styleSkills.right_page_skill}>
                <SkillTransition skills={skills} textSkills={textSkills} textColor={textColor} />
           </div> 
        </div>
    )
}

export default MainSkill