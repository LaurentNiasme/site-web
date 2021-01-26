import styles from '../styles/globals.css'
import NavBar from '../components/navBar/navBar';
import mainStyle from '../styles/main.module.css';
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  // <Component {...pageProps} />
  return (
    <>
      <Head>
        <title>Laurent Niasme</title>
        <meta charset="utf-8" />
        <link rel="icon" href="/images/LogosLn.ico" />
        <link  href="/images/LogosLn.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&display=swap" rel="stylesheet"/>   
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,500;0,700;0,800;0,900;1,400;1,500;1,700;1,800;1,900&display=swap" rel="stylesheet"/> 
        <meta
      name="Laurent Niasme"
      content="Portfolio"
        />
        <title>Laurent Niasme</title>
      </Head>
      <div className={mainStyle.homePage}> 

        <NavBar />
        
        <div className ={mainStyle.homePageContainer}>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )


}

export default MyApp
