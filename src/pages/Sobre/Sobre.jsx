import perfil from '../../assets/perfil.jpg'
import './Sobre.css'
import Carrossel from '../../components/carrossel/Carrossel'
import MyButton from '../../components/Btn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJs, faReact, faWordpress, faElementor, faWix, faBootstrap, faNode } 
from '@fortawesome/free-brands-svg-icons';

function Sobre () {
    return (

        <>
        
        <section className="sobre__container">
            <div  className="sobre__container-foto">
                <img src={perfil} alt="Logo" className='logo' />
            </div>

            <div  className="sobre__container-textos">
                <h1>Um pouco sobre mim</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo ex labore impedit omnis! Facere fugit praesentium tempora doloribus quod pariatur repellendus deleniti dolorum distinctio ipsa dolor maxime ut, cum aliquid!</p>
                <div className='div-botao'>
                <MyButton href = 'https://api.whatsapp.com/send?phone=5511997710780&text=Ola%20eu%20vim%20pelo%20teu%20site,%20e%20gostaria%20de%20um%20or%C3%A7amento' 
                    texto = 'Fale comigo'/>
                </div>
            </div>
        </section>

        <section className="projetos__container">

            <div  className="projetos__container-textos">
                <h1>Meus Projetos</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo ex labore impedit omnis! Facere fugit praesentium tempora doloribus quod pariatur repellendus deleniti dolorum distinctio ipsa dolor maxime ut, cum aliquid!</p>
                
            </div>

            <div  className="projetos__container-cards">
                <Carrossel/>
            </div>
        </section>


        <section className="habilidades__container">

            <div  className="habilidades__container-textos">
                <h1>Minhas Habilidades</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo ex labore impedit omnis! Facere fugit praesentium tempora doloribus quod pariatur repellendus deleniti dolorum distinctio ipsa dolor maxime ut, cum aliquid!</p>
                <div className='div-botao'>
                <MyButton href = 'https://api.whatsapp.com/send?phone=5511997710780&text=Ola%20eu%20vim%20pelo%20teu%20site,%20e%20gostaria%20de%20um%20or%C3%A7amento' 
                    texto = 'Fale comigo'/>
                </div>
            </div>

            <div  className="habilidades__container-cards">
                
                <div className='container-icon'>
                    <FontAwesomeIcon icon={faHtml5} className='icon' />
                    <p>HTML</p>
                </div>

                <div className='container-icon'>
                    <FontAwesomeIcon icon={faCss3Alt} className='icon' />
                    <p>CSS</p>
                </div>

                <div className='container-icon'>
                    <FontAwesomeIcon icon={faJs} className='icon' />
                    <p>JavaScript</p>
                </div>

                <div className='container-icon'>
                    <FontAwesomeIcon icon={faReact} className='icon' />
                    <p>React</p>
                </div>

                <div className='container-icon'>
                    <FontAwesomeIcon icon={faWordpress} className='icon' />
                    <p>Wordpress</p>
                </div>

                <div className='container-icon'>
                    <FontAwesomeIcon icon={faElementor} className='icon' />
                    <p>Elementor</p>
                </div>

                <div className='container-icon'>
                    <FontAwesomeIcon icon={faWix}  className='icon'/>
                    <p>Wix</p>
                </div>

                <div className='container-icon'>
                    <FontAwesomeIcon icon={faBootstrap} className='icon' />
                    <p>Bootstrap</p>
                </div>

                <div className='container-icon'>
                    <FontAwesomeIcon icon={faNode} className='icon' />
                    <p>Node</p>
                </div>
            </div>
        </section>

        </>
        
    )
}

export default Sobre