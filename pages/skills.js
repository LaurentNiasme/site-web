import {skills, textSkills, textColor} from '../components/skills/dataSkills';

import dynamic from "next/dynamic";
const MainSkill = dynamic(() => import('../components/skills/MainSkills'), {
  ssr: false,
});

export default function Skills ({skills, textSkills, textColor}) {

    return (
        <>
        <MainSkill skills={skills} textSkills={textSkills} textColor={textColor} />
        </>
    )
}

export async function getStaticProps() {

    return {
        props:{
            skills, textSkills, textColor
        }
    }

}