import styles from './TextArea.module.css';

function TextArea({text, name, id, form}){
    return (
        <div className={styles.input}>
                <p>{text}</p>
                <label htmlFor={id} className={styles.sr_only}></label>
                <textarea text={text} name={name} id={id} form={form} className={styles.text_area}></textarea>
        </div>
    )
}

export default TextArea