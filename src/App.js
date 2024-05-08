import wallet from '../src/img/wallet.svg'
import login from '../src/img/login.svg'
import register from '../src/img/register.svg'

function App() {
  return (
    <main>
      <h1>E-WALLET</h1><h4>FOR SELLERS</h4>
      <img src={wallet}/>
      <section>
        <div>
          <img src={login}/>
          <p>Login</p>
        </div>
        <div>
          <img src={register}/>
          <p>Register</p>
        </div>
      </section>
    </main>
  );
}

export default App;
