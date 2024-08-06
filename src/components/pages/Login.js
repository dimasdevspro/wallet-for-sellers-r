import { useContext } from 'react';
import LoginForm from '../form/LoginForm';
import styles from './Login.module.css';

import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Message from '../layout/Message';

function Login(){

    const {setAuth, auth} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation()
    let message = ''
    if (location.state){
        message = location.state.message
    }

    function getLogin(){
        fetch('https://e-wallet-for-sellers-api.vercel.app/sellers/', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            const loginInput = document.getElementById("login").value 
            const passwordInput = document.getElementById("password").value         
            const loginFind = data.find(seller => seller.login === loginInput)
            const passwordFind = data.find(seller => seller.password === passwordInput)
            if (loginFind && passwordFind) {
                fetch(`https://e-wallet-for-sellers-api.vercel.app/sellers/${loginFind._id}`, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                .then((resp) => resp.json())
                .then((data) => {
                    setAuth(true)
                    navigate("/logon", {state:data})     

                })
            }
            else {
            navigate("/login", {message:"Login or email incorrect!"})
            }    
        })
        .catch(err => console.log(err))
    }

    return (
        <div className={styles.body}>
            <h1>Login´s Seller</h1>
            {message && (<Message
            msg={message}
            type="error"
            />)}
            <LoginForm handleSubmit={getLogin}/>
        </div>
    )
}

export default Login