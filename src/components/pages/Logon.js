import styles from './Logon.module.css';

import Seller from '../../img/login.svg'
import Costumers from '../../img/Costumers.svg'
import Addcostumers from '../../img/Addcostumers.svg'

function Logon() {
    return(
        <div className={styles.div_father}>
            <form method='' action='' className={styles.form}>
                <img src={Seller} alt="seller"/>
                <h1>Seller</h1>
                <label className={styles.sr_only} for='seller'>Seller</label>
                <input type='text' name='seller' id='seller'/>
            <div className={styles.div_son}>
                <button>
                    <img src={Costumers} alt='Costumers'/>
                    <p>Costumers</p>
                </button>
                <button>
                    <img src={Addcostumers} alt='Add costumers'/>
                    <p>Add Costumers</p>
                </button>
            </div>
            </form>
        </div>
    )
}

export default Logon