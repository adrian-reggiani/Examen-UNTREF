import { useLocation } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"; 
import { useState } from "react";


export default function Header() {
    const { login, logout } = useContext(AuthContext) // Se extrae del AuthContext
    const [userCheck, setUserCheck] =useState('')
    
    const [userLogin, setUserLogin] = useState('')
    const [pwdLogin, setPwdLogin] = useState('')
    
    const location = useLocation() // Sirve para saber en que url estas. Se obtiene un objeto
    
    const handleValidacion = (e) =>{ 
        e.preventDefault() // Detiene la recarga de la pagina al enviar un formulario
        setUserCheck(login(userLogin, pwdLogin)) //Pasa los valores al context y el return de login lo guarda en el estado
       
    }

    const handleLogout = () => {
        setUserCheck(logout()) 
        setUserLogin('')
        setPwdLogin('')
    }

  return (
    <div>
        <header>
            <div className="title">
             {location.pathname === '/' ? <h1 className="red-text logo-title">TRAILERFLIX </h1> : <h1 >Detalles de la Película </h1> }   
            </div>
            <div className="login-container">
                <form id="loginForm" style={{display: userCheck ? 'none' : 'block'}} onSubmit={handleValidacion}> {/* Si hay algo en el userCheck cambia el css */}
                    <input type="text" id="username" placeholder="Usuario" onChange = { (e) => setUserLogin(e.target.value)} required /> 
                    <input type="password" id="password" placeholder="Contraseña" onChange = { (e) => setPwdLogin(e.target.value)} required />
                    <button type="submit">Ingresar</button>
                </form>

                {userCheck ? 

                <div id="userInfo" style={{display: userCheck ? 'flex' : 'none'}}> {/* Si hay algo en el userCheck cambia el css */}
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
