import { v4 as uuidv4 } from 'uuid'
import AddCostumer from '../../img/Addcostumers.svg';
import CostumerAddForm from '../form/CostumerAddForm';

import styles from './CostumerAdd.module.css';
import { useLocation } from 'react-router-dom';

function CostumerAdd(){

    const {state} = useLocation()
    const dataUser = state

    function createCostumer(costumer){
       costumer.id = uuidv4()
       dataUser.costumers.push(costumer)
        
        fetch(`https://e-wallet-for-sellers-api.vercel.app/sellers/${dataUser._id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            }, 
            body: JSON.stringify(dataUser)
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
        })
        .catch(err => console.log(err))
        
    }
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <img src={AddCostumer} alt='add costumer'/>
                <h1>Add Costumer</h1>
            </div>
        <CostumerAddForm handleSubmit={createCostumer}/>
        </div>
    )
}

export default CostumerAdd