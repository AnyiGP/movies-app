import { useEffect, useState } from "react";
import { CardMovie, Layout, SearchForm } from "../../components";
import { withAuth } from "../../hoc";
import { useMovies } from "../../hooks";
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const { allMovies } = useMovies();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(()=>{

//    console.log(searchParams)
setSearchParams({prueba: 'Valor Prueba'})

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
