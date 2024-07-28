import styles from './CostumerEditForm.module.css'

import Save from '../../img/save.svg'
import Delete from '../../img/delete.svg'

import Input from '../form/Input'

import { useState } from 'react'

function CostumerEditForm({handleSubmitEdit, handleSubmitDelete, CostumerEditedData, costumer }){

    const [costumerEdited, setCostumerEdited ] =  useState(CostumerEditedData || {})

    const submit = (e) => {
        e.preventDefault()
        handleSubmitEdit(costumerEdited)
    }

    function handleChange(e) {
        setCostumerEdited({[e.target.name]: e.target.value})
    }

     return(
       
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
                <button onClick={handleSubmitDelete}>
                    <img src={Delete} alt="Button for delete costumer"/>
                </button>
                <button onClick={handleSubmitEdit}>
                    <img src={Save} alt="Button for save costumer"/>
                </button>
            </div>
                
        </form>

    )
}

export default CostumerEditForm