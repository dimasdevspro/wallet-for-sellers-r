import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../src/components/pages/Home'
import Login from '../src/components/pages/Login'
import Register from '../src/components/pages/Register'
import App1 from '../src/components/pages/App'
import Contact from '../src/components/pages/Contact'
import Logon from '../src/components/pages/Logon'
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
      <Route path='/company' element={<App1/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/logon' element={<Logon/>}/>

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
