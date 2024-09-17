import styles from './Contact.module.css';
import { Link, useLocation } from 'react-router-dom';
import Home from '../../img/home.svg'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

function Contact(){
    const {auth, setAuth} = useContext(AuthContext)
    const {state} = useLocation()
    const dataUserLogged = state

    return (
        <div className={styles.body}>
            {auth && <Link to='/logon' state={dataUserLogged}>
            <img src={Home} alt="Home" id={styles.icon_home} />
            </Link>}
            <h1>Contact</h1>
            <p>Address: Rua São Constantino, 207 - Vila Santa Cruz</p>
            <p>CEP 04456-000 - São Paulo - S.P. - Brasil.</p>
            <p>Phone: +55(011)93222-8112</p>
        </div>
    )
}

export default Contact