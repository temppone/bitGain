import { Link } from 'react-router-dom';
import { DashboardContainer, DashboardHeader, DashboardTitle, LogoutButton } from './styles';
import Historic from '../../components/Historic';
import Head from '../../components/Head';
import { useFirebaseContext } from '../../contexts/FirebaseContext';
import Card from '../../components/Card';
import { useDataContext } from '../../contexts/DataContext';
import { defaultTheme } from '../../styles/theme';
import { toBtc, toReal } from '../../core/parsers/NumberParses';
import { getToday, getYesterday } from '../../core/parsers/DateParses';
import { useEffect } from 'react';

const Dashboard = () => {
    const { logout } = useFirebaseContext();
    const { currentUser, getBritaValue } = useDataContext();
    const britaToday = getBritaValue(getToday());
    const britaYesterday = getBritaValue(getYesterday());

    useEffect(() => {
        console.log(britaYesterday);
        console.log(britaToday);
    });

    return (
        <DashboardContainer>
            <Head title='Dashboard' description='Carteira da BitGain' />
            <DashboardHeader>
                <DashboardTitle>Olá de novo!</DashboardTitle>
                <LogoutButton>
                    <Link onClick={() => logout()} to='/'>
                        Sair
                    </Link>
                </LogoutButton>
            </DashboardHeader>

            <Card
                background={defaultTheme.palette.gradientBlue}
                cardCoinValue={toReal(currentUser.wallet.real)}
                secundaryField={{ secundaryFieldName: 'Alo', secundaryFieldCoinValue: '291839328' }}
                id='/operations:real'
            />
            <Card
                background={defaultTheme.palette.gradientGrey}
                cardCoinValue={toBtc(currentUser.wallet.bitcoin)}
                id='/operations:real'
            />
            <Card
                background={defaultTheme.palette.gradientGrey}
                cardCoinValue={currentUser.wallet.real.toString()}
                id='/operations:real'
            />
            <Historic />
        </DashboardContainer>
    );
};
export default Dashboard;
