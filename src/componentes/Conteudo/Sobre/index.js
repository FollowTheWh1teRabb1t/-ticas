import React from 'react';
import './style.css'

export default function Sobre() {
    return (
        <section className='section-sobre'>
            <h1 className='title'>QUEM SOMOS NÓS?</h1>
            <div className='box-text'>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de</p>
                <p>renda mais baixa, sempre com o objetivo de proporcionar ao cliente um bom atendimento, qualidade e preço baixo.</p>
            </div>
            <div className='box-sobre'>
                <div className='card-sobre'>
                    <img src='assets/loja.png'></img>
                </div>
                <div className='card-sobre'>
                    <h2>NOSSAS FILIAIS</h2>
                    <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                </div>
            </div>
            <div className='box-sobre'>
                <div className='card-sobre'>
                    <h2>ATENDIMENTO FLEXÍVEL</h2>
                    <p>Nossa equipe é treinada para te atender</p>
                </div>
                <div className='card-sobre'>
                    <img src='assets/atendimento.png'></img>
                </div>
            </div>
        </section>
    )
}