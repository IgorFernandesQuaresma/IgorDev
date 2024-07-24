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
                            <p>Soluções únicas, totalmente adaptadas às necessidades do seu negócio.</p>
                        </div>


                        <div className="container__servicos-card">
                            <FontAwesomeIcon icon={faCartShopping} className='icon_sobre'/>
                            <h2>Ecommerces</h2>
                            <p>Seu negócio está em expansão e você busca uma loja que inspire confiança e credibilidade aos seus clientes?</p>
                        </div>

                        <div className="container__servicos-card">
                            <FontAwesomeIcon icon={faMobile} className='icon_sobre' />
                            <h2>Landing Pages</h2>
                            <p>Precisa de uma página dedicada a um serviço ou produto específico? Temos a solução ideal para você!</p>
                        </div>

                        <div className="container__servicos-card">
                            <FontAwesomeIcon icon={faLightbulb} className='icon_sobre' />  
                            <h2>Suporte</h2>
                            <p>Já tem um projeto e precisa de manutenção? Eu estou aqui para ajudar!</p>
                        </div> 

                        </div>        
            </section>

            <section class="timeline">

                <h1>Seu projeto pronto em <span className='destaque'>5</span> steps</h1>

                <div class="container left">
                    <div class="content">
                        <h2>Fechamento</h2>
                        <p>Depois de entendermos juntos seu projeto, apresentarei uma proposta</p>
                    </div>
                </div>
                <div class="container right">
                    <div class="content">
                        <h2>Planejamento</h2>
                        <p>Em até 24h após o fechamento da proposta, apresentarei o planejamento dos nossos próximos passos</p>
                    </div>
                </div>

                <div class="container left">
                    <div class="content">
                        <h2>Desenvolvimento</h2>
                        <p>Com todos os itens apontados no planejamento em mãos iniciarei o desenvolvimento do seu projeto</p>
                    </div>
                </div>

                <div class="container right">
                    <div class="content">
                        <h2>Entrega</h2>
                        <p>Prezamos pela entrega sempre dentro do prazo e muito bem documentada</p>
                    </div>
                </div>

                <div class="container left">
                    <div class="content">
                        <h2>Manutenção</h2>
                        <p>Após o serviço entregue, ficamos a disposição para eventuais manutenções conforme descrito na proposta</p>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Servicos;

