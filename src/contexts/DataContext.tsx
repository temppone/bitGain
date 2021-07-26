import { createContext, useContext, useState } from 'react';
import User from '../models/user-model';

type DataContextType = {
    saveUser: (user: User) => void;
    getUserById: (id: string) => User | string;
    currentUser: User;
};

const DataContext = createContext<DataContextType>({} as DataContextType);
export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }: any) => {
    const [currentUser, setCurrentUser] = useState({} as User);

    const saveUser = (user: User) => {
        window.localStorage.setItem(`user:${user.email}`, JSON.stringify(user));
        setCurrentUser(user);
    };

    const getUserById = (id: string) => window.localStorage.getItem(`user: ${id}`) as User | string;

    return (
        <DataContext.Provider value={{ saveUser, getUserById, currentUser }}>
            {children}
        </DataContext.Provider>
    );
};
