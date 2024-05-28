import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../src/components/pages/Home'
import Login from '../src/components/pages/Login'
import Register from '../src/components/pages/Register'
import Company from '../src/components/pages/Company'
import Contact from '../src/components/pages/Contact'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import './App.css'

function App() {
 
  return (

    <Router>
      <Navbar/>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/company' element={<Company/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
