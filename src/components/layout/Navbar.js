import { Link } from 'react-router-dom';
import logo from '../../img/wallet.svg';
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.wallet}>
            <Link to="/" ><img src={logo} alt='Wallet'/></Link>
        </nav>
    )
}