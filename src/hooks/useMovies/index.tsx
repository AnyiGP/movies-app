import { useContext } from "react"
import { StoreContext} from "../../contexts"
import { useEffect, useState } from "react";
import { apiMovies } from "../../utils/axios";


const useMovies = () => {

    //getMovie para
    // const { users } = useContext(StoreContext)
    // return { users }

//   //ejemplo de movies, creo un estado
const [movies, setMovies] = useState([]);

//   //pido a la api
useEffect(() => {
  apiMovies
    .get("/movie/top_rated")
    .then((response) => setMovies(response.data.results));

  //TENGO QUE HACER LO DE ARRIBA EN EL SERVICIO DE API MOVIES
}, [movies]);

return { movies }

}

export {useMovies}