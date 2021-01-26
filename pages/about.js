
import worksYears from '../components/about/dataJob';
import MainAbout from '../components/about/MainAbout';

export default function About ({worksYears}) {

    return (
        <>
           <MainAbout worksYears={worksYears}/>
        </>
    )

}

export async function getStaticProps() {

    return {
      props: {
        worksYears
        
      }
    }
  }
  