import { Layout } from "../../components";
import { withAuth } from "../../hoc";

const DetailsPage = () => {
  return (
    <>
      {" "}
      Detalles
      <Layout>
        {/* Card con detalles reutilizable + botón para reproducir el triler */}
      </Layout>
    </>
  );
};

// export { Details };
export const Details = withAuth(DetailsPage)