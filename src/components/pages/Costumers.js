import { Link } from "react-router-dom"

function Costumers(){
    return (
        <div>
            List Costumers
            <ul>
                <li><Link to='/costumer-info'>Costumer info</Link></li>
            </ul>
        </div>
    )
}

export default Costumers