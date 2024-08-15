import styles from './CostumerEditForm.module.css'

import Save from '../../img/save.svg'
import Delete from '../../img/delete.svg'

import Input from '../form/Input'

import { useState, useEffect } from 'react'

function CostumerEditForm({ handleSubmitEdit, handleSubmitDelete, costumer }) {

    const [costumerEdited, setCostumerEdited] = useState({});

    useEffect(() => {
        setCostumerEdited(costumer || {});
    }, [costumer]);

    const submit = (e) => {
        e.preventDefault();
        handleSubmitEdit(costumerEdited);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setCostumerEdited(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const submitDelete = (e) => {
        e.preventDefault();
        handleSubmitDelete()
    }
    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                text='Name'
                type='text'
                name='name'
                placeholder='Insert customer name'
                handleOnChange={handleChange}
                value={costumerEdited.name || ''}
            />
            <Input
                text='Email'
                type='email'
                name='email'
                placeholder='Insert customer email'
                handleOnChange={handleChange}
                value={costumerEdited.email || ''}
            />
            <Input
                text='Phone'
                type='tel'
                name='phone'
                placeholder='Insert customer phone'
                handleOnChange={handleChange}
                value={costumerEdited.phone || ''}
            />
            <Input
                text="Company"
                type='text'
                name='company'
                placeholder='Insert company name'
                handleOnChange={handleChange}
                value={costumerEdited.company || ''}
            />
            <div className={styles.buttons_form}>
                <button onClick={submitDelete}>
                    <img src={Delete} alt="Button for delete customer" />
                </button>
                <button type="submit">
                    <img src={Save} alt="Button to save customer" />
                </button>
            </div>
        </form>
    );
}

export default CostumerEditForm;