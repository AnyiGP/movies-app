export type User = {
  id: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  birthdate: Date;
  token?: string | undefined | null
};

//creo un type para traer lo estado para el formulario
export type SignUpForm = Omit<User, "id" | "birthdate"> & { birthdate: Date };
export type SignUpPayload = SignUpForm;

export type LoginForm = {
  email: string,
  pass: string
}

export type Movie = {
  title: string;
  id: string;
  poster_path: string;
  description: string;
  video: boolean;
  overview: string;
  backdrop_path?: string | null;
  budget: string;
  homepage: string;
  release_date: string;
  vote_count: number;
};

export type imgMovie = {
  movie_id: string
}

export type PartialMovies = {
  items: Partial<Movie>[]
  text?: string
};



//   export type AddTaskForm = Omit<Task, "id" | "category" | "date"> & { category: string, date: string };
//   export type AddTaskPayload = Omit<Task, 'id'>
