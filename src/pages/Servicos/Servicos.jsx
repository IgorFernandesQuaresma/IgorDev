import { faCode, faCartShopping, faMobile, faLightbulb} from '@fortawesome/free-solid-svg-icons'; // Correção aqui
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Servicos.css'
function Servicos () {
    return (
        <>
            <section className="container__servicos">
                
                        <h1>Como eu consigo te ajudar?</h1>

                    <div className="container__servicos_cards">

                        <div className="container__servicos-card">
                            <FontAwesomeIcon icon={faCode} className='icon_sobre' />
                            <h2>Sites instucionais</h2>
                            <p>Soluções unicas, totalmente adaptadas para a necessidade do seu negócio</p>
                        </div>


                        <div className="container__servicos-card">
                            <FontAwesomeIcon icon={faCartShopping} className='icon_sobre'/>
                            <h2>Ecommerces</h2>
                            <p>Sua operação esta crescendo e você quer uma loja que traga confiança aos seus clientes?</p>
                        </div>

                        <div className="container__servicos-card">
                            <FontAwesomeIcon icon={faMobile} className='icon_sobre' />
                            <h2>Landing Pages</h2>
                            <p>Precisa de uma página focada em um serviço ou produto, essa é a melhor solução</p>
                        </div>

                        <div className="container__servicos-card">
                            <FontAwesomeIcon icon={faLightbulb} className='icon_sobre' />  
                            <h2>Suporte</h2>
                            <p>Ja possui um projeto e precisa de manutenção? Eu também posso te ajudar</p>
                        </div> 

                        </div>        
            </section>

            <section class="timeline">

                <h1>Seu projeto pronto em X steps</h1>

                <div class="container left">
                    <div class="content">
                        <h2>Data 1</h2>
                        <p>Texto do lado esquerdo</p>
                    </div>
                </div>
                <div class="container right">
                    <div class="content">
                        <h2>Data 2</h2>
                        <p>Texto do lado direito</p>
                    </div>
                </div>

                <div class="container left">
                    <div class="content">
                        <h2>Data 1</h2>
                        <p>Texto do lado esquerdo</p>
                    </div>
                </div>

                <div class="container right">
                    <div class="content">
                        <h2>Data 2</h2>
                        <p>Texto do lado direito</p>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Servicos;

