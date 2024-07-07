import styles from './TextArea.module.css';

function TextArea({name, id, form }){
    return (
        <div className={styles.input}>
                <p>{name}</p>
                <textarea name={name} id={id} form={form}className={styles.text_area}></textarea>
        </div>
    )
}

export default TextArea