import { useLocation } from 'react-router-dom';

import styles from './Logon.module.css';

import Seller from '../../img/login.svg'
import Costumers from '../../img/Costumers.svg'
import Addcostumers from '../../img/Addcostumers.svg'

import { Link } from 'react-router-dom';
import Input from '../form/Input';

function Logon() {

    const location = useLocation()
    let dataUser = []
    console.log(location)
    if(location.state){
        dataUser = location.state
    }
    console.log(dataUser)
    return(
        <div className={styles.div_father}>
            <form method='' action='' className={styles.form}>
                <img src={Seller} alt="seller"/>
                <h1>Seller</h1>
                <p>{dataUser[0].name}</p>
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