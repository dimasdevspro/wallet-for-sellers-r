
import { BrowserRouter as Router, Routes as Switch, Route, redirect } from 'react-router-dom'
import Home from '../components/pages/Home'
import Login from '../components/pages/Login'
import Register from '../components/pages/Register'
import App1 from '../components/pages/App'
import Contact from '../components/pages/Contact'
import Logon from '../components/pages/Logon'
import Costumers from '../components/pages/Costumers'
import CostumerInfo from '../components/pages/CostumerInfo'
import CostumerAdd from '../components/pages/CostumerAdd'
import Navbar from '../components/layout/Navbar'
import Navbar2 from '../components/layout/Navbar2'
import Footer from '../components/layout/Footer'
import { isAuthenticated } from '../auth'

const msgLoginError = 'Incorrect email or password!'

const PrivateRoute = ({ component: Component, ...rest}) => {
    <Route { ...rest} render={props => (
        isAuthenticated() ? (
            <Component { ...props} />
        ) : 
            (
                redirect("/", {state: {from: props.location}, msgLoginError})
            )
        
    )}/>
}

function Routes(){

    return (
<Router>
    <Navbar/>
    <Navbar2/>
    <Switch>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/company' element={<App1/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/logon' element={<Logon/>}/>
        <Route path='/costumers' element={<Costumers/>}/>
        <Route path='/costumer-info' element={<CostumerInfo/>}/>
        <Route path='/costumer-add' element={<CostumerAdd/>}/>
    </Switch>
    <Footer/>
</Router>
    )
}

export default Routes