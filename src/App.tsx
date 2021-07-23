import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/theme';

const App = (): JSX.Element => (
    <div className='App'>
        <Suspense fallback={<div>Carregando</div>}>
            <ThemeProvider theme={defaultTheme}>
                <Toaster />
                <GlobalStyle />
                <Routes>
                    <Home path/>
                    <Dashboard />
                </Routes>
            </ThemeProvider>
        </Suspense>
    </div>
);

export default App;
