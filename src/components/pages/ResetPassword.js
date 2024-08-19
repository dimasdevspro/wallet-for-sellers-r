import React, { useState } from 'react'

import Input from '../form/Input';

import Save from '../../img/save.svg';
import { useNavigate, useParams } from 'react-router-dom';

import styles from './ResetPassword.module.css';
import Message from '../layout/Message';

function ResetPassword() {
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [typeMessage, setTypeMessage] = useState('')
    const { token } = useParams()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    function changePassword(){
          fetch(`https://e-wallet-for-sellers-api.vercel.app/reset-password${token}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({password})
          })
          .then((resp) => {
            if(!resp.ok){
                return resp.text().then(text => { throw new Error(text)})
            }
            return resp.json()
          })
          .then((data) => {
            if(data){
                setMessage('Password successfully reset. Redirecting to login...')
                setTimeout(() => navigate('/login'), 3000)
            }else{
                setMessage(data.message || 'Error resetting password.')
            }
          })
          .catch((error) =>{
            setMessage('Error resetting password')
          })  
    }

    return (
    <div className={styles.body}>
        <h1>Reset Password</h1>
        <Message
        msg={message}
        type={typeMessage}
        />
        <form onSubmit={handleSubmit} className={styles.form_reset_password}>
            <Input
            type='password'
            placeholder='Enter new password'
            value={password}
            handleOnChange={(e) => setPassword(e.target.value)}
            required
            />
            <button type={changePassword} id={styles.button_save}><img src={Save} id={styles.button_save_img}/></button>
        </form>
    </div>
  )
}

export default ResetPassword