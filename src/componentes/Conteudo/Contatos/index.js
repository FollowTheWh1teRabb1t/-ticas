import React from 'react';
import './style.css';

export default function Contatos() {
    return (
        <section className='section-contatos'>
            <h1>FALE CONOSCO</h1>
            <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento</p>
            <div className='box-info'>
                <div className='box-contato'>
                    <p>Contato</p>
                    <span> <img className='img-before' src='assets/local.png'></img>Nova iguaçu, RJ</span>
                    <span><img className='img-before' src='assets/telefone.png'></img> (21) 9999-9999</span>
                    <span><img className='img-before' src='assets/email.png'></img> contato@oticavida.com</span>
                </div>
                <div className='box-redes-sociais'>
                    <p>Nossas Redes Sociais</p>
                    <span><img className='img-before' src='assets/fb.png'></img> /OticaVida</span>
                    <span><img className='img-before' src='assets/ig.png'></img> @oticavidarj</span>
                    <span><img className='img-before' src='assets/tt.png'></img> @oticavidarj</span>
                </div>
            </div>        
        </section>
    )
}