import { Layout } from "../../components";
import { withAuth } from "../../hoc";
import { Carrousel } from "../../components/commons";
import { useMovies } from "../../hooks";

const HomePage = () => {

const { movies } = useMovies();
 const { popular } = useMovies()
 const { top_rated } = useMovies()

  // const [movies, setMovies] = useState([]);
  // const [popular, setPopular] = useState([]);
  // const [latest, setLatest] = useState([]);

  // useEffect(() => {
  //   apiMovies
  //     .get("/movie/now_playing")
  //     .then((response) => setMovies(response.data.results.splice(0, 8)));
  // }, []);
  
  // useEffect(() => {
  //   apiMovies
  //     .get("/movie/popular")
  //     .then((response) => setPopular(response.data.results.splice(0, 10)));
  // }, []);
  
  // useEffect(() => {
  //   apiMovies
  //     .get("/movie/top_rated")
  //     .then((response) => setLatest(response.data.results.splice(0, 10)));
  // }, []);
  
  return (
  <>
  <Layout>
  <Carrousel items={movies}></Carrousel>
  <Carrousel items={popular}></Carrousel>
  <Carrousel items={top_rated}></Carrousel>
  </Layout>
  </>
  )
};

// //   //ejemplo de movies, creo un estado
// const [movies, setMovies] = useState([]);

// //   //pido a la api
// useEffect(() => {
//   apiMovies
//     .get("/movie/top_rated")
//     .then((response) => setMovies(response.data.results));
// }, [movies]);

/////////////////////////

// useEffect(() => {
//    getLastRelases().then((response) => setMovies(response.data.results))
// }, []);

// useEffect(() => {
//   loadMovies()
// }, [])

/////////////////////////////
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
// export { Home };
export const Home = withAuth(HomePage);
