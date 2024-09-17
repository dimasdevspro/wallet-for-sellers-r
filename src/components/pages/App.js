import styles from './App.module.css';
import { Link, useLocation } from 'react-router-dom';
import Home from '../../img/home.svg'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

function App(){

    const { auth, setAuth } = useContext(AuthContext)
    const {state}= useLocation()
    const dataUserLogged = state
    
    return (
        <div className={styles.body}>
            {auth && <Link to='/logon' state={dataUserLogged}>
            <img src={Home} alt="Home" id={styles.icon_home} />
            </Link>}
        <h1>About App</h1>
        <p>Developed by Devspro Solution, this application aims to help sellers register their customers in a single, simple and fast note-taker.</p>
        </div>
    )
}

export default App