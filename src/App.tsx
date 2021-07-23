import { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/theme';
import { FirebaseProvider } from './contexts/FirebaseContext';

const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

const App = (): JSX.Element => (
    <div className='App'>
        <FirebaseProvider>
            <Suspense fallback={<div>Carregando</div>}>
                <ThemeProvider theme={defaultTheme}>
                    <Toaster />
                    <GlobalStyle />
                    <Router>
                        <Switch>
                            <Route exact path='/'>
                                <Home />
                            </Route>
                            <Route exact path='dashboard'>
                                <Dashboard />
                            </Route>
                        </Switch>
                    </Router>
                </ThemeProvider>
            </Suspense>
        </FirebaseProvider>
    </div>
);

export default App;
