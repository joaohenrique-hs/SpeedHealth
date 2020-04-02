import React/*, {useState}*/ from 'react';
import { Link } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './style.css';

import imgInput from '../../assets/imgInput.png';

export default function ItemRegister(){
    return (
        <div className="itemRegisterContainer">
            <div className="card">
                <div className="header">
                    <div>
                        <Link to="/items">
                            <FiArrowLeft size={50} color="#37FF33"/>
                        </Link>  
                        <spam>CADASTRAR PRODUTO</spam>
                    </div>
                    <hr/>
                </div>
                <div className="content">
                    <form>
                        <input className="input3" placeholder="TÍTULO" type="text"/>
                        <input className="input3" placeholder="VALOR EM REAIS" type="text"/>
                        <textarea className="input3" placeholder="DESCRIÇÃO" type="textarea"/>
                    </form>
                    <div className="aside">
                        <img src={imgInput} alt="Input"/>
                        <div>
                            <Link to="/items">
                                <button className="button3">CANCELAR</button>
                            </Link>
                            <button className="button">SALVAR</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}