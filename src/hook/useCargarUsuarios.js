import { useEffect, useState } from "react"


export default function useCargarUsuarios() {
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => { // Se usa para que no renderice multiples fetch
        // Obtengo todas las pelicuas
        fetch('/src/data/usuarios.json')
          .then(response => response.json())
          .then(datos => setUsuarios(datos))
      },[])

    
  return (usuarios
   
  )
}
