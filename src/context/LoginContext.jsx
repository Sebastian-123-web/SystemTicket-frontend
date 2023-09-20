import { useState, useContext, createContext } from "react";

import { Autenticacion } from "../helpers/Autenticacion";

const LoginContext = createContext()

export const useLoginContext = () => useContext(LoginContext)

export const LoginContextProvider = ({children}) => {
    
    const [user, setUser] = useState(()=>{
        if(localStorage.getItem('user')){
            return localStorage.getItem('user')
        }
        return null
    })

    // INICIO DE SESION Y CERRAR SESION
    const login = async (loginUser) => {
        const dataUser = await Autenticacion(loginUser)
        setUser(dataUser)
        if(dataUser){
            localStorage.setItem('user', JSON.stringify(dataUser));
        }
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('user');
    }

    const estadoUsuario = () => {
        var dataUser = JSON.parse(localStorage.getItem('user')) // devuelve datos usuarios o null
        return dataUser
    }

    return (
        <LoginContext.Provider value={{user, login, logout, estadoUsuario}}>
            {children}
        </LoginContext.Provider>
    )
}