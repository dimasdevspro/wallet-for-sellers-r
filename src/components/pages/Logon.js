import styles from './Logon.module.css';

import Seller from '../../img/login.svg'
import Costumers from '../../img/Costumers.svg'
import Addcostumers from '../../img/Addcostumers.svg'

function Logon() {
    return(
        <div>
            <form method='' action=''>
                <img src={Seller} alt="seller"/>
                <h1>Seller</h1>
                <label className={styles.sr_only} for='seller'>Seller</label>
                <input type='text' name='seller' id='seller'/>
            </form>
            <div>
                <div>
                    <img src={Costumers} alt='Costumers'/>
                    <p>Costumers</p>
                </div>
                <div>
                    <img src={Addcostumers} alt='Add costumers'/>
                    <p>Add Costumers</p>
                </div>
            </div>
        </div>
    )
}

export default Logon