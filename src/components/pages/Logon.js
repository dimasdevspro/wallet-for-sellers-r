import { useLocation, useNavigate } from 'react-router-dom';

import styles from './Logon.module.css';

import Seller from '../../img/login.svg'
import Costumers from '../../img/Costumers.svg'
import Addcostumers from '../../img/Addcostumers.svg'

import { Link } from 'react-router-dom';

function Logon() {

    const location = useLocation()
    let dataUser = []
    
    if(location.state){
        dataUser = location.state
    }
    
    const navigate = useNavigate();

    function getCostumers(){
        fetch("https://localhost:5000/seller", {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        }).then((resp) => resp.json)
        .then((data) => {
            navigate('/costumers', {state: data})
        }).catch(err => console.log(err))

    }
    return(
        <div className={styles.div_father}>
            <form method='' action='' className={styles.form}>
                <img src={Seller} alt="seller"/>
                <h1>Seller</h1>
                <h2>{dataUser[0].name}</h2>
            <div className={styles.div_son}>
                <Link to='/costumers'>
                    <img src={Costumers} alt='Costumers'/>
                    <p>Costumers</p>
                </Link>
                <Link to='/costumer-add'>
                    <img src={Addcostumers} alt='Add costumers'/>
                    <p>Add Costumer</p>
                </Link>
            </div>
            </form>
        </div>
    )
}

export default Logon