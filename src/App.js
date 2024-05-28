import wallet from '../src/img/wallet.svg'
import login from '../src/img/login.svg'
import register from '../src/img/register.svg'
import { useNavigate, BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from '../src/components/pages/Login'
import Register from '../src/components/pages/Register'
import './App.css'

function App() {
  const navigate = useNavigate()
 
  function handleClickLogin(){
    navigate('/login')
  }

  function handleClickRegister(){
    navigate('/register')
  }

  return (
    <Router>
    
    <main>
      <h1>E-WALLET</h1><h4>FOR SELLERS</h4>
      <img src={wallet} alt='wallet'/>
      <section>
        <div>
        <img src={login} alt='login'/>
          <Link onClick={handleClickLogin}>Login</Link>
        </div>
        <div>
        <img src={register} alt='register'/>
          <Link onClick={handleClickRegister}>Register</Link>   
        </div>
      </section>
    </main>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;
