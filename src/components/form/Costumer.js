import { BsPencil } from "react-icons/bs";
import { Link } from "react-router-dom";

import styles from './Costumer.module.css'

function Costumer({id, name}){
    return(
        <div>
            <Link className={styles.link_costumer} to={`/costumer-info/${id}`}>
            <h4 id={id}>{name}</h4>
            <BsPencil/>
            </Link>
        </div>
    )
}

export default Costumer