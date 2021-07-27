import firebase from 'firebase';
import { createContext, useEffect, useContext, useState } from 'react';
import { useDataContext } from './DataContext';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

type FirebaseContextType = {
    firebase: firebase.app.App;
    login: (params: { email: string; password: string }) => any;
    createUser: (params: { email: string; password: string }) => any;
    logout: () => void;
    isLogged: boolean;
};

const FirebaseContext = createContext<FirebaseContextType>({} as FirebaseContextType);

export const useFirebaseContext = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }: any) => {
    const [isLogged, setIsLogged] = useState(false);
    const { saveUser, getUserById, currentUser, setCurrentUser } = useDataContext();

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                const savedUser = getUserById(user.email as string);

                if (savedUser) {
                    setCurrentUser(savedUser);
                    setIsLogged(true);
                }
            }
        });
    }, []);

    const login = async ({ email, password }: { email: string; password: string }) => {
        await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
        const credencial = await firebase.auth().signInWithEmailAndPassword(email, password);
        saveUser({
            email: credencial.user?.email,
            wallet: {
                real: 100000,
                bitcoin: 0,
                brita: 0,
            },
            isFirstTimeLogged: getUserById(credencial.user?.email!) === null,
        });

        setIsLogged(true);
    };

    const createUser = async ({ email, password }: { email: string; password: string }) => {
        await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((credencial) => credencial);
        setIsLogged(true);
    };

    const logout = () => {
        firebase.auth().signOut();
        setIsLogged(false);
        window.localStorage.removeItem(`user:${currentUser.email}`);
    };

    return (
        <FirebaseContext.Provider
            value={{
                firebase: firebase.app(),
                login,
                createUser,
                logout,
                isLogged,
            }}
        >
            {children}
        </FirebaseContext.Provider>
    );
};
