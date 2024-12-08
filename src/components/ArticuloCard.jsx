import { useNavigate } from "react-router-dom";
import useCargarPeliculas from "../hook/useCargarPeliculas";

export default function ArticuloCard({ genero }) {
  const navegar = useNavigate()
  const peliculas = useCargarPeliculas() // Hook que carga las peliculas del JSON
  const peliculasGen = peliculas.filter( (peli) => peli.gen === genero ) // Filtra por genero

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
                <h2>{peliculasGen[0]?.gen}</h2> {/*El ? es porque el primer render inica el arreglo vacio y tira error. Sirve para esperar a que se cargue. */} 
              </article>
              
              {peliculasGen.map( (pelicula) => (
                <div className="card" key={pelicula.id} onClick={ () => handleNavegacion(pelicula.id)}> {/* Pasa el id al Handle para que se pueda navegar */ }
                  
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
