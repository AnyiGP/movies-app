import { CardMovie, Layout } from "../../components";
import { PageControl } from "../../components/commons";
import { withAuth } from "../../hoc";
import { useMovies } from "../../hooks";

const LatestReleasesPage = () => {
  const { estrenos } = useMovies();

  return (
    <>
      <Layout>
        Ultimos Lanzamientos{/* 20 peliculas + paginador} */}
        <CardMovie items={estrenos} />
        <PageControl></PageControl>
      </Layout>
    </>
  );
};

// export { LatestReleases };
export const LatestReleases = withAuth(LatestReleasesPage);
