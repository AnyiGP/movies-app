import {createContext, FC, ReactNode, useState} from 'react'
import {User } from '../../types'
import { serviceUsers } from '../../services/users'

type Context = {
  users: User[]
  loadUsers: () => void
}

type Provider = { children: ReactNode}

const StoreContext = createContext<Context>(
{
  users: [],
  loadUsers: () => undefined
}  
) 

const StoreProvider: FC<Provider> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  //const loadMovies = () => serviceMovies.getAll().then((data)=>setMovies(data))
  //consulta a la api directamente desde el context, busco tenerlas disponibles para mostrarlas.
  const loadUsers = () => serviceUsers.getAll().then((data) => setUsers(data))

  return (
    <StoreContext.Provider value={{ users, loadUsers }}>
      {children}
    </StoreContext.Provider>
  );
};

  export { StoreContext, StoreProvider };