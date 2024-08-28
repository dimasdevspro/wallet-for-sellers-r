import styles from './RegisterForm.module.css';

import save from '../../img/save.svg';
import Input from './Input';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function RegisterForm({ handleSubmit, sellerData }) {
    
    const [seller, setSeller] = useState(sellerData || {});
    const [isChecked, setIsChecked] = useState(false); // Estado para o checkbox
    
    const submit = (e) => {
        e.preventDefault();
        handleSubmit({ ...seller, agreeterms: isChecked }, setSeller);
    };

    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setIsChecked(checked); // Atualiza o estado do checkbox
        } else {
            setSeller({
                ...seller,
                [name]: value,
            });
        }
    }

    return (
        <>
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
                <div className={styles.save}>
                    <label htmlFor="agreeterms">
                        <input 
                            type="checkbox" 
                            name="agreeterms" 
                            id="agreeterms" 
                            onChange={handleChange} // Usa a função handleChange
                            checked={isChecked}
                        />
                        <p>
                            Do you agree with our <Link to='/privacy-policy'>privacy policy</Link> and <Link to='/terms-of-service'>terms of service.</Link>
                        </p>
                    </label> 
                    <button disabled={!isChecked}> {/* Desabilita o botão se não estiver marcado */}
                        <img src={save} alt='button save'/>    
                    </button>      
                </div> 
            </form>
        </>
    );
}

export default RegisterForm;
