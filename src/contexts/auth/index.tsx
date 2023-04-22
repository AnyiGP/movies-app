import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { User } from "../../types";

type Context = {
  me?: Partial<User>;
  setMe: 
  Dispatch<SetStateAction<Partial<User> | undefined>>;
  //
};

const AuthContext = createContext<Context>({
  //datos por defecto
  me: {},
  setMe: () => undefined,
});

type Provider = {
  children: ReactNode;
};

const AuthProvider: FC<Provider> = ({ children }) => {
  const [me, setMe] = useState<Partial<User>>();
  return (
    <AuthContext.Provider value={{ me, setMe }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
