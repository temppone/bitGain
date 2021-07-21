import firebase from 'firebase';
import { createContext, useContext } from 'react';

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
    login: (params: { email: string; password: string }) => void;
    createUser: (params: { email: string; password: string }) => void;
    logout: () => void;
};

const FirebaseContext = createContext<FirebaseContextType>({} as FirebaseContextType);

export const useFirebaseContext = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }: any) => {
    const login = ({ email, password }: { email: string; password: string }) => {
        firebase.auth().signInWithEmailAndPassword(email, password);
    };

    const createUser = ({ email, password }: { email: string; password: string }) => {
        try {
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then((credencial) => console.log(credencial));
        } catch (err) {
            console.log(err);
        }
    };

    const logout = () => {
        firebase.auth().signOut();
    };

    return (
        <FirebaseContext.Provider value={{ firebase: firebase.app(), login, createUser, logout }}>
            {children}
        </FirebaseContext.Provider>
    );
};
