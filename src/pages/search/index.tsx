import { useEffect, useState } from "react";
import { CardMovie, Layout, SearchForm } from "../../components";
import { withAuth } from "../../hoc";
import { useMovies } from "../../hooks";
import { useSearchParams } from "react-router-dom";
import { getAll, getSearch } from "../../services/moviesService";
import { Movie } from "../../types";

const SearchPage = () => {
 
 //1- TRAER TODAS LA MOVIES
  //DESDE EL SERVICIO O DESDE EL HOOK
    
  //getSearch

  const { allMovies } = useMovies();

  // const [movie, setMovie] = useState<Movie>();
  const [movie, setMovie] = useState([]);
  

  const [searchParams, setSearchParams] = useSearchParams();

  // useEffect(() => {
  //   getById(id || "").then((response) => {
  //     setMovieId(response);
  //   });
  // }, [idText]);

  
  //2- FILTRAR A MEDIDA QUE EL USUARIO ESCRIBE EN EL INPUT al array que me traido de peliculas le tengo que pasar el filter que es un metodo de array [] ver como se usaba
  
  useEffect(() => {

/////estaba probando la funci'on para que tome el texto y lo filtre en el sarch page

    // allMovies.getAll({text: ""}).then(data => setMovie(data))

    // getAll().then((response)=> {
    //   setMovie(response)
    // })

    //obtener el query param y guardar el query param
     console.log(searchParams)

     //guarda el dato en la url, cambia arriba
    // setSearchParams({ prueba: "Valor Prueba" });
    
  }, []);

    
  //3- MOSTRAR EL RESULTADO DEL FILTRADO EN CARDS EN UNA GRILLA EN LA PAGINA DE BUSQUEDA


  //al apretar el btn defin query param en la url o que devuelva los values. Formulario de filtros que sirva para todos.

  const [] = useState();

  return (
    <>
      <Layout>
        Buscar 
        {/* ({searchParams.get("prueba")}) */}
        <SearchForm
        // formulario donde tengo q ir a buscar el evento del btn
        />
        <CardMovie 
        // items={movies}
        items={allMovies} 
        />
      </Layout>
    </>
  );
};

// export { Search };
export const Search = withAuth(SearchPage);
