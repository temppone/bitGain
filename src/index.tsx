import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseProvider } from './contexts/FirebaseContext';

ReactDOM.render(
    <React.StrictMode>
        <FirebaseProvider>
            <App />
        </FirebaseProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
