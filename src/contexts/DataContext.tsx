import axios from 'axios';
import { createContext, useContext, useState, useEffect } from 'react';
import User from '../models/user-model';
import {
    BITCOIN_VALUE_TODAY_GET,
    BRITA_VALUE_DATE_GET,
    BRITA_VALUE_TODAY_GET,
} from '../services/api/api';

type DataContextType = {
    saveUser: (user: User) => void;
    getUserById: (email: string) => User | null;
    currentUser: User;
    setCurrentUser: React.Dispatch<React.SetStateAction<User>>;
    getBritaValueDate: any;
    britaToday: any;
    getBitcoinValueToday: any;
    bitcoinToday: any;
};

const DataContext = createContext<DataContextType>({} as DataContextType);
export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }: any) => {
    const [currentUser, setCurrentUser] = useState({} as User);
    const [britaToday, setBritaToday] = useState('');
    const [bitcoinToday, setBitcoinToday] = useState('');

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

    const getBritaValueDate = async (date: string) => {
        const { url, params } = BRITA_VALUE_DATE_GET(date);
        const response = await axios.get(url, { params });
        return response;
    };

    const getBritaValueToday = async () => {
        const { url, params } = BRITA_VALUE_TODAY_GET();
        const response = await axios.get(url, { params });
        setBritaToday(response.data.value[0]);
    };

    const getBitcoinValueToday = async () => {
        const { url } = BITCOIN_VALUE_TODAY_GET();
        const response = await axios.get(url);
        setBitcoinToday(response.data.ticker.sell);
    };

    useEffect(() => {
        getBritaValueToday();
        getBitcoinValueToday();
    }, []);

    return (
        <DataContext.Provider
            value={{
                saveUser,
                getUserById,
                currentUser,
                setCurrentUser,
                getBritaValueDate,
                britaToday,
                getBitcoinValueToday,
                bitcoinToday,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
