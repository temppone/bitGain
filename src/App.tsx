import { Suspense, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/theme';
import { useFirebaseContext } from './contexts/FirebaseContext';

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { createUser } = useFirebaseContext();

    const handleSubmit = () => {
        createUser({ email, password });
    };

    return (
        <div className='App'>
            <Suspense fallback={<div>Carregando</div>}>
                <ThemeProvider theme={defaultTheme}>
                    <GlobalStyle />
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
                    <div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ab ducimus
                        obcaecati quam pariatur. Aut dolores commodi libero fuga optio nihil
                        veritatis a, quos perferendis, recusandae doloremque vitae animi autem.
                    </div>
                </ThemeProvider>
            </Suspense>
        </div>
    );
}

export default App;
