
import { useState } from 'react';
import UpdateForm from '../form/UpdateForm';
import Message from '../layout/Message';
import { useLocation } from 'react-router-dom';

function UpdateSeller() {
    const { state } = useLocation()
    const dataUserLogged = state
    const [ message, setMessage ] = useState("")
    const [ typeMessage, setTypeMessage ] = useState("")

    function updateSeller(seller, setSellerData){

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
            resp.json()
        })
        .then(() => {
            const successMessage = "Seller updated successfully!"
            const messageType = "success"
            setMessage(successMessage)
            setTypeMessage(messageType)
        })
        .catch(err => console.log(err))
    }

    function deleteSeller(){

    }
    
  return (
    <div className={styles.body}>
            <h1>Update´s Seller</h1>
            <Message
            msg={message}
            type={typeMessage}
            />
            <UpdateForm handleEditSubmit={updateSeller} handleDeleteSubmit={deleteSeller}/>
        </div>
  )
}

export default UpdateSeller