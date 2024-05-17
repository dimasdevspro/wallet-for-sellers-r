import wallet from '../src/img/wallet.svg'
import login from '../src/img/login.svg'
import register from '../src/img/register.svg'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Login from '../src/components/pages/Login'
import Register from '../src/components/pages/Register'
import './App.css'

function App() {
  return (
    <main>
      <h1>E-WALLET</h1><h4>FOR SELLERS</h4>
      <img src={wallet} alt='wallet'/>
      <Router>
      <section>
        <Link to='/login'>
        <img className='access' src={login} alt='login'/>
          <p className='access'>Login</p>
        </Link>
        <Link to='/register'>
          <img className='access' src={register} alt='register'/>
          <p className='access'>Register</p>
        </Link>
      </section>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </Router>
    </main>
  );
}

export default App;
