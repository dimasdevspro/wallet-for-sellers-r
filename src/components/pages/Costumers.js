
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom"

import Message from '../layout/Message'

import Seller from '../../img/login.svg'
import AddCostumer from '../../img/Addcostumers.svg';
import Costumer from "../form/Costumer";
import Input from "../form/Input"

import styles from './Costumers.module.css'
import React, { useState, useMemo, useEffect } from "react";

function Costumers(){
    const {state} = useLocation()
    const {dataUserLogged, message, typeMessage} = state
    const [costumers, setCostumers] = useState([])
    const [query, setQuery] = useState('')

    const costumersFiltered = useMemo(() => {
        const queryLowerCase  = query.toLowerCase()
        return costumers.filter(costumer => costumer.name.toLowerCase().includes(queryLowerCase))
    }, [query, costumers]) 
        
    useEffect(() => {
        fetch(`https://e-wallet-for-sellers-api.vercel.app/sellers/${dataUserLogged._id}/costumers`, {
            method: 'GET',
            headers: {
                'Content-type': 'Application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCostumers(data)

        })
    }, [dataUserLogged._id])
    return (
        <div className={styles.div_father}>
            <div className={styles.form}>
                <img src={Seller} alt="seller"/>
                <h1>Costumers</h1>
                <Message
                msg={message}
                type={typeMessage}
                />
                <Input
                type="text"
                value={query}
                handleOnChange={(e) => setQuery(e.target.value)}
                name="search"
                placeholder="Search your costumer"                             
                />
                <div>
                  {
                    costumersFiltered.length === 0 ?
                    <h4>"You havent costumer in your wallet..."</h4> :
                     costumersFiltered.map((costumer) =>
                    <Link 
                    to='/costumer-info' 
                    state={{dataUserLogged, costumer}}
                    key={costumer.id}
                    >
                    <Costumer
                    id={costumer.id}
                    name={costumer.name}
                    />
                    </Link>
                    )         
                  }  
                <div className={styles.link_add_costumer}>
                    <Link to='/costumer-add' state={{costumers, dataUserLogged}}>
                    <img src={AddCostumer} alt=''/>
                    </Link>
                </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Costumers