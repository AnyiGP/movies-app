import axios from "axios";

const api = axios.create({
  baseURL: "https://movies-app-7da5f-default-rtdb.firebaseio.com/",
  params: {
    api_key: "prueba",
  },
});

const apiMovies = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "0405b750dbf200c7022fd7f43532ad58",
  },
});


export { api, apiMovies };

// api.post("/users.json");
// api.post("/addCategory.json")
