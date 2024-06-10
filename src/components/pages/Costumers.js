import { Link } from "react-router-dom"

import Seller from '../../img/login.svg'

import styles from './Costumers.module.css'

function Costumers(){
    return (
        <div >
            <form method='' action='' >
                <img src={Seller} alt="seller"/>
                <h1>Seller</h1>
                <label className={styles.sr_only} for='seller'>Seller</label>
                <input type='text' name='seller' id='seller'/>
            </form>
        </div>
    )
}

export default Costumers