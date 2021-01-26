import fs from 'fs';
//i import fs in the files dataBlog
import path from 'path';
import matter from "gray-matter";

// process.cwd() that s the folder where we invok node
const notesDirectory = path.join(`${process.cwd()}/data/carnet`)
// with fs we can read the folder notesDirectory
const filenames = fs.readdirSync(notesDirectory)

// create a function who are not a react function
export  function getAllNotePath () {
    const files= fs
    return(
        filenames.map(filename=> {
        const idData =  filename.replace(/\.md$/, '')
    
       
        return {
            params : {
                id: idData
            }
        }
        })
    )
}

export function getAllDataNote () {
    const notes = filenames.map( (filename) => {
        const idData =  filename.replace(/\.md$/, '')
        const metaData = fs.readFileSync(`${process.cwd()}/data/carnet/${filename}`).toString();
        const {data, content} = matter(metaData);
        return{
            idData:idData,
            data:data,
            content:content
        }
    })
    return(
        notes
    )
}

export async function getOneDataNote (id) {
    const note = await filenames.filter( (filename) => (`${id}.md`===filename)).map((filename => {
        const metaData = fs.readFileSync(`${process.cwd()}/data/carnet/${filename}`).toString();
            const {data, content} = matter(metaData);
            const dataNote = {
                data:data,
                content:content
            }
        
            return{
                dataNote
            }
    }))

    return(
        note
    )
}