import { useContext, useState } from 'react';
import LoginForm from '../form/LoginForm';
import styles from './Login.module.css';

import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Message from '../layout/Message';

function Login() {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const { state } = useLocation();
    const [ message, setMessage ] = useState(state?.message || '')
    const [ typeMessage, setTypeMessage ] = useState(state?.typeMessage || '')

    function getLogin() {
        fetch('https://e-wallet-for-sellers-api.vercel.app/sellers/', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            const loginInput = document.getElementById("login").value;
            const passwordInput = document.getElementById("password").value;
            const seller = data.find(seller => seller.login === loginInput && seller.password === passwordInput);

            if (seller) {
                fetch(`https://e-wallet-for-sellers-api.vercel.app/sellers/${seller._id}`, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                .then((resp) => resp.json())
                .then((data) => {
                    setAuth(true);
                    navigate("/logon", { state: data });
                });
            } else {
                setMessage("Login or password incorrect!")
                setTypeMessage("error")
            }    
        })
        .catch(err => console.log(err));
    }

    return (
        <div className={styles.body}>
            <h1>Login´s Seller</h1>
            {message && (
                <Message
                    msg={message}
                    type={typeMessage}
                />
            )}
            <LoginForm handleSubmit={getLogin} />
        </div>
    );
}

export default Login;
