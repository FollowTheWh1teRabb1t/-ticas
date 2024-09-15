import React from 'react';
import './style.css'

export default function Topo() {
    return (
        <header>
            <div className='box-imagem'>
                <img className='logo' src='assets/logo.png'></img>
            </div>
            <nav>
                <a>PRODUTOS</a>
                <a>SOBRE</a>
                <a>CONTATO</a>
            </nav>
        </header>
    )
}