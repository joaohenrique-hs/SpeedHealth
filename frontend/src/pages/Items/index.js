import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';

import api from '../../services/api';

import './style.css';

import {FiPower} from 'react-icons/fi';
import Logo from '../../assets/speedHealth.png';
import CardImg from '../../assets/cardImg.png';

export default function Items() {
    const [items, setItems] = useState([]);
    const token = localStorage.getItem('token');

    const history = useHistory();

    useEffect(() => {
        api.get('items', {
            headers: {
                token: token,
            }
        }).then(response => {
            setItems(response.data);
        })
    }, [token]);

    console.log(items);

    function handleLogout () {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="itemsContainer">
            <div className="navBar">
                <div className="navBarLeft">
                    <img src={Logo} alt="Speed Health"/>
                    <span className="welcome">OLÁ, EQUIPE POSTIT</span>
                </div>
                <div className="navBarRight">
                    <button className="button2">PERFIL</button>
                    <button onClick={handleLogout} className="logout"> <FiPower size={20} color="#37FF33"/> </button>
                </div>
            </div>
            <div className="feed">
                {items.map(item => (
                    <Link style={{textDecoration: '#fff'}} to="/items/modify">
                        <div className="card" key={item.id}>
                            <img src={CardImg} alt="img"/>
                            <aside className="cardContent">
                                <p className="title">{item.title}</p>
                                <p className="description">{item.description}</p>
                                <div>
                                    <div className="values">
                                        <p>VALOR</p>
                                        <p>{Intl.NumberFormat('pt-BR', {style: "currency", currency: "BRL"}).format(item.price)}</p>
                                    </div>
                                    <hr/>
                                </div>
                            </aside>
                        </div>
                    </Link>
                ))}
            </div>
            <Link to="/items/register">
                <div className="add">
                    <button> <FiPlus size={60} color={'#fff'} /> </button>
                </div>
            </Link>
        </div>
    )
}