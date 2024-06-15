import { Link } from 'react-router-dom';
import wallet from '../../img/wallet.svg';
import styles from '../layout/Navbar2.module.css'

import { FiAlignJustify } from "react-icons/fi";

import { useState } from 'react';

function Navbar2(){

    const [isActive, setActive ] = useState("false");
    const ToggleClass = () => {
        setActive(!isActive);
    }; 

    return (
        <nav className={styles.navbar}>
                <img src={wallet} alt='wallet' onClick={ToggleClass}/>
                <FiAlignJustify />
            <ul className={isActive ? styles.list_visible : styles.list_unvisible }>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/company'>App</Link></li>
                <li><Link to='/contact'>Contact</Link></li>

            </ul>
        </nav>
    )
}

export default Navbar2