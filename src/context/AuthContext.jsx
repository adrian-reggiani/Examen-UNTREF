import {createContext } from "react";
import useCargarUsuarios from "../hook/useCargarUsuarios"
import useAuth from "../hook/useAuth";

export const AuthContext = createContext()


export const AuthProvider = ({ children}) => {
    
    const { user, setUser, userCheck, setUserCheck, setUserInStorage } = useAuth()

    //Buscar Usuario
    const listaUsuarios = useCargarUsuarios() // Trae los usuarios
    const usuarios = listaUsuarios.users
    
    //validar usuario
    const login = ( userLogin, pwdLogin ) => {
        // Comparacion del userlogin con el listado de usuario
        const resultado = usuarios.find( (usuario) => ( usuario.username === userLogin && usuario.password === pwdLogin)) 
        resultado ? setUser(resultado) : alert( 'Usuario Erroneo')
        setUserInStorage(resultado)
        return resultado
    } 
    
    // Limpia el login
    const logout = () => {
        setUser(null)
        localStorage.clear()
        return null
    } 

    

    return(
        <AuthContext.Provider value={ { user, userCheck, setUserCheck, login, logout}}>
            { children }
        </AuthContext.Provider>

    )
}