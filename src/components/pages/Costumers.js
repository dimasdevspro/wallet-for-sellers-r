import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom"

import Seller from '../../img/login.svg'
import AddCostumer from '../../img/Addcostumers.svg';
import Costumer from "../form/Costumer";
import Input from "../form/Input"

import styles from './Costumers.module.css'
import { useState } from "react";

function Costumers(){
    const {state} = useLocation()
    const dataUserLogged = state
    const costumers = dataUserLogged.costumers

    const submit = (e) => {
        e.preventDefault()
    }
       
    function filterCustomer(){
        fetch(`http://localhost:5000/seller/${dataUserLogged.id}`, {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            const costumers = data.costumers
            const search = document.getElementById('search').value
            const costumerFiltered = costumers.filter(costumer => costumer.name.includes(search))
            costumerFiltered && (
                <Costumer
                id={costumerFiltered.id}
                name={costumerFiltered.name}
                />)
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className={styles.div_father}>
            <form onSubmit={submit} className={styles.form}>
                <img src={Seller} alt="seller"/>
                <h1>Costumers</h1>
                <Input
                type="search"
                name="search"
                placeholder="Search your costumer"
                                
                />
                <button onClick={filterCustomer}>Procurar</button>
                <div>
                    {
                        costumers.length === 0 ? 
                        "Dont exist costumers in your wallet..." : 
                        costumers.map((costumer) => 
                        <Costumer 
                        id={costumer.id} 
                        name={costumer.name}
                        />)                        
                    }
                <div className={styles.link_add_costumer}>
                    <Link to='/costumer-add' state={dataUserLogged}>
                    <img src={AddCostumer} alt=''/>
                    </Link>
                </div>
                </div>
                
            </form>
            
        </div>
    )
}

export default Costumers