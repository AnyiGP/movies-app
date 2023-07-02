import { Layout } from "../../components";
import { withAuth } from "../../hoc";
import { Carrousel, Pager } from "../../components/commons";
import { useMovies } from "../../hooks";
import { CardScroll } from "../../components/commons/card-scroll";

const HomePage = () => {
  const { movies } = useMovies();
  const { popular } = useMovies();
  const { top_rated } = useMovies();

  return (
    <>
      <Layout>
        <Carrousel items={movies}></Carrousel>
        Populares
        <CardScroll items={popular}></CardScroll>
        Mejor puntadas
        <CardScroll items={top_rated}></CardScroll>
        <Pager></Pager>
      </Layout>
    </>
  );
};

// //   //ejemplo de movies, creo un estado
// const [movies, setMovies] = useState([]);

// //   //pido a la api
// useEffect(() => {
//   apiMovies
//     .get("/movie/top_rated")
//     .then((response) => setMovies(response.data.results));
// }, [movies]);

//   return (
//     <>
//       <Layout>
//         Home
//         <ul>
//           {/* Slide 5 pelis+ Carrousel populares 10 pelis + Carrousel ultimos-lanzamientos 10 pelis */}
//           {movies.map((movie: Movie) => (
//             <Carrousel {...movie} />
//           ))}
//         </ul>
//       </Layout>
//     </>
//   );
// };

//////////////////////////////////

export const Home = withAuth(HomePage);
