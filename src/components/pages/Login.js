import { useContext } from 'react';
import LoginForm from '../form/LoginForm';
import styles from './Login.module.css';

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function Login(){

    const {setAuth, auth} = useContext(AuthContext)
    console.log('auth1', auth)

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
            const loginInput = document.getElementById("login").value 
            const passwordInput = document.getElementById("password").value         
            const loginFind = data.find(seller => seller.login === loginInput)
            const passwordFind = data.find(seller => seller.password === passwordInput)
            
        if (loginFind && passwordFind) {
            setAuth(true)
            console.log("Login sucessfuly!")
            navigate("/logon")  
            console.log('auth2', auth)
            return true         
        }else {
            console.log("Login or password is wrong!") 
            return false
            }    
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