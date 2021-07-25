import firebase from 'firebase';
import { createContext, useContext, useState } from 'react';

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
    errorMessage: string;
    disabledButton: boolean;
};

const FirebaseContext = createContext<FirebaseContextType>({} as FirebaseContextType);

export const useFirebaseContext = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }: any) => {
    const [isLogged, setIsLogged] = useState(false);
    const [disabledButton, setDisabledButton] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const login = async ({ email, password }: { email: string; password: string }) => {
        try {
            setDisabledButton(true);
            await firebase.auth().signInWithEmailAndPassword(email, password);
            setIsLogged(true);
        } catch (err) {
            setDisabledButton(false);
            setErrorMessage(err);
        } finally {
            setDisabledButton(false);
        }
    };

    const createUser = async ({ email, password }: { email: string; password: string }) => {
        await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((credencial) => credencial);
    };

    const logout = () => {
        firebase.auth().signOut();
    };

    return (
        <FirebaseContext.Provider
            value={{
                firebase: firebase.app(),
                login,
                createUser,
                logout,
                isLogged,
                errorMessage,
                disabledButton,
            }}
        >
            {children}
        </FirebaseContext.Provider>
    );
};
