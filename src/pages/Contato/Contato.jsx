import './Contato.css';
import React, { useRef, useState, useEffect } from 'react';
import {useNavigate } from "react-router-dom"
import emailjs from '@emailjs/browser';
import { buscar } from '../../service/Service'
import { RotatingLines } from 'react-loader-spinner';
import { ToastAlert } from '../../ultil/ToastAlert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

    export const Contato = () => {

        const [dados, setDados] = useState(null);
        const [isLoading, setIsLoading] = useState(false);
        const navigate = useNavigate()

        useEffect(() => {
            const fetchData = async () => {
                await buscar('/apod', setDados);
            };
    
            fetchData();
        }, []);


        
        
        const form = useRef();
    
        const sendEmail = (e) => {
            e.preventDefault();
            setIsLoading(true);
        
                emailjs
                .sendForm('service_gabvw5w', 'template_8c6hind', form.current, 'JXzbkwZAtMJ6BvjCU')
                .then(
                    (result) => {
                    console.log('Email enviado com sucesso:', result.text);
                    ToastAlert('Email enviado com sucesso', 'sucesso');
                    setIsLoading(false);
                    setTimeout(() => {
                        navigate("/");
                      }, 2000);
                    console.log(isLoading)
                    },
                    (error) => {
                    console.error('Erro ao enviar email:', error.text);
                    ToastAlert('Não conseguimos enviar o email', 'erro');
                    setIsLoading(false);
                    }
                );
            };

        


    return (
<>      
        <section className='container__contato'>
            <div className="container__contato-textos">
                    <h1>Entre em contato comigo</h1>
                    <p>Em até 24 horas, retornarei seu contato para entendermos juntos como posso atendê-lo melhor.</p>
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

            <div className='container_btn'>
            <button className='btn_form' type="submit" disabled={isLoading}>
              {isLoading ? (
                <RotatingLines
                  strokeColor="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="20"
                  visible={true}
                />
              ) : (
                <span>Enviar</span>
              )}
            </button>
            </div>
            </form>
    </div>
    <ToastContainer />
    </section>

</>
    )
}



export default Contato