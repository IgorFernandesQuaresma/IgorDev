import perfil from '../../assets/perfil.jpg'
import './Sobre.css'
import Carrossel from '../../components/carrossel/Carrossel'

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

        </>
        
    )
}

export default Sobre