import { useLocation } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"; 
import { useState } from "react";


export default function Header() {
    const {user, userCheck, setUserCheck, login, logout } = useContext(AuthContext) 
    
    //Se Almacena los valores de los input para despues borrar
    const [userLogin, setUserLogin] = useState('')
    const [pwdLogin, setPwdLogin] = useState('')
    
    const location = useLocation()

    //Pasa los valores al context y el return de login lo guarda en el estado
    const handleValidacion = (e) =>{ 
        e.preventDefault() // Detiene la recarga de la pagina al enviar un formulario
        setUserCheck(login(userLogin, pwdLogin)) 
    }

    // Sirve para limpiar al cerrar sesion
    const handleLogout = () => {
        setUserCheck(logout()) 
    
    }

  return (
    <div>
        <header>
            {/*Titulo del header */}
            <div className="title">
             {location.pathname === '/' ? <h1 className="red-text logo-title">TRAILERFLIX </h1> : <h1 >Detalles de la Película </h1> }   
            </div>

            {/*Formulario de ingreso de sesion */}
            <div className="login-container">
                <form id="loginForm" style={{display: userCheck ? 'none' : 'block'}} onSubmit={handleValidacion}> {/* Si hay algo en el userCheck cambia el css */}
                    <input type="text" id="username" placeholder="Usuario" onChange = { (e) => setUserLogin(e.target.value)} required /> 
                    <input type="password" id="password" placeholder="Contraseña" onChange = { (e) => setPwdLogin(e.target.value)} required />
                    <button type="submit">Ingresar</button>
                </form>

                <div>
                {/*Boton de Cierre de Sesion */}
                {userCheck ? 
                <div id="userInfo" style={{display: userCheck ? 'flex' : 'none'}}> 
                    <span id="userNameDisplay">Bienvenido, {user?.firstName}</span>
                    <button id="logoutBtn" onClick={handleLogout}>Cerrar Sessión</button>
                </div>

                : ''
            }
    </div>
  )
                
            </div>
        </header>
    </div>
  )
}
