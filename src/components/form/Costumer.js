import styles from './Costumer.module.css'

function Costumer({id, name}){
    return(
        <div className={styles.link_costumer} >           
            <h4 id={id}>{name}</h4>
        </div>
    )
}

export default Costumer