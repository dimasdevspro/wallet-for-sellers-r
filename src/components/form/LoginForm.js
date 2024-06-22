import styles from './LoginForm.module.css';

import login from '../../img/login.svg';
import Key from '../../img/Key.svg';
import Button from '../../img/Button.svg';
import Input from '../form/Input';

function LoginForm({ handleSubmit, sellerData }){
    return (
        <form  className={styles.form}>
                <div className={styles.input}>
                <label className={styles.sr_only} htmlFor='login'>Login</label>
                <img src={login} alt='Login'/>
                <Input
                type='text' 
                name='login' 
                placeholder='input your login'
                />
                </div>
                <div className={styles.input}>
                <label className={styles.sr_only} htmlFor='password'>Password</label>
                <img src={Key} alt='password'/>
                <Input
                type='password'
                name='password' 
                placeholder='input your password'
                /> 
                </div>
            <button>
                <img src={Button} alt='button login'/>    
            </button>   
            </form>
    )
}

export default LoginForm