export type User = {
  id: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  birthdate: Date;
  token?: string
};

//creo un type para traer lo estado para el formulario
export type SignUpForm = Omit<User, "id" | "birthdate"> & { birthdate: Date };
export type SignUpPayload = SignUpForm;

export type LoginForm = {
  email: string,
  password: string
}

export type Movie = {
  id: string;
  title: string;
  // date: Date;
  poster_path: string;
  description: string;
  video: boolean;
  //faltan agregar propiedades
};


export type MovieTypePayload = Omit<Movie, "id">;
// export { Movie }


//   export type AddTaskForm = Omit<Task, "id" | "category" | "date"> & { category: string, date: string };
//   export type AddTaskPayload = Omit<Task, 'id'>
