import { useEffect, useState } from "react"


export default function useCargarPeliculas() {
    const [peliculas, setPeliculas] = useState([])

    useEffect(() => { // Se usa para que no renderice multiples fetch
        // Obtengo todas las pelicuas
        fetch('/src/data/trailerflix.json')
          .then(response => response.json())
          .then(datos => setPeliculas(datos))
      },[])

    
  return (peliculas
   
  )
}
