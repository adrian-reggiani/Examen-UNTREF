import useCargarPeliculas from "../hook/useCargarPeliculas";
import ArticuloCard from "./ArticuloCard";


export default function Categorias() {
    // Cargo en el componente las peliculas
    const peliculas = useCargarPeliculas()

    //Se aplica reduce a categoria para obtener los generos sin repetir y se usa sort para ordenar
    const categorias = peliculas.reduce((acc , pelicula ) => {

        if (!acc.includes(pelicula.gen)){
            acc.push(pelicula.gen)
        }

        return acc;
    },[]).sort()

  return (
    
    <>
        {/*Se utiliza un map para crear cada ArticuloCard con su genero y correspondiente */}
        {
            categorias.map( (cat, index) => (
                
                <ArticuloCard key={index}  
                    genero = {cat}
                />
            )
          )
        }
      
    </>
  )
}
