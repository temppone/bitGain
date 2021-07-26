import { Link } from 'react-router-dom';
import { DashboardContainer, DashboardHeader, DashboardTitle } from './styles';
import Historic from '../../components/Historic';
import Head from '../../components/Head';
import CardContainer from '../../components/Card';
import { useFirebaseContext } from '../../contexts/FirebaseContext';

const Dashboard = () => {
    const { logout } = useFirebaseContext();
    return (
        <DashboardContainer>
            <DashboardHeader>
                <DashboardTitle>Olá de novo!</DashboardTitle>
                <Link
                    onClick={() => {
                        logout();
                    }}
                    to='/'
                />
            </DashboardHeader>
            <Head title='Dashboard' description='Carteira da BitGain' />
            <CardContainer />
            <Historic />
        </DashboardContainer>
    );
};
export default Dashboard;
