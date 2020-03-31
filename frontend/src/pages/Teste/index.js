import React, {useState} from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import {FiLogIn} from 'react-icons/fi';

import './style.css';

import api from '../../services/api';

export default function Teste(){
    const [resposta, setResposta] = useState([]);

    api.get('teste').then(response => {
        setResposta(response.data.message)
    })

    return(
        <div className="test-container">
            <h1> Funcionou </h1>
            <h1> { resposta } </h1>
        </div>
    );
}