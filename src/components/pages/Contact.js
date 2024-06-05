import styles from './Contact.module.css';

function Contact(){
    return (
        <div className={styles.body}>
            <h1>Contact</h1>
            <p>Address: Rua São Constantino, 207 - Vila Santa Cruz</p>
            <p>CEP 04456-000 - São Paulo - S.P. - Brasil.</p>
            <p>Phone: +55(011)93222-8112</p>
        </div>
    )
}

export default Contact