import React, {useState} from 'react';
import ReactMarkdown from "react-markdown/with-html";
import { createPortal } from 'react-dom';
import Link from 'next/link';
import styleCarnetNote from '../../styles/carnetNote.module.css';


export default function MainBlog ({posts, onClick}) {

    const [post, setPost] = useState()
    const showPost = () => {
   
       
        return(
            <>

            {posts.map(({ data: { title, description }, idData }) =>{
                    
                 const path = `/carnets/${idData}`
            return (
                <div className={styleCarnetNote.containArticle}> 
                    <Link href={path} as={`${path}.html`} >
                        <a  >
                            <article key={title}  >
                                <header>
                                    <h3>{title}</h3>
                                    {/* <span>{date}</span> */}
                                </header>
                                <section>
                                    <p>{description}</p>
                                </section>
                            </article>
                        </a>
                    </Link>
                </div>
        )} )}

     </>
        )
    }

    return(
       <div className={styleCarnetNote.container}>
            {showPost()}
       </div>
    )
}