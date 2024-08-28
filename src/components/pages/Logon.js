import { useLocation, Link } from 'react-router-dom';

import styles from './Logon.module.css';

import Seller from '../../img/login.svg'
import Settings from '../../img/settings.svg'
import Costumers from '../../img/Costumers.svg'
import Addcostumers from '../../img/Addcostumers.svg'

function Logon() {

    const {state} = useLocation()
    const dataUserLogged = state
    console.log(dataUserLogged)
    return(
        <div className={styles.div_father}>
            <Link to='/update-seller' state={dataUserLogged}>
                <img src={Settings} id={styles.settings} alt='settings'/>
            </Link>
            <form method='' action='' className={styles.form}>
                <img src={Seller} alt="seller"/>
                <h1>Seller</h1>
                <h2>{dataUserLogged.name}</h2>
            <div className={styles.div_son}>
                <Link to='/costumers' state={dataUserLogged}>
                    <img src={Costumers} alt='Costumers'/>
                    <p>Costumers</p>
                </Link>
                <Link to='/costumer-add' state={dataUserLogged}>
                    <img src={Addcostumers} alt='Add costumers'/>
                    <p>Add Costumer</p>
                </Link>
            </div>
            </form>
        </div>
    )
}

export default Logon