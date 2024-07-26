import styles from './TextArea.module.css';

function TextArea({text, name, handleOnChange, value, form, id}){
    console.log(`TextArea - value: ${value}, name: ${name}`);
    return (
        <div className={styles.input}>
                <p>{text}</p>
                <label 
                htmlFor={name} 
                className={styles.sr_only}>
                {text}
                </label>
                <textarea 
                text={text} 
                name={name} 
                id={id}
                form={form} 
                onChange={handleOnChange}
                valeu={value} 
                className={styles.text_area}/>
                
        </div>
    )
}

export default TextArea