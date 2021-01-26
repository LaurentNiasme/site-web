import React from 'react';

const TextJob =({data, styleAbout}) => {
    
    const createTextJob =() => {
        return (
            //Le texte venant des data est envoyé dans le rendu
            <div className={styleAbout.listJob}>
                {
                    data.text.map((text)=> {
                        if (text==="br"){
                            return (
                                   <br> 
                                   </br> 
                            )
                        }else {

                            return(
                                <div className={styleAbout.textJob}>
                                    
                                        {text}
                                    
                                </div>
                            )
                        }
                    })
                }

            </div>
        )
    }
    return(
        
        <div className={styleAbout.mainTextJob}>
            <div className={styleAbout.yearsJob}>
                {data.underYears}
            </div>
            <ul>
            {createTextJob()}
            </ul>
            

        </div>
    )
}

export default TextJob