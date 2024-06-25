
import LoginForm from '../form/LoginForm';
import styles from './Login.module.css';

function Login(){

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
            if (loginFind.login !== loginInput){
                const msgErrorLogin = {message: "Login don´t exist!"}
                console.log(msgErrorLogin)
            }if (loginFind.password !== passwordInput){
                const msgErrorPassword = {message: "Password is wrong..."}
                console.log(msgErrorPassword)
            }else{
                console.log(loginFind)

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