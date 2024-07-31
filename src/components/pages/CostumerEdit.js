
import AddCostumer from '../../img/Addcostumers.svg';
import styles from './CostumerEdit.module.css';

import { useLocation } from 'react-router-dom';
import CostumerEditForm from '../form/CostumerEditForm';

function CostumerEdit(){
    const {state} = useLocation()
    const costumer = state[1]
    const dataUserLogged = state[0]

    function editCostumer(costumerEdited){
        const index = dataUserLogged.costumers.findIndex(costumer => costumer.id === costumerEdited.id)

        if (index !== -1) {
            dataUserLogged.costumers[index] = {...costumerEdited}
        }
            console.log(dataUserLogged)

        fetch(`https://server-e-wallet.vercel.app/seller/${dataUserLogged.id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            }, 
            body: JSON.stringify(dataUserLogged)
        })
        .then((resp) => {
            if(!resp.ok) {
                return resp.text().then(text => { throw new Error(text)})
            }   
            resp.json()})
        .then((data) => {
            console.log('Customer updated sucessfully', data)

        })
        .catch(err => console.log('Error:', err))
        
    }

    function deleteCostumer(){

    }

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <img src={AddCostumer} alt='edit costumer'/>
                <h1>Edit Costumer</h1>
            </div>
            <CostumerEditForm costumer={costumer} handleSubmitEdit={editCostumer} handleSubmitDelete={deleteCostumer}/>
        </div>
        
    )
}

export default CostumerEdit