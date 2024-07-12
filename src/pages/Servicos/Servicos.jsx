import { faCode, faCartShopping, faMobile, faLightbulb} from '@fortawesome/free-solid-svg-icons'; // Correção aqui
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Servicos.css'
function Servicos () {
    return (
        <>
            <section className="container__servicos">
                
                        <h1>Como euconsigo te ajudar?</h1>

                        <div className="container__servicos-card">
                            <FontAwesomeIcon icon={faCode} />
                            <h2>Sites instucionais</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam sit amet asperiores blanditiis commodi laborum aperiam, quo soluta assumenda repellat iure similique voluptatem impedit ipsa! Labore voluptatibus itaque veritatis veniam?</p>
                        </div>


                        <div className="container__servicos-card">
                            <FontAwesomeIcon icon={faCartShopping} />
                            <h2>Landing Pages</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam sit amet asperiores blanditiis commodi laborum aperiam, quo soluta assumenda repellat iure similique voluptatem impedit ipsa! Labore voluptatibus itaque veritatis veniam?</p>
                        </div>

                        <div className="container__servicos-card">
                            <FontAwesomeIcon icon={faMobile} />
                            <h2>Landing Pages</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam sit amet asperiores blanditiis commodi laborum aperiam, quo soluta assumenda repellat iure similique voluptatem impedit ipsa! Labore voluptatibus itaque veritatis veniam?</p>
                        </div>

                        <div className="container__servicos-card">
                            <FontAwesomeIcon icon={faLightbulb} />  
                            <h2>Suporte</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam sit amet asperiores blanditiis commodi laborum aperiam, quo soluta assumenda repellat iure similique voluptatem impedit ipsa! Labore voluptatibus itaque veritatis veniam?</p>
                        </div>         
            </section>

            <section class="timeline">
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

