import {createContext, useState } from "react";
import useCargarUsuarios from "../hook/useCargarUsuarios"

export const AuthContext = createContext()


export const AuthProvider = ({ children}) => {

    //Buscar Usuario
    const listaUsuarios = useCargarUsuarios() // Trae los usuarios
    const usuarios = listaUsuarios.users
    
    // Guarda el usuario
    const [user, setUser] = useState(null)

    //validar usuario
    const login = ( userLogin, pwdLogin ) => {
        // Comparacion del userlogin con el listado de usuario
        const resultado = usuarios.find( (usuario) => ( usuario.username === userLogin && usuario.password === pwdLogin)) 
        resultado ? setUser(resultado) : alert( 'Usuario Erroneo')
        return resultado
    } 
    
    // Limpia el login
    const logout = () => {
        setUser(null)

        return null
    } 
   
    return(
        <AuthContext.Provider value={ { user, login, logout}}>
            { children }
        </AuthContext.Provider>

    )
}