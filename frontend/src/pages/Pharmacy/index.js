import React, {useState} from 'react';
import { useHistory, Link } from 'react-router-dom';
// import {FiLogIn} from 'react-icons/fi';

import api from '../../services/api';

import './style.css';

import Logo from '../../assets/speedHealth.png';

export default function Pharmacy(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    // const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            password,
            cnpj,
            whatsapp,
            address,
            city,
            uf
        }

        try {
            const response = await api.post('pharmacy', data);
            if (response.status === 200) {
                history.push('/');
            }else {
                throw new Error ('')
            }
        } catch (err) {
            alert("Erro ao realizar o cadastro, tente novamente");
        }
    }

    return (
        <div className="pharmacyContainer">
            <div className="form">
                <img src={Logo} alt='Speed Health'/>
                <p className="registerTitle">CADASTRO</p>
                <form onSubmit={handleRegister}>
                    <input 
                        className="input2"
                        placeholder="NOME"
                        value={name}
                        onChange = {e => setName(e.target.value)}
                    />
                    <input
                        className="input2"
                        placeholder="CNPJ"
                        value={cnpj}
                        onChange = {e => setCnpj(e.target.value)}
                    />
                    <input
                        className="input2"
                        type="email"
                        placeholder="E-MAIL"
                        value={email}
                        onChange = {e => setEmail(e.target.value)}
                    />
                    <input
                        className="input2"
                        type="password"
                        placeholder="SENHA"
                        value={password}
                        onChange = {e => setPassword(e.target.value)}
                    />
                    <input
                        className="input2"
                        placeholder="TELEFONE"
                        value={whatsapp}
                        onChange = {e => setWhatsapp(e.target.value)}
                    />
                    <input
                        className="input2"
                        placeholder="ENDEREÇO"
                        value={address}
                        onChange = {e => setAddress(e.target.value)}
                    />
                    <div className="inputGroup">
                        <input
                            className="input2"
                            style={{width: '20%'}}
                            maxLength="2"
                            placeholder="UF"
                            value={uf}
                            onChange = {e => setUf(e.target.value)}
                        />
                        <input
                            className="input2"
                            style={{width: '80%'}}
                            placeholder="CIDADE"
                            value={city}
                            onChange = {e => setCity(e.target.value)}
                        />
                    </div>
                    <button className="button" type="submit">CADASTRAR-SE</button>
                </form>
                <div className="ou">
                    <hr/>
                    <p>JÁ TEM CADASTRO?</p>
                    <hr/>
                </div>
                <div className="login">
                    <Link to="/">
                        <button className="button"> LOGAR </button>
                    </Link>
                </div>
            </div>
            <aside>
                <div className="card">
                    <p className="cardTitle">QUEM SOMOS?</p>
                    <p className="cardDescription">A NOSSA PLATAFORMA APRESENTA SOLUÇÃO DE DELIVERY DE MEDICAMENTOS. CONECTE SUA FARMÁCIA COM A SPEED HEALTH E DIGITALIZE SUAS ENTREGAS DE PRODUTOS, POR MEIO DE PAGAMENTO ONLINE E SEGURO E DELIVERY OPERANTE NA SUA CIDADE...</p>
                    <p className="cardReq">COMECE HOJE MESMO, CADASTRE-SE!</p>
                </div>
            </aside>
        </div>
    )
}