import { useEffect, useState } from "react";
import { Layout } from "../../components";
import { withAuth } from "../../hoc";
import { useParams } from "react-router-dom";
import { Movie } from "../../types";
import { getById } from "../../services/moviesService";
import { Container } from "react-bootstrap";

const DetailsPage = () => {
  const [detail, setDetails] = useState<Movie>();
  const { id } = useParams();

  useEffect(() => {
    getById(id || "")
    
    .then((response) => {
      setDetails(response);
    });
  }, []);

  console.log(detail);

  return (
    <>
      <Layout>
        {/* Card con detalles reutilizable + botón para reproducir el triler */}
        <Container>
          <div>
            <h2>DETALLES{id}</h2>
            <h3>{detail?.title}</h3>
            <p>{detail?.id}</p>
          </div>
        </Container>
      </Layout>
    </>
  );
};

// export { Details };
export const Details = withAuth(DetailsPage);
