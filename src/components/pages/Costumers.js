
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom"

import Seller from '../../img/login.svg'
import AddCostumer from '../../img/Addcostumers.svg';
import Costumer from "../form/Costumer";
import Input from "../form/Input"

import styles from './Costumers.module.css'
import React, { useEffect, useState } from "react";

function Costumers(){
    const {state} = useLocation()
    const dataUserLogged = state
    const costumers = dataUserLogged.costumers
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])

    const handleSearch = (e) => {
        const query = e.target.value
        setQuery(query)
    }
    
        useEffect(() => {
            if (query !== '') {
                fetch(`http://localhost:5000/seller/${dataUserLogged.id}/?q=${query}`,{
            method: 'GET',
            headers: {
                'Content-type':"application/json"
            }
            })
            .then(resp => resp.json())
            .then((data) => {
                setResults(data.costumers)
                console.log(results)
            })
            .catch(error => { console.error('Error fetching data:', error)})
            }else {
                setResults([])
            }
        }, [query])
        
         
    
    return (
        <div className={styles.div_father}>
            <div className={styles.form}>
                <img src={Seller} alt="seller"/>
                <h1>Costumers</h1>
                <Input
                type="text"
                value={query}
                handleOnChange={handleSearch}
                name="search"
                placeholder="Search your costumer"                               
                />
                <div>
                  {
                    results.length === 0 ? 
                    costumers.map((costumer) =>
                    <Costumer
                    id={costumer.id}
                    name={costumer.name}
                    />
                    )
                     : 
                    results.map((result) => 
                    <Costumer 
                    id={result.id} 
                    name={result.name}
                    />)            
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