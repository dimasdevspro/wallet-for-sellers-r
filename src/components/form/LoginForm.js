import { useState } from 'react';

import styles from './LoginForm.module.css';

import login from '../../img/login.svg';
import Key from '../../img/Key.svg';
import Button from '../../img/Button.svg';
import Input from '../form/Input';

function LoginForm({ handleSubmit, sellerData }){
    
    const [seller, setSeller] = useState(sellerData)
    
    const submit = (e) => {
        e.preventDefault()
        handleSubmit(seller)
    }

    function handleChange(e) {
        setSeller({...seller, [e.target.name]: e.target.value})
        console.log(seller)
    }
    return (
        <form  onSubmit={submit} className={styles.form} >
                <div className={styles.input}>
                <label className={styles.sr_only} htmlFor='login'>Login</label>
                <img src={login} alt='Login'/>
                <Input
                type='text' 
                name='login' 
                placeholder='input your login'
                handleOnChange={handleChange}
                />
                </div>
                <div className={styles.input}>
                <label className={styles.sr_only} htmlFor='password'>Password</label>
                <img src={Key} alt='password'/>
                <Input
                type='password'
                name='password' 
                placeholder='input your password'
                handleOnChange={handleChange}
                /> 
                </div>
            <button>
                <img src={Button} alt='button login'/>    
            </button>   
            </form>
    )
}

export default LoginForm