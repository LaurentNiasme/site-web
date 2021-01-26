import React, {useState} from 'react';
import ButonNavBar from '../buton/ButonNavBar'
import styleNavBar from '../../styles/navBar.module.css'

const NavBar = ()=> {
    const [nameClick, setNameClick] = useState("")
    const handleClick = (name) => {
        setNameClick(name)
    }

    return (
        <div className={styleNavBar.nav_bar}>
            <div className={styleNavBar.buton_swith_page}>
                <ButonNavBar name={"Home"} route={"/"} url={false} urlIcone={"./images/icone_home.png"} handleClick= {handleClick} nameClick={nameClick}/>
                <ButonNavBar name={"About"} route={"/about"} url={false} urlIcone={"./images/icone_about.png"} handleClick= {handleClick} nameClick={nameClick}/>
                <ButonNavBar name={"SKills"} route={"/skills"} url={false} urlIcone={"./images/icone_skills.png"} handleClick= {handleClick} nameClick={nameClick}/>
                <ButonNavBar name={"Works"} route={"/works"} url={false} urlIcone={"./images/icone_works.png"} handleClick= {handleClick} nameClick={nameClick}/>
                <ButonNavBar name={"Contact"} route={"/contact"} url={false} urlIcone={"./images/icone_contact.png"} handleClick= {handleClick} nameClick={nameClick}/>
            </div>
        </div>
    )
}

export default NavBar