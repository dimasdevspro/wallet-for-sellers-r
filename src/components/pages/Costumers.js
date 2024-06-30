import { Link } from "react-router-dom"

import Seller from '../../img/login.svg'
import AddCostumer from '../../img/Addcostumers.svg';

import styles from './Costumers.module.css'

function Costumers(){
    return (
        <div className={styles.div_father}>
            <form method='' action='' className={styles.form}>
                <img src={Seller} alt="seller"/>
                <h1>Seller</h1>
                <label className={styles.sr_only} for='seller'>Seller</label>
                <input type='text' name='seller' id='seller'/>
                <label className={styles.sr_only} for='search-costumers'>search</label>
                <input type="text" name="search-costumers" placeholder="Search your costumer" id={styles.input_search}/>
                <div>
                    <Link to=''>
                    <label className={styles.sr_only} for='costumer'>Costumer</label>
                    <img src={Seller} alt="seller" id={styles.costumer_img}/>
                    <input type="text" name="costumer"/>
                    </Link>
                </div>
                <div className={styles.link_add_costumer}>
                    <Link to='/costumer-add'>
                    <img src={AddCostumer} alt=''/>
                    </Link>
                </div>
            </form>
            
        </div>
    )
}

export default Costumers