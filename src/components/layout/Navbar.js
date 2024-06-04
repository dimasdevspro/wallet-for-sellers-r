import { Link } from 'react-router-dom';
import wallet from '../../img/wallet.svg';
import styles from '../layout/Navbar.module.css'

function Navbar(){
    return (
        <nav className={styles.navbar}>
                <img src={wallet} alt='wallet'/>
            <ul className={styles.list}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/company'>App</Link></li>
                <li><Link to='/contact'>Contact</Link></li>

            </ul>
        </nav>
    )
}

export default Navbar