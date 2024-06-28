
import { isAuthenticated } from '../../auth';
import LoginForm from '../form/LoginForm';
import styles from './Login.module.css';

import { useNavigate } from 'react-router-dom';

function Login(){

    const navigate = useNavigate();

    function getLogin(){
        fetch('http://localhost:5000/seller', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            const auth = isAuthenticated(data)

           auth ? navigate("/logon", {data}) : navigate("/login")

        })
        .catch(err => console.log(err))
    }

    return (
        <div className={styles.body}>
            <h1>Login´s Seller</h1>
            <LoginForm handleSubmit={getLogin}/>
        </div>
    )
}

export default Login