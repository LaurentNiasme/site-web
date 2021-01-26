
import React, {useState, useEffect} from 'react';
import ReactMarkdown from "react-markdown/with-html";
import Link from 'next/link';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";


const CodeBlock = ({ language, value }) => {
    return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
  };

export default function MainNote ({noteData}) {
   

    return(
        <div>
            
            <Link href='/carnet_note' as= '/carnet_note.html'>
                <a>
                    retour
                </a>
            </Link>
                    <ReactMarkdown escapeHtml={false} source={noteData[0].dataNote.content} renderers={{ code: CodeBlock }} />
        </div>
    )
}