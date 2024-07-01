import { useContext } from 'react';

import { Link } from 'react-router-dom';
import wallet from '../../img/wallet.svg';
import styles from '../layout/Navbar.module.css'
import { AuthContext } from '../../context/AuthContext';

function Navbar(){

    const { auth, setAuth } = useContext(AuthContext)

    const logout = document.addEventListener('click', () => setAuth(false))

    return (
        <nav className={styles.navbar}>
                <img src={wallet} alt='wallet'/>
            <ul className={styles.list}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/company'>App</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                {!auth ? <li><Link to='/login'>Login</Link></li> : <li><Link to='/login' onClick={logout}>Logout</Link></li>}

            </ul>
        </nav>
    )
}

export default Navbar