import { Redirect, Route } from 'react-router-dom';
import { useFirebaseContext } from '../../contexts/FirebaseContext';

type ProtectedRouteTypes = {
    path: string;
    children: JSX.Element;
};

const ProtectedRoute = ({ path, children }: ProtectedRouteTypes) => {
    const { isLogged } = useFirebaseContext();

    if (isLogged) {
        return (
            <Route exact path={path}>
                {children}
            </Route>
        );
    }
    return <Redirect to='/' />;
};

export default ProtectedRoute;
