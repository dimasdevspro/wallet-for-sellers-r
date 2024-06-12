import AddCostumer from '../../img/Addcostumers.svg';
import Save from '../../img/save.svg';
import Costumers from '../../img/Costumers.svg';

import styles from './CostumerAdd.module.css';

function CostumerAdd(){
    return(
        <div className={styles.container}>
            <div>
                <img src={AddCostumer}/>
                <h1>Add Costumer</h1>
            </div>
        <form method="" action="" className={styles.form}>
            <div>
                <label className={styles.sr_only} for="name-costumer">Name</label>
                <p>Name</p>
                <input type="text" name="name-costumeer" placeholder="insert to your name" required/>
            </div>
            <div>
                <label className={styles.sr_only} for="email-costumer">Email</label>
                <p>Email</p>
                <input type="email" name="email-costumer" placeholder="insert to your email" required/>
            </div>    
            <div>
                <label className={styles.sr_only} for="phone-costumer">Phone</label>
                <p>Phone</p>
                <input type="tel" name="phone-costumer" id="phone-costumer" 
                        placeholder="+xx(xx)xxxxxxxxx"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
            </div>
            <div>
                <p>Informations</p>
                <textarea name="informations" id="infos" ></textarea>
            </div>
                <button>
                    <img  src={Costumers} alt="Button for list costumers"/>
                </button>
                <button >
                    <img src={Save} alt="Button for save new costumer"/>
                </button>
        </form>
        </div>
    )
}

export default CostumerAdd