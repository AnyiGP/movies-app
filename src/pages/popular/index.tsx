import { Layout } from "../../components";
import { withAuth } from "../../hoc";

const PopularPage = () => {
  return (
    <>
      <Layout> Populares{/* 20 peliculas + paginador} */}</Layout>
    </>
  );
};

// export { Popular };
export const Popular = withAuth(PopularPage);
