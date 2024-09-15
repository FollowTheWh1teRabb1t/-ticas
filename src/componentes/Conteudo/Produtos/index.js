import React from 'react';
import './style.css'

export default function Produtos() {
    return (
        <section className='main'>
            <h1 className='h1-produtos'>Nossos Produtos</h1>
            <p className='p-produtos'>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
            <p className='p-produtos'>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
            <div className='box-cards'>
                <div className='card'>
                    <h2>Óculos de grau</h2>
                    <img src='assets/oculos01.png'></img>
                    <p>R$ 500,00</p>
                </div>
                <div className='card'>
                    <h2>Óculos transition</h2>
                    <img src='assets/oculos02.png'></img>
                    <p>R$ 750,00</p>
                </div>
            </div>
            <div className='box-cards'>
            <div className='card'>
                    <h2>Óculos de sol</h2>
                    <img src='assets/oculos03.png'></img>
                    <p>R$ 700,00</p>
                </div>
                <div className='card'>
                    <h2>Óculos infantil</h2>
                    <img src='assets/oculos04.png'></img>
                    <p>R$ 500,00</p>
                </div>
            </div>
            <div className='box-list'>
                <ul>
                    <h3>NOSSOS PRODUTOS INCLUEM</h3>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </div>
        </section>
    )
}