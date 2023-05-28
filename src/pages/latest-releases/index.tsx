import { Layout } from "../../components";
import { withAuth } from "../../hoc";

const LatestReleasesPage = () => {
  return (
    <>
      <Layout>Ultimos Lanzamientos{/* 20 peliculas + paginador} */}</Layout>
    </>
  );
};

// export { LatestReleases };
export const LatestReleases = withAuth(LatestReleasesPage)
