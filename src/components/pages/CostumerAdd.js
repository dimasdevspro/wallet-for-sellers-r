import { v4 as uuidv4 } from 'uuid'

import Message from '../layout/Message'

import AddCostumer from '../../img/Addcostumers.svg';
import CostumerAddForm from '../form/CostumerAddForm';

import styles from './CostumerAdd.module.css';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function CostumerAdd(){

    const {state} = useLocation()
    const dataUserLogged = state
    const [ message, setMessage ] = useState('')
    const [ typeMessage, setTypeMessage ] = useState('')

    function createCostumer(costumer){
        const isCostumerExist = dataUserLogged.costumers.find((costumerDataUser)=> costumerDataUser.email === costumer.email )
        if(!isCostumerExist) {
            costumer.id = uuidv4()

            fetch(`https://e-wallet-for-sellers-api.vercel.app/sellers/${dataUserLogged._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json'
                }, 
                body: JSON.stringify(costumer)
            })
            .then((resp) => resp.json())
            .then((data) => {
                setMessage("Customer registered successfully!")
                setTypeMessage("success")
            })
            .catch(err => console.log(err))
        } else {
            setMessage("Customer is already registered!")
            setTypeMessage("error")
            return
        }
    }
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <img src={AddCostumer} alt='add costumer'/>
                <h1>Add Costumer</h1>
                <Message
                msg={message}
                type={typeMessage}
                />
            </div>
        <CostumerAddForm handleSubmit={createCostumer}/>
        </div>
    )
}

export default CostumerAdd