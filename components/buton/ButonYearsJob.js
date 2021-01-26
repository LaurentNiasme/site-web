import React,{useState, useEffect} from 'react';


const ButonYearsJob = ({data,handleClick, idBtn, btnSelected, styleAbout})=> {

    const [styleBtn, setStyleBtn] = useState()

    useEffect(()=> {
        if(btnSelected===idBtn){
            setStyleBtn(`${styleAbout.buttonClickYears} ${styleAbout.buttonClickYearsSelected}`)
        }else{
            setStyleBtn(`${styleAbout.buttonClickYears}`)
           
        }
    },[btnSelected])

    return(
        <div className={styleAbout.butonYearJob}>
            <input type='button' className={styleBtn} value={data.years}  onClick={(e)=>handleClick(e,data, idBtn)}/>
        </div>
    )
}

export default ButonYearsJob;