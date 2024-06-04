import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from '../layout/Footer.module.css';

function Footer(){
    return (
        
        <footer className={styles.footer}>
            <ul className={styles.list}>
            <li>
               <a href='https://www.facebook.com/dimas.pereira.547' target='blank'><FaFacebook/></a>
            </li>
            <li>
               <a href='https://www.instagram.com/dimas_apereira/' target='blank'><FaInstagram/></a>
            </li>
            <li>
               <a href='https://www.linkedin.com/in/dimas-apereira/' target='blank'><FaLinkedin/></a>
            </li>
         </ul>
           <p> DEVSPRO SOLUTION © 2024</p>
        </footer>
    )
}

export default Footer