import styles from './Home.module.css'
import { Link, useLocation } from 'react-router-dom'
import home from '../../img/home.svg'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'


function Home(){

    const { auth, setAuth } = useContext(AuthContext)
    const {state} = useLocation()
    const dataUserLogged = state || {}

    return (
        <div className={styles.body}>
            {auth && <Link to='/logon' state={dataUserLogged}>
            <img src={home} alt="Home" id={styles.icon_home} />
            </Link>}
        <h1 className={styles.h1}>E-WALLET</h1>
        <h4 className={styles.h4}>FOR SELLERS</h4>
        </div>
    )
}

export default Home