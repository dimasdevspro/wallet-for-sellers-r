import React, {useState} from 'react'

import Input from '../form/Input';
import Message from '../layout/Message';

import styles from './ForgotPassword.module.css';

import Send from '../../img/send.svg'

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [typeMessage, setTypeMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        sendEmailForRecovery()
    }

    function sendEmailForRecovery() {
        fetch('https://e-wallet-for-sellers-api.vercel.app/forgot-password', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({email})
        })
        .then((resp) => {
            if(!resp.ok){
                return resp.text().then(text => { throw new Error(text)});
            }
            return resp.json()
        })
        .then((data) => {
            if(data) {
                setMessage(data.message);
                setTypeMessage('success');
            } else {
                setMessage( data.message || 'Error occurred, please try again.');
                setTypeMessage('error')
            }
        })
        .catch ((err) =>{
            console.error(err.message)
            setMessage('Error occurred, please try again.')
            setTypeMessage('error')
        })
    }
  
    return (
    <div className={styles.body}>
        <h1>Forgot Your Password?</h1>
        <Message
        msg={message}
        type={typeMessage}
        />
        <form onSubmit={handleSubmit} className={styles.form_email_recovery}>
            <Input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            handleOnChange={ (e) => setEmail(e.target.value)}
            required
            />
            <button id={styles.button_send}>
                <img src={Send} alt="to send" id={styles.button_send_img}/>
            </button>
        </form>
    </div>
  )
}

export default ForgotPassword