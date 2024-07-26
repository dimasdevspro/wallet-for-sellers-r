import styles from './Input.module.css';

function Input({type, text, name, placeholder, handleOnChange, value, id}){
    return (
        <div className={styles.input}>
            <label htmlFor={name} className={styles.sr_only}>{text}</label>
            <p>{text}</p>
            <input 
            type={type}
            name={name}
            id={id} 
            placeholder={placeholder}
            onChange={handleOnChange}
            value={value}
            />
        </div>
    )
}

export default Input