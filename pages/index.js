import React from "react"
import Head from 'next/head'
// import styles from '../styles/Home.module.css';

import dynamic from "next/dynamic";
const TextHome = dynamic(() => import('../components/home/textHome'), {
  ssr: false,
});



export default function Home({dataPrez}) {
  
  return (
    <>
      <TextHome dataPrez={dataPrez}/>
    </>
  )
}

export async function getStaticProps() {
  const hello = "Hello world";
  const helloSplit = hello.split(" ")
  const name = ["Laurent Niasme"];
  const devWeb = ["Développeur web"]
  const frontText = ["Front-end développeur"]
  return {
    props: {
      dataPrez : {
        hello:hello,
        helloSPlit :  hello.split(" "),
        name : name,
        devWeb : devWeb,
        frontText : frontText
      }
      
    }
  }
}
