import { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/theme';
import { FirebaseProvider } from './contexts/FirebaseContext';
import Footer from './components/Footer';
import Loading from './components/Loading';

const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const NotFound = lazy(() => import('./components/NotFound'));

const App = (): JSX.Element => (
    <div className='App'>
        <FirebaseProvider>
            <ThemeProvider theme={defaultTheme}>
                <Suspense fallback={<Loading />}>
                    <Toaster />
                    <GlobalStyle />
                    <main className='AppBody'>
                        <Router>
                            <Switch>
                                <Route exact path='/'>
                                    <Home />
                                </Route>
                                <Route exact path='/dashboard'>
                                    <Dashboard />
                                </Route>
                                <Route path='*'>
                                    <NotFound />
                                </Route>
                            </Switch>
                            <Footer />
                        </Router>
                    </main>
                </Suspense>
            </ThemeProvider>
        </FirebaseProvider>
    </div>
);

export default App;
