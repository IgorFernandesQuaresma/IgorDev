import MyButton from '../components/Btn';
import { App } from '../particulas';

import './Home.css'



function Home() {

    

    return (
        

        <section className="container_home">
        <App/>
        <div className='container_home-textos'>
        <div className='container_home-textos-titulo'>
        <h1 className='titulo'>Igor: </h1>
        <h1 className='subtitulo'>Desenvolvedor full stack</h1>
        </div>
        <p>Solicite seu orçamento</p>
        <div className='container_home-btn'>
        <MyButton href = 'https://api.whatsapp.com/send?phone=5511997710780&text=Ola%20eu%20vim%20pelo%20teu%20site,%20e%20gostaria%20de%20um%20or%C3%A7amento' 
        texto = 'Whatsapp'/>
        </div>
        </div>

    </section>


    );
}

export default Home;
