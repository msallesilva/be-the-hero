import React,{useState} from 'react';
import {Link,useHistory}from 'react-router-dom';
import './styles.css';
import heroImg from '../../assets/heroes.png';
import logImg from '../../assets/logo.svg';
import {FiLogIn} from 'react-icons/fi';

import api from '../../services/api';

export default function Logon(){
    const[id,setId] = useState('');
    const history = useHistory();

   async function handleLogin(e){
        e.preventDefault();
        
        try {
           const response = await api.post('sessions',{id});
           localStorage.setItem('ongId',id);
           localStorage.setItem('ongName',response.data.name);
           history.push('/profile');

        } catch (erro) {
            alert('Erro ao autenticar');
        }
    }
    
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logImg} alt="Be the Hero" />

                <form onSubmit={handleLogin}>
                    <h1> Faça seu Logon</h1>

                    <input 
                    placeholder="Sua ID" 
                    value={id}
                    onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroImg} alt="Heroes"/>
        </div>
        
    )
}