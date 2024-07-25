import React, { useState } from 'react';
import './NavBar.css'
import { List} from 'phosphor-react';
import logo from '../../assets/logo.png'
import MenuFlutuante from './Navegacao';
import { Link } from "react-router-dom";



function NavBar() {

    const [ navegacao, setNavegacao ] = useState(false);


        function aparecerNavegacao () {
            setNavegacao(!navegacao);
        }

    return (
        <>

        <MenuFlutuante navegacao={navegacao} aparecerNavegacao={aparecerNavegacao} />
            <nav className="navBar">
            <Link to="/" className='navLink'>
                    <div className="navBar_icons">
                            <img src={logo} alt="Logo" className='logo' />
                    </div>
            </Link>
                


                <div className="navBar_icons">


                <List onClick={aparecerNavegacao} size={38} weight="bold" />
                

                </div>
            </nav>
        </>
    )
} 

export default NavBar