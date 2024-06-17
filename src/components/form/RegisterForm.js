import styles from './RegisterForm.module.css';

import save from '../../img/save.svg';
import Input from './Input';


function RegisterForm({ handleSubmit }){
    return (
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
            <button>
                <img src={save} alt='button save'/>    
            </button>   
            </form>
    )
}

export default RegisterForm