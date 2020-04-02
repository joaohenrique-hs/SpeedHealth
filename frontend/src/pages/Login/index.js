import React/*, {useState}*/ from 'react';
import { Link/*, useHistory*/ } from 'react-router-dom';
// import {FiLogIn} from 'react-icons/fi';

import './style.css';

import Logo from '../../assets/speedHealth.png';

// import api from '../../services/api';

export default function Login(){
    // const [resposta, setResposta] = useState([]);

    /*api.get('teste').then(response => {
        setResposta(response.data.message)
    })*/

    return(
        <div className="loginContainer">
            <img src={Logo} alt='Speed Health'/>
            <div className="content">
                <form>
                    <input className="input" type="email" placeholder="E-MAIL" />
                    <input className="input" type="password" placeholder="SENHA" />
                </form>
                <button onClick="#" className="button"> ENTRE </button>
                <div className="ou">
                    <hr/>
                    <p>OU</p>
                    <hr/>
                </div>
                <Link to="/pharmacy">
                    <button className="button"> CADASTRE-SE </button>
                </Link>
            </div>
        </div>
    );
}