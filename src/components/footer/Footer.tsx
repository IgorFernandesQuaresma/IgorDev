import { GithubLogo, InstagramLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react"
import React from "react"
import './Footer.css'


function Footer() {

    return (
        <>
        <div className='container_home-icones'>
        <a href="https://www.instagram.com/ifernandesdev/">
        <InstagramLogo size={32} />
        </a>

        <a href='https://github.com/IgorFernandesQuaresma'>
        <GithubLogo size={32} />
        </a>

        <a href='https://api.whatsapp.com/send?phone=5511997710780&text=Ola%20eu%20vim%20pelo%20teu%20site,%20e%20gostaria%20de%20um%20or%C3%A7amento'>
        <WhatsappLogo size={32}  />
        </a>

        <a href='https://www.linkedin.com/in/ifernandesq/' >
        <LinkedinLogo size={32} />
        </a>
        
    </div>

    </>
    ) 
    
}


export default Footer