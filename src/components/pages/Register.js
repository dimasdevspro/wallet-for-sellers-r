import styles from './Register.module.css';

import save from '../../img/save.svg';

function Register(){

    
    return(
        <div className={styles.body}>
            <h1>Register´s Seller</h1>
            <form  className={styles.form}>
            <div className={styles.input}>
                <label className={styles.sr_only}>Name</label>
                <p>Name</p>
                <input type='text' name='name' placeholder='input your name'/>
                </div>
                <div className={styles.input}>
                <label className={styles.sr_only}>Email</label>
                <p>Email</p>
                <input type='email' name='email' placeholder='input your email'/>
                </div>
                <div className={styles.input}>
                <label className={styles.sr_only}>Phone</label>
                <p>Phone</p>
                <input type='tel' name='tel' placeholder='input your phone or cel'/>
                </div>
                <div className={styles.input}>
                <label className={styles.sr_only}>Login</label>
                <p>Login</p>
                <input type='text' name='login' placeholder='input your login'/>
                </div>
                <div className={styles.input}>
                <label className={styles.sr_only}>Password</label>
                <p>Password</p>
                <input type='password' name='password' placeholder='input your password'/> 
                </div>
            <button>
                <img src={save} alt='button login'/>    
            </button>   
            </form>
        </div>
    )
}

export default Register