import React, { useContext } from 'react';
import { AuthContext } from './context/AuthContext'

import PublicRoutes from './routes/public.routes';
import PrivateRoutes from './routes/private.routes';



import './App.css'

function App() {
  const {auth} = useContext(AuthContext)
   
  return auth ? <PrivateRoutes/> : <PublicRoutes/>
}

export default App;
