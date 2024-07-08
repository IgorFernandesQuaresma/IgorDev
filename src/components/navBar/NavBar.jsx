import React, { useState } from 'react';
import './NavBar.css'
import { List} from 'phosphor-react';
import logo from '../../assets/logo.png'
import MenuFlutuante from './Navegacao';



function NavBar() {

    const [ navegacao, setNavegacao ] = useState(false);


    function aparecerNavegacao () {
        if (navegacao == false) {
            setNavegacao (navegacao == true) 
            
        } setNavegacao (navegacao == false) 

        console.log(navegacao)
    }

    return (
        <>

        <MenuFlutuante navegacao={navegacao} aparecerNavegacao={aparecerNavegacao} />
            <nav className="navBar">
                <div className="navBar_icons">
                    <img src={logo} alt="Logo" className='logo' />
                </div>


                <div className="navBar_icons">


                <List onClick={aparecerNavegacao} size={38} weight="bold" />
                

                </div>
            </nav>
        </>
    )
} 

export default NavBar