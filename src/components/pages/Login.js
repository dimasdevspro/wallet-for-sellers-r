import login from '../../img/login.svg';
import Key from '../../img/Key.svg';
import Button from '../../img/Button.svg';

import styles from './Login.module.css';

function Login(){
    return (
        <div className={styles.body}>
            <h1>Login´s Seller</h1>
            <form  className={styles.form} method="post" action="./login">
                <div className={styles.input}>
                <label className={styles.sr_only} for="login-seller">Login</label>
                <img src={login} alt='Login'/>
                <input type='text' name='login' id='login-seller' placeholder='input your login'/>
                </div>
                <div className={styles.input}>
                <label className={styles.sr_only} for="password-seller">Password</label>
                <img src={Key} alt='password'/>
            <   input type='password' name='password' id='password-seller' placeholder='input your password'/> 
                </div>
            <button>
                <img src={Button} alt='button login'/>    
            </button>   
            </form>
        </div>
    )
}

export default Login