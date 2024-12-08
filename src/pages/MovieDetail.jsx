import { useParams } from "react-router-dom"
import useCargarPeliculas from "../hook/useCargarPeliculas"
import { useEffect, useState } from "react"
import Header from "../components/Header"

export default function MovieDetail() {
  const { id } = useParams()
  // Hook que carga las peliculas del JSON
  const peliculas = useCargarPeliculas() 
  const [pelicula, setPelicula] = useState(null)

  // Pelicula encontra segun ID
  useEffect(() => {
      const peliculaEncontrada = peliculas.find( ( peli ) => ( peli.id === parseInt(id)))
      setPelicula(peliculaEncontrada)
   
  }, [id, peliculas]);
  

  return (
    <> 
      <Header />
      
      <div className="container"> 
    
          <div className="movie-poster">
            <img src={ `/public/posters/${id}.jpg`} alt="{pelicula.titulo}" />
          </div>

          <div className="movie-info">
            <h2>{pelicula?.titulo}</h2>
            <p><strong>Resumen:</strong> {pelicula?.resumen}</p>
            <iframe width="560" height="315" src={`${pelicula?.trailer}`} style={{ border: "none"}} allowFullScreen></iframe>
            <p><strong>Reparto:</strong> {pelicula?.reparto}</p>
          </div>

      </div>
    </> 
  )
}
