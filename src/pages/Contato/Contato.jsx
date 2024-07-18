import './Contato.css';
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { buscar } from '../../service/Service'

    export const Contato = () => {

        const [dados, setDados] = useState(null);

        useEffect(() => {
            const fetchData = async () => {
                await buscar('/apod', setDados);
            };
    
            fetchData();
        }, []);


        

        const form = useRef();
    
        const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
            .sendForm('service_gabvw5w', 'template_8c6hind', form.current, {
            publicKey: 'JXzbkwZAtMJ6BvjCU',
            })
            .then(
            () => {
                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
            );
        };

    


    return (
<>      
        <section className='container__contato'>
            <div className="container__contato-textos">
                    <h1>Entre em contato comigo</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora delectus, natus fugit deserunt pariatur consectetur ea quae nobis nulla doloremque porro voluptatibus temporibus exercitationem provident repudiandae nesciunt autem, tempore repellat?</p>
            </div>

        <div className="form-container">
            <h2>Envie seu Projeto</h2>
            <form ref={form} onSubmit={sendEmail}>
            <label>Nome</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Detalhes do projeto</label>
            <textarea name="message" />
            <input className='btn_form' type="submit" value="Enviar" />
            </form>
    </div>

    </section>

</>
    )
}



export default Contato