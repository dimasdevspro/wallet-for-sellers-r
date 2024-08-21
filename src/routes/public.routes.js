import React from 'react'
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom'
import Home from '../components/pages/Home'
import Login from '../components/pages/Login'
import Register from '../components/pages/Register'
import App1 from '../components/pages/App'
import Contact from '../components/pages/Contact'
import Navbar from '../components/layout/Navbar'
import Navbar2 from '../components/layout/Navbar2'
import Footer from '../components/layout/Footer'
import ForgotPassword from '../components/pages/ForgotPassword'
import ResetPassword from '../components/pages/ResetPassword'

function PublicRoutes(){

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
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='/reset-password/:token' element={<ResetPassword/>}/>
    </Switch>
    <Footer/>
</Router>
    )
}

export default PublicRoutes