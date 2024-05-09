import wallet from '../src/img/wallet.svg'
import login from '../src/img/login.svg'
import register from '../src/img/register.svg'

import './App.css'

function App() {
  return (
    <main>
      <h1>E-WALLET</h1><h4>FOR SELLERS</h4>
      <img src={wallet}/>
      <section>
        <div>
          <img className='access' src={login}/>
          <p className='access'>Login</p>
        </div>
        <div>
          <img className='access' src={register}/>
          <p className='access'>Register</p>
        </div>
      </section>
    </main>
  );
}

export default App;
