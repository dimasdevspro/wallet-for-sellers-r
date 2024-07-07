import Save from '../../img/save.svg';
import Costumers from '../../img/Costumers.svg';

import Input from './Input';
import TextArea from './TextArea';
import styles from './CostumerAddForm.module.css';

import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function CostumerAddForm({handleSubmit, customerData}) {

    const {state} = useLocation()
    const dataUser = state

    const [customer, setCustomer ] =  useState(customerData || {})

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(customer)
    }

    function handleChange(e) {
        setCustomer({...customer, [e.target.name]: e.target.value})
    }

    return (
        <form id="CostumerAddForm" onSubmit={submit} className={styles.form}>
            <Input
            text='Name'
            type='text'
            name='name'
            placeholder='insert name by costumer'
            handleOnChange={handleChange}
            value={customer.name ? customer.name : ''}
            />
            <Input
            text='Email'
            type='email'
            name='email'
            placeholder='insert email by costumer'
            handleOnChange={handleChange}
            value={customer.email ? customer.email : ''}
            />
            <Input
            text='Phone'
            type='tel'
            name='phone'
            placeholder='insert phone by costumer'
            handleOnChange={handleChange}
            value={customer.phone ? customer.phone : ''}
            />   
            <TextArea
            name='Informations'
            form="CostumerAddForm"
            />
            <div className={styles.buttons_form}>
                <Link to='/costumers' state={dataUser}>
                    <img src={Costumers} alt='Costumers'/>
                </Link>
                <button >
                    <img src={Save} alt="Button for save new costumer"/>
                </button>
            </div>
                
        </form>
    )
}

export default CostumerAddForm