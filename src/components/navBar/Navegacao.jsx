import './NavBar'
import {XCircle} from 'phosphor-react';
import { Link } from "react-router-dom";



function MenuFlutuante ({ navegacao, aparecerNavegacao }) {


    
    return (

        
        <div className={`menuFlutuante ${navegacao ? 'show' : 'hide'}`}>
            <XCircle onClick={aparecerNavegacao} size={38} color='#FFFF' className="close-icon" />
            <ul className='navItens'>
                <li>
                    <Link onClick={aparecerNavegacao} to="/" className='navLink'>
                        Início
                    </Link>
                </li>

                <li>
                    <Link onClick={aparecerNavegacao} to="/servicos" className='navLink'>
                        Serviços
                    </Link>
                </li>

                <li>
                    <Link onClick={aparecerNavegacao} to="/sobre" className='navLink'>
                        Sobre mim
                    </Link>
                </li>

                <li>
                    <Link onClick={aparecerNavegacao} to="/contato" className='navLink'>
                        Contato
                    </Link>
                </li>

            </ul>
        </div>
    ) 
}

export default MenuFlutuante