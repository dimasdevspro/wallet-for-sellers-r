import styles from './UpdateForm.module.css';

import Delete from '../../img/delete.svg'
import Save from '../../img/save.svg';
import Input from './Input';
import { useState, useEffect } from 'react';


function RegisterForm({ handleEditSubmit, handleDeleteSubmit, seller }){
    
    const [sellerEdited, setSellerEdited] = useState({})
    
    useEffect(() => {
        setSellerEdited(seller);
    }, [seller]);

    const submitEdit = (e) => {
        e.preventDefault()
        handleEditSubmit(sellerEdited, setSellerEdited)
    }

    const submitDelete = (e) => {
        e.preventDefault()
        handleDeleteSubmit()
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setSellerEdited(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <form onSubmit={submitEdit} className={styles.form}>
                <Input
                type="text"
                text="Name"
                name="name"
                placeholder="input your name"
                handleOnChange={handleChange}
                value={sellerEdited.name || ''}
                />
                <Input
                type="email"
                text="Email"
                name="email"
                placeholder="input your email"
                handleOnChange={handleChange}
                value={sellerEdited.email ||''}
                />
                <Input
                type="tel"
                text="Phone"
                name="phone"
                placeholder="input your phone or cel"
                handleOnChange={handleChange}
                value={sellerEdited.phone || ''}
                />
                <Input
                type="text"
                text="Company"
                name="company"
                placeholder="input your company"
                handleOnChange={handleChange}
                value={sellerEdited.company || ''}
                />
                <Input
                type="text"
                text="Login"
                name="login"
                placeholder="input your email"
                handleOnChange={handleChange}
                value={sellerEdited.login || ''}
                />
                <Input
                type="password"
                text="Password"
                name="password"
                placeholder="input your password"
                handleOnChange={handleChange}
                value={sellerEdited.password || ''} 
                />
            <div className={styles.buttons_form}>
            <button onClick={submitDelete}>
                <img src={Delete} alt='button save'/>    
            </button> 
            <button>
                <img src={Save} alt='button delete'/>    
            </button>   
            </div>   
            </form>
    )
}

export default RegisterForm