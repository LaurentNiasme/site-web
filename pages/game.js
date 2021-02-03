
import dataMemento from '../components/game/memento/dataMemento';
// import MainMemento from '../components/game/memento/MainMemento';



import dynamic from "next/dynamic";
const MainMemento = dynamic(() => import('../components/game/memento/MainMemento'), {
  ssr: false,
});

export default function Game ({dataMemento}) {

    return (
        <>
           <MainMemento dataMemento={dataMemento}/>
        </>
    )

}

export async function getStaticProps() {

    return {
      props: {
        dataMemento
        
      }
    }
  }
  