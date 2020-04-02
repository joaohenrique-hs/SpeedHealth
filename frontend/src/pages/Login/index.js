import React/*, {useState}*/ from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import {FiLogIn} from 'react-icons/fi';

import './style.css';

import imageLogin from '../../assets/speedHealth.png';

// import api from '../../services/api';

export default function Login(){
    // const [resposta, setResposta] = useState([]);

    /*api.get('teste').then(response => {
        setResposta(response.data.message)
    })*/

    return(
        <div className="login-container">
            <img src={imageLogin} alt='Speed Health'/>
            <div className="content">
                <form>
                    <input type="email" placeholder="E-MAIL" />
                    <input type="password" placeholder="SENHA" />
                </form>
                <button onClick="#" className="button"> ENTRE </button>
                <div className="ou">
                    <hr/>
                    <p>OU</p>
                    <hr/>
                </div>
                <button onClick="#" className="button"> CADASTRE-SE </button>
            </div>
        </div>
    );
}