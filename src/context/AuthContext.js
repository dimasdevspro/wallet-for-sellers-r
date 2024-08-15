import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
    // Inicializa o estado de autenticação com base no localStorage
    const [auth, setAuth] = useState(() => {
        // Lê o valor de autenticação do localStorage e converte para booleano
        const savedAuth = localStorage.getItem("auth");
        return savedAuth === "true"; // Converte o valor para booleano
    });

    useEffect(() => {
        // Armazena o valor de autenticação no localStorage, convertendo para string
        localStorage.setItem("auth", auth.toString());
    }, [auth]);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
