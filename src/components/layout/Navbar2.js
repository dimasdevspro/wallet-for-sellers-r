import { useContext } from 'react';
import { Link } from 'react-router-dom';
import wallet from '../../img/wallet.svg';
import styles from '../layout/Navbar2.module.css'

import { FiAlignJustify } from "react-icons/fi";

import { useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

function Navbar2(){

    const [isActive, setActive ] = useState("false");
    const ToggleClass = () => {
        setActive(!isActive);
    }; 

    const {auth, setAuth } = useContext(AuthContext)

    const logout = document.addEventListener('click', () => setAuth(false))
    return (
        <nav className={styles.navbar}>
                <img src={wallet} alt='wallet' />
                <FiAlignJustify onClick={ToggleClass}/>
            <ul className={isActive ? styles.list_unvisible : styles.list_visible }>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/company'>App</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                {!auth ? <li><Link to='/login'>Login</Link></li> : <li><Link to='/login' onClick={logout}>Logout</Link></li>}

            </ul>
        </nav>
    )
}

export default Navbar2