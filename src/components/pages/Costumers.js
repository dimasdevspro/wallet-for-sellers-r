
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom"

import Seller from '../../img/login.svg'
import AddCostumer from '../../img/Addcostumers.svg';
import Costumer from "../form/Costumer";
import Input from "../form/Input"

import styles from './Costumers.module.css'
import React, { useState, useMemo } from "react";

function Costumers(){
    const {state} = useLocation()
    const dataUserLogged = state
    const costumers = dataUserLogged.costumers
    const [query, setQuery] = useState('')

    const costumersFiltered = useMemo(() => {
        const queryLowerCase  = query.toLowerCase()
        return costumers.filter(costumer => costumer.name.toLowerCase().includes(queryLowerCase))
    }, [query]) 
        

    return (
        <div className={styles.div_father}>
            <div className={styles.form}>
                <img src={Seller} alt="seller"/>
                <h1>Costumers</h1>
                <Input
                type="text"
                value={query}
                handleOnChange={(e) => setQuery(e.target.value)}
                name="search"
                placeholder="Search your costumer"
                key={query}                              
                />
                <div>
                  {
                    costumersFiltered.length === 0 ?
                    <h4>"You havent costumer in your wallet..."</h4> :
                     costumersFiltered.map((costumer) =>
                    <Link to='/costumer-info' state={[dataUserLogged, costumer]}>
                    <Costumer
                    id={costumer.id}
                    name={costumer.name}
                    />
                    </Link>
                    )         
                  }  
                <div className={styles.link_add_costumer}>
                    <Link to='/costumer-add' state={dataUserLogged}>
                    <img src={AddCostumer} alt=''/>
                    </Link>
                </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Costumers