import { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/theme';
import { FirebaseProvider } from './contexts/FirebaseContext';
import Footer from './components/Footer';
import Loading from './components/Loading';
import ProtectedRoute from './components/ProtectedRoute';
import { DataProvider } from './contexts/DataContext';

const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const NotFound = lazy(() => import('./components/NotFound'));

const App = (): JSX.Element => (
    <div className='App'>
        <DataProvider>
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
                                    <ProtectedRoute path='/dashboard'>
                                        <Dashboard />
                                    </ProtectedRoute>
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
        </DataProvider>
    </div>
);

export default App;
