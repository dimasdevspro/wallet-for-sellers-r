import styles from './Register.module.css';

import { useNavigate } from 'react-router-dom';

import RegisterForm from '../form/RegisterForm';
import Message from '../layout/Message';
import { useState } from 'react';

function Register(){

    const navigate = useNavigate();
    const [message, setMessage] = useState('')
    const [typeMessage, setTypeMessage] = useState('')

    function createPost(seller, setSellerData){

        // initialize costumers
        fetch('https://e-wallet-for-sellers-api.vercel.app/sellers/', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            const isSellerExist = data.find((sellerData) => sellerData.login === seller.login && sellerData.email === seller.email)
            if(isSellerExist){
                setMessage('Seller is alredy exist!')
                setTypeMessage('error')
                setSellerData(seller)
            }else {
                
        seller.costumers = []

        fetch('https://e-wallet-for-sellers-api.vercel.app/sellers/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(seller)
        })
        .then((resp) => {
            if(!resp.ok){
                return resp.text().then(text => { throw new Error(text)});
            }    
            resp.json()
        })
        .then((data) => {
            setMessage("Seller created successfully!")
            typeMessage("success")
            //limpar formulário
            setSellerData({})
            //redirect
            navigate("/login")
        })
        .catch(err => console.log(err))
            }
        })
        .catch(err => console.log(err))

    }

    return(
        <div className={styles.body}>
            <h1>Register´s Seller</h1>
            <Message
            msg={message}
            type={typeMessage}
            />
            <RegisterForm handleSubmit={createPost}/>
        </div>
    )
}

export default Register