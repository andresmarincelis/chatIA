import { createContext, ReactNode, useState } from "react";

interface User {
  name: string;
  age: number;
  birthdate: Date;
  country: string;
  nameDog: string;
}

interface UserProviderInterface {
  user: User;
  updateUser: () => void;
}

const UserContext = createContext<UserProviderInterface>(
  {} as UserProviderInterface
);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({
    name: "Diego Cerda",
    age: 28,
    birthdate: new Date(),
    country: "Chile",
    nameDog: "Apolo",
  });

  const updateUser = () => {
    const newUser: User = user;
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
