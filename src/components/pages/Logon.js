import styles from './Logon.module.css';

import Seller from '../../img/login.svg'
import Costumers from '../../img/Costumers.svg'
import Addcostumers from '../../img/Addcostumers.svg'

import { Link } from 'react-router-dom';
import Input from '../form/Input';

function Logon() {

    return(
        <div className={styles.div_father}>
            <form method='' action='' className={styles.form}>
                <img src={Seller} alt="seller"/>
                <h1>Seller</h1>
                <Input type='text' name='seller' id='seller'/>
            <div className={styles.div_son}>
                <Link to='/costumers'>
                    <img src={Costumers} alt='Costumers'/>
                    <p>Costumers</p>
                </Link>
                <Link to='/costumer-add'>
                    <img src={Addcostumers} alt='Add costumers'/>
                    <p>Add Costumer</p>
                </Link>
            </div>
            </form>
        </div>
    )
}

export default Logon