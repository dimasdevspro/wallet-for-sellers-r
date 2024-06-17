import styles from './Register.module.css';

import { useNavigate } from 'react-router-dom';

import RegisterForm from '../form/RegisterForm';

function Register(){

    const navigate = useNavigate();

    function createPost(seller){

        // initialize costumers

        seller.costumers = {
            name: '',
            email:'',
            phone:'',
            informations:''
        }

        fetch('http://localhost:5000/seller', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            params: JSON.stringify(seller)
        })
        .then((resp) => resp.json)
        .then((data) => {
            console.log(data)
            //redirect
        })
        .catch(err => console.log(err))
    }

    return(
        <div className={styles.body}>
            <h1>Register´s Seller</h1>
            <RegisterForm/>
        </div>
    )
}

export default Register