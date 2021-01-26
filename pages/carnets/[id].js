import MainCarnetNote from '../../components/blog/MainCarnetNote'
import {getAllNotePath, getOneDataNote} from '../../lib/dataBlog'
import MainNote from '../../components/blog/MainNote';


const {post} = MainCarnetNote

export default function Carnets ({noteData}) {

    return (
        <>
        <MainNote noteData={noteData} />
        </>
    )
}

export async function getStaticPaths () {
    
    const paths = await getAllNotePath()

    return{
        paths,
        fallback: false
    }

}

export async function getStaticProps (context) {
  
    const paths = context.params.id
    const noteData = await getOneDataNote(paths)
    

    return {
        props: {
            noteData
        }
    }
}