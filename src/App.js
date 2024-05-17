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
        <Link to='/login' className='access'>
        <img src={login} alt='login'/>
          <p>Login</p>
        </Link>
        <Link to='/register' className='access'>
          <img src={register} alt='register'/>
          <p>Register</p>
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
