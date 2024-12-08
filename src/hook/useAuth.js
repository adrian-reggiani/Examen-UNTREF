import { useEffect, useState } from "react"


export default function useAuth() {

// Guarda el usuario
const [user, setUser] = useState(null)



// Estado que verifica el funcionamiento del login
const [userCheck, setUserCheck] =useState('')

// Verifica cuando se cambia la pagina que el usuario siga logeado
 useEffect(() => {
    const usuario = localStorage.getItem("user")
    !user ? setUserCheck(JSON.parse(usuario)) : ""
    
}, [user])


//Almacena el usuario en el localStorage
const setUserInStorage = ( user ) =>  localStorage.setItem( "user" , JSON.stringify(user))

console.log(user?.firstName)
  return ( { user, setUser, userCheck, setUserCheck, setUserInStorage}
    
  )
}
