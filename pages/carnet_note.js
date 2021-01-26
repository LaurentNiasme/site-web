import MainCarnetNote from '../components/blog/MainCarnetNote'
import { getAllDataNote} from '../lib/dataBlog'


export default function Blog ({posts}) {
    return (
        <>
            <MainCarnetNote posts = {posts} />
        </>
    )
}

export async function getStaticProps () {
     const posts = await getAllDataNote();
    return{
        props:{
            posts:posts
        }

    }
}