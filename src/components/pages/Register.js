import styles from './Register.module.css';

import save from '../../img/save.svg';

function Register(){
    return(
        <div className={styles.body}>
            <h1>Register´s Seller</h1>
            <form  className={styles.form} method="post" action="./register">
            <div className={styles.input}>
                <label className={styles.sr_only} for="name-seller">Name</label>
                <p>Name</p>
                <input type='text' name='name' id='name-seller' placeholder='input your name'/>
                </div>
                <div className={styles.input}>
                <label className={styles.sr_only} for="email-seller">Email</label>
                <p>Email</p>
                <input type='email' name='email' id='email-seller' placeholder='input your email'/>
                </div>
                <div className={styles.input}>
                <label className={styles.sr_only} for="phone-seller">Phone</label>
                <p>Phone</p>
                <input type='tel' name='tel' id='phone-seller' placeholder='input your phone or cel'/>
                </div>
                <div className={styles.input}>
                <label className={styles.sr_only} for="login-seller">Login</label>
                <p>Login</p>
                <input type='text' name='login' id='login-seller' placeholder='input your login'/>
                </div>
                <div className={styles.input}>
                <label className={styles.sr_only} for="password-seller">Password</label>
                <p>Password</p>
                <input type='password' name='password' id='password-seller' placeholder='input your password'/> 
                </div>
            <button>
                <img src={save} alt='button login'/>    
            </button>   
            </form>
        </div>
    )
}

export default Register