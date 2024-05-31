import Login2 from '../../img/Login2.svg';
import Key from '../../img/Key.svg';
import Button from '../../img/Button.svg';

import styles from './Login.module.css';

function Login(){
    return (
        <div className={styles.body}>
            <form method="post" action="./login">
                <label className={styles.sr_only} for="login-seller">Login</label>
                <img src={Login2} alt='Login'/>
            <input type='text' name='login' id='login-seller' placeholder='input your nickname'/>
                <label className={styles.sr_only} for="password-seller">Password</label>
                <img src={Key} alt='password'/>
            <input type='password' name='password' id='password-seller' placeholder='input your password'/> 
            <button>
                <img src={Button} alt='button login'/>    
            </button>   
            </form>
        </div>
    )
}

export default Login