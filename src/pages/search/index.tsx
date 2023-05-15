import { useEffect, useState } from "react";
import { CardMovie, Layout, SearchForm } from "../../components";
import { withAuth } from "../../hoc";
import { useMovies } from "../../hooks";
import { useSearchParams } from "react-router-dom";
import { getAll } from "../../services/moviesService";
import { Movie } from "../../types";

const SearchPage = () => {
  const { allMovies } = useMovies();


  const [movie, setMovie] = useState<Movie>();  

  const [searchParams, setSearchParams] = useSearchParams();



  // useEffect(() => {
  //   getById(id || "").then((response) => {
  //     setMovieId(response);
  //   });
  // }, [idText]);


  useEffect(()=>{
    
// getAll().then((response)=> {
//   setMovie(response)
// })
   console.log(searchParams)
// setSearchParams({prueba: 'Valor Prueba'})

  }, [])
  return (
    <>
      <Layout>
        Buscar
        <SearchForm
        // items={movies}
        />
        <CardMovie items={allMovies} />
      </Layout>
    </>
  );
};

// export { Search };
export const Search = withAuth(SearchPage);
