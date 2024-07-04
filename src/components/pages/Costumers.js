import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom"

import Seller from '../../img/login.svg'
import AddCostumer from '../../img/Addcostumers.svg';
import Costumer from "../form/Costumer";

import styles from './Costumers.module.css'

function Costumers(){

    const {state} = useLocation()
    let dataUser = state
    let costumers = dataUser.costumers
    
    return (
        <div className={styles.div_father}>
            <form method='' action='' className={styles.form}>
                <img src={Seller} alt="seller"/>
                <h1>Costumers</h1>
                <label className={styles.sr_only} for='search-costumers'>search</label>
                <input type="text" name="search-costumers" placeholder="Search your costumer" id={styles.input_search}/>
                <h4>
                {
                        dataUser.costumers.length === 0 ? 
                        <h4>Dont exist costumers in your wallet...</h4> : 
                        costumers.map((costumer) => 
                        <Costumer 
                        id={costumer.id} 
                        name={costumer.name}
                        />)
                     }
                </h4>
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