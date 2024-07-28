import styles from './CostumerInfos.module.css'

function CostumerInfos({id, name, email, phone, company}){
    return(
        <div className={styles.costumer} >           
            <h4 id={id}>Name: {name}</h4>
            <h4>Email: {email}</h4>
            <h4>Tel: {phone}</h4>
            <h4>Company: {company}</h4>
        </div>
    )
}

export default CostumerInfos