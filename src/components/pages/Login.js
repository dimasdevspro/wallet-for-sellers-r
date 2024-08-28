import { useContext, useState } from 'react';
import LoginForm from '../form/LoginForm';
import styles from './Login.module.css';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Message from '../layout/Message';

function Login() {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const { state } = useLocation();
    const [ message, setMessage ] = useState(state?.message || '')
    const [ typeMessage, setTypeMessage ] = useState(state?.typeMessage || '')

    function getLogin({login, password}) {
        fetch('https://e-wallet-for-sellers-api.vercel.app/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({login, password})
        })
        .then((resp) => {
            if(!resp.ok){
                return resp.json().then((data) => {
                    throw new Error(data.message || "An error occurred")
                })
            }
            return resp.json()
        })
        .then((data) => {
                    setAuth(true);
                    navigate("/logon", { state: data })
                })
        .catch(error => {
            setMessage(error.message)
            setTypeMessage("error")
            console.log(error.message)
        });
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
            <div className={styles.forgot_password}>
            <p>Forgot your password?<Link to='/forgot-password'> Click here!</Link></p>
            </div>
        </div>
    );
}

export default Login;
