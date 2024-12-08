import { useEffect, useState } from "react"


export default function useCargarPeliculas() {
    const [peliculas, setPeliculas] = useState([])

    // Obtengo todas las pelicuas
    useEffect(() => {
        fetch('/src/data/trailerflix.json')
          .then(response => response.json())
          .then(datos => setPeliculas(datos))
      },[])

    
  return (peliculas
   
  )
}
