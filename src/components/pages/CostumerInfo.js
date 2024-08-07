import { Link, useLocation } from "react-router-dom"
import CostumerInfos from '../form/CostumerInfos'
import Seller from '../../img/login.svg'
import styles from './CostumerInfo.module.css'
import Edit from '../../img/edit.svg'

function CostumerInfo(){

    const {state} = useLocation()
    const costumer = state[1]
    const dataUserLogged = state[0]
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
            <div className={styles.costumer_link}>
            <Link to="/costumer-edit" state={[dataUserLogged, costumer]}>
                <img src={Edit} alt="" />
            </Link>
            </div>
        </div>
        
    )
}

export default CostumerInfo