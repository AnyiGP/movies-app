import { CardMovie, Layout } from "../../components";
import { withAuth } from "../../hoc";
import { useMovies } from "../../hooks";

const LatestReleasesPage = () => {
  const { estrenos } = useMovies();

  return (
    <>
      <Layout>
        Ultimos Lanzamientos{/* 20 peliculas + paginador} */}
        <CardMovie items={estrenos} />
      </Layout>
    </>
  );
};

// export { LatestReleases };
export const LatestReleases = withAuth(LatestReleasesPage);
