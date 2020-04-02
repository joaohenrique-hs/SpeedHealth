import React/*, {useState}*/ from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import {FiPower} from 'react-icons/fi';
import Logo from '../../assets/speedHealth.png';
import CardImg from '../../assets/cardImg.png';

export default function Items() {
    return (
        <div className="itemsContainer">
            <div className="navBar">
                <div className="navBarLeft">
                    <img src={Logo} alt="Speed Health"/>
                    <span className="welcome">OLÁ, EQUIPE POSTIT</span>
                </div>
                <div className="navBarRight">
                    <button className="button2">PERFIL</button>
                    <button className="logout"> <FiPower size={20} color="#37FF33"/> </button>
                </div>
            </div>
            <div className="feed">
                <Link style={{textDecoration: '#fff'}} to="/">
                    <div className="card">
                        <img src={CardImg} alt="img"/>
                        <aside className="cardContent">
                            <p className="title">NOME DO PRODUTO</p>
                            <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                            <div>
                                <div className="values">
                                    <p>VALOR</p>
                                    <p>R$120,00</p>
                                </div>
                                <hr/>
                            </div>
                        </aside>
                    </div>
                </Link>
                <Link style={{textDecoration: '#fff'}} to="/">
                    <div className="card">
                        <img src={CardImg} alt="img"/>
                        <aside className="cardContent">
                            <p className="title">NOME DO PRODUTO</p>
                            <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                            <div>
                                <div className="values">
                                    <p>VALOR</p>
                                    <p>R$120,00</p>
                                </div>
                                <hr/>
                            </div>
                        </aside>
                    </div>
                </Link>
                <Link style={{textDecoration: '#fff'}} to="/">
                    <div className="card">
                        <img src={CardImg} alt="img"/>
                        <aside className="cardContent">
                            <p className="title">NOME DO PRODUTO</p>
                            <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                            <div>
                                <div className="values">
                                    <p>VALOR</p>
                                    <p>R$120,00</p>
                                </div>
                                <hr/>
                            </div>
                        </aside>
                    </div>
                </Link>
                <Link style={{textDecoration: '#fff'}} to="/">
                    <div className="card">
                        <img src={CardImg} alt="img"/>
                        <aside className="cardContent">
                            <p className="title">NOME DO PRODUTO</p>
                            <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                            <div>
                                <div className="values">
                                    <p>VALOR</p>
                                    <p>R$120,00</p>
                                </div>
                                <hr/>
                            </div>
                        </aside>
                    </div>
                </Link>
                <Link style={{textDecoration: '#fff'}} to="/">
                    <div className="card">
                        <img src={CardImg} alt="img"/>
                        <aside className="cardContent">
                            <p className="title">NOME DO PRODUTO</p>
                            <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                            <div>
                                <div className="values">
                                    <p>VALOR</p>
                                    <p>R$120,00</p>
                                </div>
                                <hr/>
                            </div>
                        </aside>
                    </div>
                </Link>
                <Link style={{textDecoration: '#fff'}} to="/">
                    <div className="card">
                        <img src={CardImg} alt="img"/>
                        <aside className="cardContent">
                            <p className="title">NOME DO PRODUTO</p>
                            <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                            <div>
                                <div className="values">
                                    <p>VALOR</p>
                                    <p>R$120,00</p>
                                </div>
                                <hr/>
                            </div>
                        </aside>
                    </div>
                </Link>
            </div>
        </div>
    )
}