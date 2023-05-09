import { Layout, SearchForm } from "../../components";
import { withAuth } from "../../hoc";

const SearchPage = () => {
  return (
    
      <Layout>
        Buscar
        <SearchForm />
      </Layout>
    
  );
};

// export { Search };
export const Search = withAuth(SearchPage);
