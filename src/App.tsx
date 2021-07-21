import { useState } from 'react';
import { useFirebaseContext } from './contexts/FirebaseContext';

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { createUser } = useFirebaseContext();

    const handleSubmit = () => {
        createUser({ email, password });
    };

    return (
        <>
            <div>Teste</div>
            <input
                type='text'
                placeholder='email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <input
                type='password'
                placeholder='password'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <button type='submit' onClick={handleSubmit}>
                Enviar
            </button>
        </>
    );
}

export default App;
