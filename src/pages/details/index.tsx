import { useEffect, useState } from "react";
import { Layout } from "../../components";
import { withAuth } from "../../hoc";
import { useParams } from "react-router-dom";
import { Movie } from "../../types";
import { getById } from "../../services/moviesService";

const DetailsPage = () => {

  const [detail, setDetails] = useState<Movie>();
    const { id } = useParams()

    
        useEffect(() => {
        
            getById(id || "").then(response => {
            setDetails(response)})
            
        }, [])

      console.log(detail?.title)

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