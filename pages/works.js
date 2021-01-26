import dataWorks from "../components/works/dataWorks"

import MainWorks from '../components/works/MainWorks'

export default function Works ({dataWorks}) {

    return (
        <>
            <MainWorks dataWorks={dataWorks} />
        </>
    )
}

export async function getStaticProps () {

    return {
        props : {
            dataWorks
        }
    }
}