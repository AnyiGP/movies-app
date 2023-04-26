import { CardMovie, Layout } from "../../components";
import { withAuth } from "../../hoc";
import { useMovies } from "../../hooks";

const PopularPage = () => {

  const { populares } = useMovies();

  return (
    <>
      <Layout> Populares{/* 20 peliculas + paginador} */}
      <CardMovie items={populares} />
      </Layout>
    </>
  );
};

// export { Popular };
export const Popular = withAuth(PopularPage);
