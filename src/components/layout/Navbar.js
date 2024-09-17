import { useContext } from 'react';

import { Link, useLocation } from 'react-router-dom';
import wallet from '../../img/wallet.svg';
import styles from '../layout/Navbar.module.css'
import { AuthContext } from '../../context/AuthContext';

function Navbar(){

    const { auth, setAuth } = useContext(AuthContext)
    const {state} = useLocation()
    const dataUserLogged = state

    const logout = () => {
        setAuth(false)
        // Remove o valor de autenticação do localStorage
        localStorage.removeItem("auth")
    }
    
    return (
        <nav className={styles.navbar}>
                <img src={wallet} alt='wallet'/>
            <ul className={styles.list}>
                {!auth ? <li><Link to='/'>Home</Link></li> : <li><Link to='/' state={dataUserLogged}>Home</Link></li>}
                {!auth && <li><Link to='/register'>Register</Link></li>}
                {!auth ? <li><Link to='/company'>App</Link></li> : <li><Link to='/company' state={dataUserLogged}>App</Link></li>}
                {!auth ? <li><Link to='/contact'>Contact</Link></li> : <li><Link to='/contact' state={dataUserLogged}>Contact</Link></li>}
                {!auth ? <li><Link to='/login'>Login</Link></li> : <li><Link to='/login' onClick={logout}>Logout</Link></li>}

            </ul>
        </nav>
    )
}

export default Navbar