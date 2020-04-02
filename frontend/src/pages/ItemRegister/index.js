import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';

import './style.css';

import imgInput from '../../assets/imgInput.png';

export default function ItemRegister(){
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const token = localStorage.getItem('token');
    
    const data = {
        title,
        price,
        description
    }

    const history = useHistory();

    function handleCreateItem(e) {
        e.preventDefault();

        try {
            api.post('items', data, {
                headers: {
                    token: token,
                }
            });
            history.push('/items');
        } catch (err) {
            alert("Erro ao cadastrar novo produto, tente novamente.")
        }
    }

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
                    <form onSubmit={handleCreateItem}>
                        <input
                            className="input3"
                            placeholder="TÍTULO"
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                        <input
                            className="input3"
                            placeholder="VALOR EM REAIS"
                            type="text"
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />
                        <textarea
                            className="input3"
                            placeholder="DESCRIÇÃO"
                            type="textarea"
                            maxLength="150"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                        <button className="button" type="submit">SALVAR</button>
                    </form>
                    <div className="aside">
                        <img src={imgInput} alt="Input"/>
                    </div>
                </div>
            </div>
        </div>
    )
}