import AddCostumer from '../../img/Addcostumers.svg';
import Save from '../../img/save.svg';
import Costumers from '../../img/Costumers.svg';

import styles from './CostumerAdd.module.css';

function CostumerAdd(){
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <img src={AddCostumer}/>
                <h1>Add Costumer</h1>
            </div>
        <form method="" action="" className={styles.form}>
            <div className={styles.input}>
                <label className={styles.sr_only} for="name-costumer">Name</label>
                <p>Name</p>
                <input type="text" name="name-costumeer" placeholder="insert to your name" required/>
            </div>
            <div className={styles.input}>
                <label className={styles.sr_only} for="email-costumer">Email</label>
                <p>Email</p>
                <input type="email" name="email-costumer" placeholder="insert to your email" required/>
            </div>    
            <div className={styles.input}>
                <label className={styles.sr_only} for="phone-costumer">Phone</label>
                <p>Phone</p>
                <input type="tel" name="phone-costumer" id="phone-costumer" 
                        placeholder="(xx)xxxxxxxxx"
                        />
            </div>
            <div>
                <p>Informations</p>
                <textarea name="informations" id="infos" className={styles.text_area}></textarea>
            </div>
            <div className={styles.buttons_form}>
                <button>
                    <img  src={Costumers} alt="Button for list costumers"/>
                </button>
                <button >
                    <img src={Save} alt="Button for save new costumer"/>
                </button>
            </div>
                
        </form>
        </div>
    )
}

export default CostumerAdd