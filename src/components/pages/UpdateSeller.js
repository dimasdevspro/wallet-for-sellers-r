
import { useState } from 'react';
import UpdateForm from '../form/UpdateForm';
import Message from '../layout/Message';
import { Link, useLocation } from 'react-router-dom';

import styles from './UpdateSeller.module.css'
import Home from '../../img/home.svg';

function UpdateSeller() {
    const { state } = useLocation()
    const dataUserLogged = state
    const [ message, setMessage ] = useState("")
    const [ typeMessage, setTypeMessage ] = useState("")

    function updateSeller(seller){

        fetch(`https://e-wallet-for-sellers-api.vercel.app/sellers/${dataUserLogged._id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(seller)
        })
        .then((resp) => {
            if(!resp.ok){
                return resp.text().then(text => { throw new Error(text)});
            }    
            return resp.json()
        })
        .then(() => {
            const successMessage = "Seller updated successfully!"
            const messageType = "success"
            setMessage(successMessage)
            setTypeMessage(messageType)
        })
        .catch((err) => {
            const errorMessage = "Error for to update Seller"
            const messageType = "error"
            setMessage(errorMessage)
            setTypeMessage(messageType)
            console.error(err)
        })
    }

    function deleteSeller(){

    }

  return (
      <div className={styles.body}>
        <div className={styles.header}>
        <h1>Update´s Seller</h1>
        <Link to='/logon' state={dataUserLogged}>
        <img src={Home} alt="Home" id={styles.icon_home} />
        </Link>
        </div>
            <Message
            msg={message}
            type={typeMessage}
            />
            <UpdateForm handleEditSubmit={updateSeller} handleDeleteSubmit={deleteSeller} seller={dataUserLogged}/>
        </div>
  )
}

export default UpdateSeller