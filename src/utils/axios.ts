import axios from "axios";

const api = axios.create({
  baseURL: "https://movies-app-7da5f-default-rtdb.firebaseio.com/"});

// api.post("/users.json");

// solicitadues mas complejas que son a la base de datos de firebase
// post para registrar,
// get para buscar a los usuarios
// patch para guardar el token

// formulario de login, de sign-up y de registro

const apiMovies = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "0405b750dbf200c7022fd7f43532ad58",
  },
});

export { api, apiMovies };