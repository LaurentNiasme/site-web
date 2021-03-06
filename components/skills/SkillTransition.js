import React, {useState, useEffect} from 'react';
import TextTransition, {presets} from "react-text-transition";
import  styleSkills from '../../styles/skills.module.css';

const SkillTransition = ({skills, textSkills, textColor})=> {

    const [index, setIndex]= useState(0);
    useEffect(()=>{
        const intervalId = setTimeout(()=>{
            return (
                setIndex(index=> index+1)
            )
        },
        3000
        )
    });

    const styleNameSkill = ()=> {
        //animation des textes
        return (
            `${styleSkills.name_skill_transition} ${textColor[index%textColor.length]}`
        )
        
    }

    return(
        <div className={styleSkills.contain_skill_transition}>
            <div className={styleSkills.contain_name_skill_transition}>
                <TextTransition
                    text={skills[index%skills.length]}
                    springConfig={presets.wobbly}
                    className={styleNameSkill()}
                    />
            </div>
        </div>
       

    )
}

export default SkillTransition