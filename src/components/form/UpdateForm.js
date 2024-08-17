import styles from './UpdateForm.module.css';

import Delete from '../../img/delete.svg'
import Save from '../../img/save.svg';
import Input from './Input';
import { useState } from 'react';


function RegisterForm({ handleEditSubmit, handleDeleteSubmit, sellerData }){
    
    const [seller, setSeller] = useState(sellerData || {})
    
    const submitEdit = (e) => {
        e.preventDefault()
        handleEditSubmit(seller, setSeller)
    }

    const submitDelete = (e) => {
        e.preventDefault()
        handleDeleteSubmit()
    }

    function handleChange(e) {
        setSeller({...seller, [e.target.name]: e.target.value })
    }
    return (
        <form onSubmit={submitEdit} className={styles.form}>
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
                text="Company"
                name="company"
                placeholder="input your company"
                handleOnChange={handleChange}
                value={seller.company ? seller.company : ''}
                />
                <Input
                type="text"
                text="Login"
                name="login"
                placeholder="input your email"
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
            <div className={styles.buttons_form}>
            <button>
                <img src={Delete} alt='button delete'/>    
            </button>
            <button onClick={submitDelete}>
                <img src={Save} alt='button save'/>    
            </button>    
            </div>   
            </form>
    )
}

export default RegisterForm