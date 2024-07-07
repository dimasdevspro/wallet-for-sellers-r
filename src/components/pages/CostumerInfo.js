import { useLocation } from "react-router-dom"

function CostumerInfo(){

    const {state} = useLocation()
    console.log(state)
    return (
        <div>Form Costumer</div>
        
    )
}

export default CostumerInfo