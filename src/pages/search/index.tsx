import { Layout } from "../../components";
import { withAuth } from "../../hoc";

const SearchPage = () => {
  return (
    <>
      <Layout>Buscar{/* formulario buscador */}</Layout>
    </>
  );
};

// export { Search };
export const Search = withAuth(SearchPage);
