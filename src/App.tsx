import { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/theme';

const App = (): JSX.Element => (
    <div className='App'>
        <Suspense fallback={<div>Carregando</div>}>
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyle />
                <Home />
            </ThemeProvider>
        </Suspense>
    </div>
);

export default App;
