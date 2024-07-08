import { WhatsappLogo } from 'phosphor-react';
import './Btn.css'

function MyButton(props) {
    return (
        <>
        <a href={props.href}  className="btn">
        <WhatsappLogo size={28} weight="light" />
            {props.texto}
            </a>
        </>
    );
}


export default MyButton

