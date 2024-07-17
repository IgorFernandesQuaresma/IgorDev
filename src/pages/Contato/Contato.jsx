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

        <div className="form-container">
            <h2>Envie seu Projeto</h2>
            <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
            </form>
    </div>

</>
    )
}



export default Contato