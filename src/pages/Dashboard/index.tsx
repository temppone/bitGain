import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { DashboardContainer, DashboardHeader, DashboardTitle, LogoutButton } from './styles';
import Historic from '../../components/Historic';
import Head from '../../components/Head';
import { useFirebaseContext } from '../../contexts/FirebaseContext';
import Card from '../../components/Card';
import { useDataContext } from '../../contexts/DataContext';
import { defaultTheme } from '../../styles/theme';
import { toBtc, toReal, toBrita } from '../../core/parsers/NumberParses';
import { getToday, getYesterday } from '../../core/parsers/DateParses';

const Dashboard = () => {
    const { logout } = useFirebaseContext();
    const { currentUser, getBritaValue } = useDataContext();
    const britaValueToday = getBritaValue(getToday());
    const britaValueYesterday = getBritaValue(getYesterday());

    useEffect(() => {
        console.log(britaValueYesterday);
        console.log(britaValueToday);
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
                id='/dashboard'
                // britaTodayValue={britaValueToday}
                // britaYesterdayValue={britaValueYesterday}
            />
            <Card
                background={defaultTheme.palette.gradientGrey}
                cardCoinValue={toBtc(currentUser.wallet.bitcoin)}
                path='operations/'
                id='bitcoin'
                // britaTodayValue={britaValueToday}
                // britaYesterdayValue={britaValueYesterday}
            />
            <Card
                background={defaultTheme.palette.gradientGrey}
                cardCoinValue={toBrita(currentUser.wallet.brita)}
                path='operations/'
                id='brita'
                // britaTodayValue={britaValueToday}
                // britaYesterdayValue={britaValueYesterday}
            />
            <Historic />
        </DashboardContainer>
    );
};
export default Dashboard;
