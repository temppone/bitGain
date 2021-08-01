import axios from 'axios';
import { createContext, useContext, useState } from 'react';
import User from '../models/user-model';
import { BRITA_VALUE_GET } from '../services/api/api';

type DataContextType = {
    saveUser: (user: User) => void;
    getUserById: (email: string) => User | null;
    currentUser: User;
    setCurrentUser: React.Dispatch<React.SetStateAction<User>>;
    getBritaValue: any;
};

const DataContext = createContext<DataContextType>({} as DataContextType);
export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }: any) => {
    const [currentUser, setCurrentUser] = useState({} as User);

    const saveUser = (user: User) => {
        localStorage.setItem(`user:${user.email}`, JSON.stringify(user));
        setCurrentUser(user);
    };

    const getUserById = (email: string): User | null => {
        const user = localStorage.getItem(`user:${email}`);

        if (!user) {
            return null;
        }

        return JSON.parse(user) as User;
    };

    const getBritaValue = async (date: string) => {
        const { url, params } = BRITA_VALUE_GET(date);
        const response = await axios.get(url, { params });
        return response;
    };

    return (
        <DataContext.Provider
            value={{ saveUser, getUserById, currentUser, setCurrentUser, getBritaValue }}
        >
            {children}
        </DataContext.Provider>
    );
};
