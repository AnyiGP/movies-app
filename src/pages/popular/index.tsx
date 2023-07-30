import { CardMovie, Layout } from "../../components";
import { PageControl } from "../../components/commons";
import { withAuth } from "../../hoc";
import { useMovies } from "../../hooks";

const PopularPage = () => {
  const { populares } = useMovies();

  return (
    <>
      <Layout>
        {" "}
        Populares{/* 20 peliculas + paginador} */}
        <CardMovie items={populares} />
        <PageControl></PageControl>
      </Layout>
    </>
  );
};

// export { Popular };
export const Popular = withAuth(PopularPage);
