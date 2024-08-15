
import AddCostumer from '../../img/Addcostumers.svg';
import styles from './CostumerEdit.module.css';

import Message from '../layout/Message'
import CostumerEditForm from '../form/CostumerEditForm';

import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function CostumerEdit(){
    const navigate = useNavigate()
    const {state} = useLocation()
    const {dataUserLogged, costumer} = state
    const [ message, setMessage ] = useState("")
    const [ typeMessage, setTypeMessage] = useState("")

    function editCostumer(costumerEdited){
        
        fetch(`https://e-wallet-for-sellers-api.vercel.app/sellers/${dataUserLogged._id}/costumers/${costumer.id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            }, 
            body: JSON.stringify(costumerEdited)
        })
        .then((resp) => {
            if(!resp.ok) {
                return resp.text().then(text => { throw new Error(text)})
            }   
            return resp.json()})
        .then((data) => {
            const costumer = data
            navigate('/costumer-info', {state: {dataUserLogged, costumer, message: "Costumer edited successfully!", typeMessage:"success"}})
            
        })
        .catch(err => console.log('Error:', err))
            setMessage("Failed to edit costumer")
            setTypeMessage("error")
        
    }

    function deleteCostumer(costumerDeleted){
        
        fetch(`https://e-wallet-for-sellers-api.vercel.app/sellers/${dataUserLogged._id}/costumers/${costumer.id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((resp) => {
            if(!resp.ok){
                return resp.text().then(text => { throw new Error(text)})
            }
            return resp.json()
        })
        .then(() => {
            navigate('/costumers', {state: { dataUserLogged, message: "Costumer deleted successfully!", typeMessage: "success" }})
        })
        .catch(err => {
            console.log('Error', err)
            setMessage("Failed to delete costumer")
            setTypeMessage("error")
        })
    }

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <img src={AddCostumer} alt='edit costumer'/>
                <h1>Edit Costumer</h1>
                <Message
                msg={message}
                type={typeMessage}
                />
            </div>
            <CostumerEditForm costumer={costumer} handleSubmitEdit={editCostumer} handleSubmitDelete={deleteCostumer}/>
        </div>
        
    )
}

export default CostumerEdit