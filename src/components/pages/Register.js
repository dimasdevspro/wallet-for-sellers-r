import styles from './Register.module.css';

import { useNavigate } from 'react-router-dom';

import RegisterForm from '../form/RegisterForm';

function Register(){

    const navigate = useNavigate();

    function createPost(seller){

        // initialize costumers

        seller.costumers = []

        fetch('https://server-e-wallet.vercel.app/seller', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(seller)
        })
        .then((resp) => resp.json())
        .then((data) => {
            //redirect
            const state = {message: "Seller created successfully!"}
            navigate("/login", {state})
        })
        .catch(err => console.log(err))
    }

    return(
        <div className={styles.body}>
            <h1>Register´s Seller</h1>
            <RegisterForm handleSubmit={createPost}/>
        </div>
    )
}

export default Register