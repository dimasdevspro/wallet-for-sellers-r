import Save from '../../img/save.svg';
import Costumers from '../../img/Costumers.svg';

import Input from './Input';
import styles from './CostumerAddForm.module.css';

import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function CostumerAddForm({handleSubmit, costumerData}) {

    const {state} = useLocation()
    const dataUser = state

    const [costumer, setCostumer ] =  useState(costumerData || {})

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(costumer)
        setCostumer({})
        costumer.infomations = ''
    }

    function handleChange(e) {
        setCostumer({...costumer, [e.target.name]: e.target.value})
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
            text='Name'
            type='text'
            name='name'
            placeholder='insert name by costumer'
            handleOnChange={handleChange}
            value={costumer.name || ''}
            />
            <Input
            text='Email'
            type='email'
            name='email'
            placeholder='insert email by costumer'
            handleOnChange={handleChange}
            value={costumer.email || ''}
            />
            <Input
            text='Phone'
            type='tel'
            name='phone'
            placeholder='insert phone by costumer'
            handleOnChange={handleChange}
            value={costumer.phone || ''}
            />
            <Input
            text="Company"
            type='text'
            name='company'
            placeholder='insert name by company'
            handleOnChange={handleChange}
            value={costumer.company || ''}   
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