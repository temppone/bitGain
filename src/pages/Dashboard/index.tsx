import { Link } from 'react-router-dom';
import { DashboardContainer, DashboardHeader, DashboardTitle, LogoutButton } from './styles';
import Historic from '../../components/Historic';
import Head from '../../components/Head';
import { useFirebaseContext } from '../../contexts/FirebaseContext';
import Card from '../../components/Card';
import { useDataContext } from '../../contexts/DataContext';
import { defaultTheme } from '../../styles/theme';
import { toBtc, toReal } from '../../core/parsers/NumberParses';

const Dashboard = () => {
    const { logout } = useFirebaseContext();
    const { currentUser } = useDataContext();

    return (
        <DashboardContainer>
            <Head title='Dashboard' description='Carteira da BitGain' />
            <DashboardHeader>
                <DashboardTitle>Olá de novo!</DashboardTitle>
                <LogoutButton>
                    <Link onClick={() => logout()} to='/'>
                        Logout
                    </Link>
                </LogoutButton>
            </DashboardHeader>

            <Card
                background={defaultTheme.palette.secundaryContrast}
                cardCoinValue={toReal(currentUser.wallet.real)}
                secundaryField={{ secundaryFieldName: 'Alo', secundaryFieldCoinValue: '291839328' }}
            />
            <Card
                background={defaultTheme.palette.secundaryDark}
                cardCoinValue={toBtc(currentUser.wallet.bitcoin)}
            />
            <Card
                background={defaultTheme.palette.secundaryDark}
                cardCoinValue={currentUser.wallet.real.toString()}
            />
            <Historic />
        </DashboardContainer>
    );
};
export default Dashboard;
