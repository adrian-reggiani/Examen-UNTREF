import { useLocation } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"; 
import { useState } from "react";

export default function Header() {
    const {user, login, logout} = useContext(AuthContext) // Se extrae del AuthContext
    
    const [userCheck, setUserCheck] = useState(null)
    const [userLogin, setUserLogin] = useState('')
    const [pwdLogin, setPwdLogin] = useState('')
    
    const location = useLocation() // Sirve para saber en que url estas. Se obtiene un objeto
    
    const prueba = {
        user: 'prueba',
        pwd: 1234
    }

    const handleValidacion = (e) =>{ 
        e.preventDefault() // Detiene la recarga de la pagina al enviar un formulario
        console.log(userLogin, pwdLogin, prueba.user)

        if ( userLogin === prueba.user && pwdLogin == prueba.pwd){
            setUserCheck(true) 
            console.log('Usuario Logeado')
        }
        else{
            setUserCheck(false) 
            console.log('Usuario Erroneo')
        }
    }

    const handleLogout = () => {
        setUserCheck(false); // Cambia el estado para "deslogear" al usuario
        setUserLogin(''); // Limpia el estado del usuario
        setPwdLogin(''); // Limpia el estado de la contraseña
        console.log('Usuario ha cerrado sesión');
        
    }

  return (
    <div>
        <header>
            <div className="title">
             {location.pathname === '/' ? <h1 className="red-text logo-title">TRAILERFLIX </h1> : <h1 >Detalles de la Película </h1> }   
            </div>
            <div className="login-container">
                <form id="loginForm" style={{display: userCheck ? 'none' : 'block'}} onSubmit={handleValidacion}>
                    <input type="text" id="username" placeholder="Usuario" onChange = { (e) => setUserLogin(e.target.value)} required /> 
                    <input type="password" id="password" placeholder="Contraseña" onChange = { (e) => setPwdLogin(e.target.value)} required />
                    <button type="submit">Ingresar</button>
                </form>

                {userCheck === true ? 

                <div id="userInfo" style={{display: userCheck ? 'flex' : 'none'}}>
                    <span id="userNameDisplay">Bienvenido, {userLogin}</span>
                    <button id="logoutBtn" onClick={handleLogout}>Cerrar Sessión</button>
                </div>

                :
                    ''
                }
                
            </div>
        </header>
    </div>
  )
}
