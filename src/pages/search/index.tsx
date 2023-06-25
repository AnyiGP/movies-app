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

  //3- MOSTRAR EL RESULTADO DEL FILTRADO EN CARDS EN UNA GRILLA EN LA PAGINA DE BUSQUEDA, a medida que el usuario escribe define query param en la url y devuelve los values.

  return (
    <>
      <Layout>
        Buscar
        <SearchForm
          onSearch={(param: string) => {
            setParams((prevState) => ({ ...prevState, query: param }));
          }}
          // formulario donde tengo q ir a buscar el evento onChange
        />
        <CardMovie
          // items={allMovies}
          items={movie}
        />
      </Layout>
    </>
  );
};

export const Search = withAuth(SearchPage);
