import React/*, {useState}*/ from 'react';
import { Link/*, useHistory*/ } from 'react-router-dom';
// import {FiLogIn} from 'react-icons/fi';

import './style.css';

import Logo from '../../assets/speedHealth.png';

export default function Pharmacy(){
    return (
        <div className="pharmacyContainer">
            <div className="form">
                <p className="registerTitle">CADASTRO</p>
                <form onSubmit="#">
                    <input className="input2" placeholder="NOME"></input>
                    <input className="input2" placeholder="CNPJ"></input>
                    <input className="input2" type="email" placeholder="E-MAIL"></input>
                    <input className="input2" type="password" placeholder="SENHA"></input>
                    <input className="input2" placeholder="TELEFONE"></input>
                    <input className="input2" placeholder="ENDEREÇO"></input>
                    <div className="inputGroup">
                        <input className="input2" style={{width: 80}} maxLength="2" placeholder="UF"></input>
                        <input className="input2" style={{width: 420}} placeholder="CIDADE"></input>
                    </div>
                </form>
                <button className="button">CADASTRAR-SE</button>
            </div>
            <aside>
                <img src={Logo} alt='Speed Health'/>
                <div className="card">
                    <p className="cardTitle">QUEM SOMOS?</p>
                    <p className="cardDescription">A NOSSA PLATAFORMA APRESENTA SOLUÇÃO DE DELIVERY DE MEDICAMENTOS. CONECTE SUA FARMÁCIA COM A SPEED HEALTH E DIGITALIZE SUAS ENTREGAS DE PRODUTOS, POR MEIO DE PAGAMENTO ONLINE E SEGURO E DELIVERY OPERANTE NA SUA CIDADE...</p>
                    <p className="cardReq">COMECE HOJE MESMO, CADASTRE-SE!</p>
                </div>
            </aside>
        </div>
    )
}