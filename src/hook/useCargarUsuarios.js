import { useEffect, useState } from "react"


export default function useCargarUsuarios() {
    const [usuarios, setUsuarios] = useState([])

    // Obtengo todas las pelicuas
    useEffect(() => { 
        fetch('/src/data/usuarios.json')
          .then(response => response.json())
          .then(datos => setUsuarios(datos))
      },[])

    
  return (usuarios
   
  )
}
