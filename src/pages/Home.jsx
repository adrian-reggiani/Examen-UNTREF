import { useState } from "react";
import Header from "../components/Header";
import { useEffect } from "react";



export default function Home() {

const [peliculas, setPeliculas] = useState([])
const peliculasAccion = peliculas.find( (peli) => peli.gen === 'Acción')


useEffect(() => { // Se usa para que no renderice multiples fetch
  // Obtengo todas las pelicuas
  fetch('/src/data/trailerflix.json')
    .then(response => response.json())
    .then(datos => setPeliculas(datos))
},[])

console.log(peliculasAccion)

  return (
    <div className="black-background">
        <Header/>

          {
            peliculasAccion 
            ?
            <article className="container loading">
              <article className="genero"> 
                <h2>{peliculasAccion.gen}</h2> 
              </article>
              
              <div className="card">
              {/*TODO - Lo envuelve un link para redireccionar*/}
                
                <div className="card-picture">
                  <img src={peliculasAccion.poster} alt="" />
                </div>

                <div className="card-bottom"> 
                  <p className="card-bottom-title">{peliculasAccion.titulo}</p>

                </div>
                {/*TODO - Lo envuelve un link para redireccionar*/}
              </div>
            </article>


            : <p>No hay peliculas de Acción</p>
          }
        
          
        

        
    </div>
  )
}
