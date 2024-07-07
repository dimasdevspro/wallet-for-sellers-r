import { Link, useLocation } from "react-router-dom";

import styles from './Costumer.module.css'

function Costumer({id, name}){

    const {state} = useLocation()
    const dataUser = state
    const costumers = dataUser.costumers
    return(
        <div>
            <Link
            className={styles.link_costumer} 
            to='/costumer-info' 
            state={
                costumers.find(costumer => costumer.id === id)
            }>
            <h4 id={id}>{name}</h4>
            </Link>
        </div>
    )
}

export default Costumer