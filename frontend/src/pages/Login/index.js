import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

import './style.css';

import Logo from '../../assets/speedHealth.png';

import api from '../../services/api';

export default function Login(){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const data = {
        email,
        password
    }
    
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();
        
        try {
            const response = await api.post('login', data)
            localStorage.setItem('token', response.data.token)
            history.push('/items');
        } catch (err) {
            alert("Erro ao fazer o login, tente novamente.")
        }
    }

    return(
        <div className="loginContainer">
            <img src={Logo} alt='Speed Health'/>
            <div className="content">
                <div className="login">
                    <form onSubmit={handleLogin}>
                        <input
                            className="input"
                            type="email"
                            placeholder="E-MAIL"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            className="input"
                            type="password"
                            placeholder="SENHA"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <button onClick="#" className="button"> ENTRE </button>
                    </form>
                </div>
                <div className="ou">
                    <hr/>
                    <p>OU</p>
                    <hr/>
                </div>
                <div className="register">
                    <Link to="/pharmacy">
                        <button className="button"> CADASTRE-SE </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}