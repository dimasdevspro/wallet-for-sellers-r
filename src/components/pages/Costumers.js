import { useLocation, useNavigate } from "react-router-dom";

import { Link } from "react-router-dom"

import Seller from '../../img/login.svg'
import AddCostumer from '../../img/Addcostumers.svg';
import Costumer from "../form/Costumer";

import styles from './Costumers.module.css'

function Costumers(){
    const navigate = useNavigate()
    const {state} = useLocation()
    const dataUserLogged = state
    const costumers = dataUserLogged.costumers

    function getCostumerAdd(){

        fetch(`http://localhost:5000/seller/${dataUserLogged.id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            const dataUser = data
            navigate('/costumer-add', {state: dataUser})
        })
        .catch(err => console.log(err))
    }

    return (
        <div className={styles.div_father}>
            <form method='' action='' className={styles.form}>
                <img src={Seller} alt="seller"/>
                <h1>Costumers</h1>
                <label className={styles.sr_only} htmlFor='search-costumers'>search</label>
                <input type="text" name="search-costumers" placeholder="Search your costumer" id={styles.input_search}/>
                <div>
                {
                        costumers.length === 0 ? 
                        "Dont exist costumers in your wallet..." : 
                        costumers.map((costumer) => 
                        <Costumer 
                        id={costumer.id} 
                        name={costumer.name}
                        />)
                     }
                <div className={styles.link_add_costumer}>
                    <Link onClick={getCostumerAdd}>
                    <img src={AddCostumer} alt=''/>
                    </Link>
                </div>
                </div>
                
            </form>
            
        </div>
    )
}

export default Costumers