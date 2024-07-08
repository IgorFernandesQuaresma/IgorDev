import React from 'react';
import './Card.css'


function CardProjetos({ projeto }) {
    return (
        <div className='card_container'>
            <img src={projeto.foto} alt={`Foto do ${projeto.nome}`} />
            <div className='card_textos'>
                <h1 className='card_titulo'>
                    {projeto.nome}
                </h1>
                <p className='card_descricao'>
                    {projeto.descricao}
                </p>
            </div>
        </div>
    );
}

export default CardProjetos;