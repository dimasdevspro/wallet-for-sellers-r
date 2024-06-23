import styles from './RegisterForm.module.css';

import save from '../../img/save.svg';
import Input from './Input';
import { useState } from 'react';


function RegisterForm({ handleSubmit, sellerData }){
    
    const [seller, setSeller] = useState(sellerData || {})
    
    const submit = (e) => {
        e.preventDefault()
        handleSubmit(seller)
    }

    function handleChange(e) {
        setSeller({...seller, [e.target.name]: e.target.value })
    }
    return (
        <form onSubmit={submit} className={styles.form}>
                <Input
                type="text"
                text="Name"
                name="name"
                placeholder="input your name"
                handleOnChange={handleChange}
                value={seller.name ? seller.name : ''}
                />
                <Input
                type="email"
                text="Email"
                name="email"
                placeholder="input your email"
                handleOnChange={handleChange}
                value={seller.email ? seller.email : ''}
                />
                <Input
                type="tel"
                text="Phone"
                name="phone"
                placeholder="input your phone or cel"
                handleOnChange={handleChange}
                value={seller.phone ? seller.phone : ''}
                />
                <Input
                type="text"
                text="Login"
                name="login"
                placeholder="input your login"
                handleOnChange={handleChange}
                value={seller.login ? seller.login : ''}
                />
                <Input
                type="password"
                text="Password"
                name="password"
                placeholder="input your password"
                handleOnChange={handleChange}
                value={seller.password ? seller.password : ''} 
                />
            <button>
                <img src={save} alt='button save'/>    
            </button>   
            </form>
    )
}

export default RegisterForm