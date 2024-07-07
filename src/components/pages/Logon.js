import { useLocation, Link } from 'react-router-dom';

import styles from './Logon.module.css';

import Seller from '../../img/login.svg'
import Costumers from '../../img/Costumers.svg'
import Addcostumers from '../../img/Addcostumers.svg'

function Logon() {

    const {state} = useLocation()
    let dataUser = state[0]
        
    return(
        <div className={styles.div_father}>
            <form method='' action='' className={styles.form}>
                <img src={Seller} alt="seller"/>
                <h1>Seller</h1>
                <h2>{dataUser.name}</h2>
            <div className={styles.div_son}>
                <Link to='/costumers' state={dataUser}>
                    <img src={Costumers} alt='Costumers'/>
                    <p>Costumers</p>
                </Link>
                <Link to='/costumer-add' state={dataUser}>
                    <img src={Addcostumers} alt='Add costumers'/>
                    <p>Add Costumer</p>
                </Link>
            </div>
            </form>
        </div>
    )
}

export default Logon