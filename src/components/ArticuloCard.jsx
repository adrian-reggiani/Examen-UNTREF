import { useNavigate } from "react-router-dom";
import useCargarPeliculas from "../hook/useCargarPeliculas";

export default function ArticuloCard({ genero }) {
  const navegar = useNavigate()

  // Hook que carga las peliculas del JSON
  const peliculas = useCargarPeliculas() 

  // Filtra por genero
  const peliculasGen = peliculas.filter( (peli) => peli.gen === genero ) 

  //Redirige segun id
  const handleNavegacion = ((id) => (
    navegar(`/movie/${id}`)
  ))
  

  return (
    <section>
      {
            peliculasGen 
            ?

            <article className="container loading">
              <article className="genero"> 
                <h2>{peliculasGen[0]?.gen}</h2> 
              </article>
              
              {peliculasGen.map( (pelicula) => (
                <div className="card" key={pelicula.id} onClick={ () => handleNavegacion(pelicula.id)}> 
                    <div className="card-picture">
                      <img src={pelicula.poster} alt="" />
                    </div>
    
                    <div className="card-bottom"> 
                      <p className="card-bottom-title">{pelicula.titulo}</p>
                      <p className="card-bottom-paragraph">Pelicula</p>
                    </div>
                </div>
                
              ) ) }
              </article>
            : <p>No hay peliculas de Acción</p>
        }
        
    </section>
  )
}
