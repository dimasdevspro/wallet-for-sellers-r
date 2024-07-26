import { Link, useLocation } from "react-router-dom"
import CostumerInfos from '../form/CostumerInfos'
import Seller from '../../img/login.svg'
import styles from './CostumerInfo.module.css'
import Edit from '../../img/edit.svg'

function CostumerInfo(){

    const {state} = useLocation()
    const costumer = state
    return (
        <div className={styles.costumer}>
            <img src={Seller} alt="Seller"/>
            <h1>Costumer</h1>
            <CostumerInfos
            name={costumer.name}
            email={costumer.email}
            phone={costumer.phone}
            company={costumer.company}
            />
            <Link to="/costumer-edit" state={costumer} className={styles.button_edit}>
                <img src={Edit} alt="" />
            </Link>
        </div>
        
    )
}

export default CostumerInfo