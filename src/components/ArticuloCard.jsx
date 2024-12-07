import useCargarPeliculas from "../hook/useCargarPeliculas";

export default function ArticuloCard({ genero }) {
  
  const peliculas = useCargarPeliculas()
  const peliculasAccion = peliculas.filter( (peli) => peli.gen === genero )
  

  return (
    <div>
      {
            peliculasAccion 
            ?

            <article className="container loading">
              <article className="genero"> 
                <h2>{peliculasAccion[0]?.gen}</h2> 
              </article>
              
              {peliculasAccion.map( (peliculas) => (
                <div className="card" key={peliculas.id}>
                  
                  <div className="card-picture">
                    <img src={peliculas.poster} alt="" />
                  </div>
  
                  <div className="card-bottom"> 
                    <p className="card-bottom-title">{peliculas.titulo}</p>
  
                  </div>
                  {/*TODO - Lo envuelve un link para redireccionar*/}
                </div>
                
              ) ) }
              </article>



            : <p>No hay peliculas de Acción</p>
          }
        
    </div>
  )
}
