import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import {FiLogIn} from 'react-icons/fi'

import api from '../../services/api';

import './style.css';

export default function Teste(){
    const response = await api.get('/', { message });

    return(
        <div className="test-container">
            <h1> {response} </h1>
        </div>
    );
}