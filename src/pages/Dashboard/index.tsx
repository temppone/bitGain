import { Link } from 'react-router-dom';
import { DashboardContainer, DashboardHeader, DashboardTitle, LogoutButton } from './styles';
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
                <LogoutButton>
                    <Link
                        onClick={() => {
                            logout();
                        }}
                        to='/'
                    >
                        Logout
                    </Link>
                </LogoutButton>
            </DashboardHeader>
            <Head title='Dashboard' description='Carteira da BitGain' />
            <CardContainer />
            <Historic />
        </DashboardContainer>
    );
};
export default Dashboard;
