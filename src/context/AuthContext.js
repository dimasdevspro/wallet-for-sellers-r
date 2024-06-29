import React, { createContext, useState } from "react";
//função que constroe o Provider e também permite consumir os Dados Globais
export const AuthContext = createContext()
//Componente Provider para passar os valores para os Childrens
function AuthProvider({children}) {
    const [auth, setAuth] = useState(false)

    
    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider