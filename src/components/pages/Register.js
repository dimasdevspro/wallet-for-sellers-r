import styles from './Register.module.css';

import save from '../../img/save.svg';
import { useNavigate } from 'react-router-dom';
import Input from '../form/Input';

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
            <form  className={styles.form}>
                <Input
                type="text"
                text="Name"
                name="name"
                placeholder="input your name"
                />
                <Input
                type="email"
                text="Email"
                name="email"
                placeholder="input your email"
                />
                <Input
                type="tel"
                text="Phone"
                name="phone"
                placeholder="input your phone or cel"
                />
                <Input
                type="text"
                text="Login"
                name="login"
                placeholder="input your login"
                />
                <Input
                type="password"
                text="Password"
                name="password"
                placeholder="input your password"
                />
            <button onClick={createPost}>
                <img src={save} alt='button save'/>    
            </button>   
            </form>
        </div>
    )
}

export default Register