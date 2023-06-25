import { useEffect, useState } from "react";
import { CardMovie, Layout, SearchForm } from "../../components";
import { withAuth } from "../../hoc";
import { useMovies } from "../../hooks";
import { useSearchParams } from "react-router-dom";
import { getSearch } from "../../services/moviesService";
import { Movie } from "../../types";

const SearchPage = () => {
  //no mostar las pelis hasta que el usuario empiece a escribir en el input de formulario del buscador

  //1- TRAER TODAS LA MOVIES DESDE EL SERVICIO O DESDE EL HOOK

  // const { allMovies } = useMovies();
  // const [movie, setMovie] = useState<Movie>();
  const [movie, setMovie] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const [params, setParams] = useState({ query: "" });

  //guarda el dato en la url, cambia arriba
  useEffect(() => {
    setSearchParams(params);
  }, [params]);

  
  useEffect(() => {
    const query = searchParams.get("query");

    getSearch({ query: query || "" }).then((response) => {
      setMovie(response.results);
    });
  }, [searchParams]);

   //2- FILTRAR A MEDIDA QUE EL USUARIO ESCRIBE EN EL INPUT

  // useEffect(() => {
  //   /////estaba probando la funci'on para que tome el texto y lo filtre en el sarch page

  //   // allMovies.getAll({text: ""}).then(data => setMovie(data))

  //   // getAll().then((response)=> {
  //   //   setMovie(response)
  //   // })

  //   //obtener el query param y guardar el query param
  //   // console.log(searchParams);

  //   //guarda el dato en la url, cambia arriba
  //   // setSearchParams({ prueba: "Valor Prueba" });
  // }, []);

  //3- MOSTRAR EL RESULTADO DEL FILTRADO EN CARDS EN UNA GRILLA EN LA PAGINA DE BUSQUEDA, a medida que el usuario escribe defin query param en la url o que devuelva los values.

  // const [] = useState();

  return (
    <>
      <Layout>
        Buscar
        {/* ({searchParams.get("prueba")}) //muestra lo q escribe en el buscador, el parámetro que define el usuario */}
        <SearchForm
          onSearch={(param: string) => {
            setParams((prevState) => ({ ...prevState, query: param }));
          }}
          // formulario donde tengo q ir a buscar el evento del btn
        />
        <CardMovie
          // items={allMovies}
          items={movie}
        />
      </Layout>
    </>
  );
};

// export { Search };
export const Search = withAuth(SearchPage);
