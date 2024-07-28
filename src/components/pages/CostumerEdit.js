import AddCostumer from '../../img/Addcostumers.svg';
import styles from './CostumerEdit.module.css';

import { useLocation } from 'react-router-dom';
import CostumerEditForm from '../form/CostumerEditForm';

function CostumerEdit(){

    const {state} = useLocation()
    const costumerData = state

    function editCostumer(){


        fetch("https://server-e-wallet.vercel.app/seller/", {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            }, 
            body: JSON.stringify()
        })
        .then((resp) => resp.json())
        .then((data) => {

        })
        .catch(err => console.log(err))
        
    }

    function deleteCostumer(){

    }

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <img src={AddCostumer} alt='edit costumer'/>
                <h1>Edit Costumer</h1>
            </div>
            <CostumerEditForm costumer={costumerData} handleSubmitEdit={editCostumer} handleSubmitDelete={deleteCostumer}/>
        </div>
        
    )
}

export default CostumerEdit