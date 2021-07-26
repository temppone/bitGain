import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import { Link } from 'react-router-dom';
import {
    DashboardTitle,
    DashboardContainer,
    DashboardCard,
    DashboardCardBox,
    DashboardCardSecundaryBox,
    DashboardCardTitle,
    DashboardCardValue,
    DashboardCardSecundaryValue,
    DashboardCardPercent,
} from './styles';

import { defaultTheme } from '../../styles/theme';
import Head from '../../components/Head';
import Historic from '../../components/Historic';

const Dashboard = () => (
    <DashboardContainer>
        <Head title='Dashboard' description='Carteira da BitGain' />
        <DashboardTitle>Olá!</DashboardTitle>
        <DashboardCard background={defaultTheme.palette.secundaryContrast}>
            <DashboardCardBox>
                <DashboardCardTitle>Total</DashboardCardTitle>
                <DashboardCardValue>R$ 148.679,65</DashboardCardValue>
            </DashboardCardBox>
            <DashboardCardSecundaryBox>
                <DashboardCardBox>
                    <DashboardCardTitle>Este mês</DashboardCardTitle>
                    <DashboardCardSecundaryValue>R$ 23.432,12</DashboardCardSecundaryValue>
                </DashboardCardBox>
                <DashboardCardPercent>
                    +14%
                    <TrendingUpIcon htmlColor={defaultTheme.palette.success} />
                </DashboardCardPercent>
            </DashboardCardSecundaryBox>
        </DashboardCard>

        <DashboardCard background={defaultTheme.palette.secundaryDark}>
            <Link to='/bitcoin'>
                <DashboardCardSecundaryBox>
                    <DashboardCardBox>
                        <DashboardCardTitle>Bitcoin</DashboardCardTitle>
                        <DashboardCardValue>BTC 1.679,65</DashboardCardValue>
                    </DashboardCardBox>
                    <DashboardCardPercent>
                        +26%
                        <TrendingUpIcon htmlColor={defaultTheme.palette.success} />
                    </DashboardCardPercent>
                </DashboardCardSecundaryBox>
            </Link>
        </DashboardCard>

        <DashboardCard background={defaultTheme.palette.secundaryDark}>
            <Link to='/brita'>
                <DashboardCardSecundaryBox>
                    <DashboardCardBox>
                        <DashboardCardTitle>Brita</DashboardCardTitle>
                        <DashboardCardValue>BRI 34.679,65</DashboardCardValue>
                    </DashboardCardBox>
                    <DashboardCardPercent>
                        +32%
                        <TrendingUpIcon htmlColor={defaultTheme.palette.success} />
                    </DashboardCardPercent>
                </DashboardCardSecundaryBox>
            </Link>
        </DashboardCard>
        <Historic />
    </DashboardContainer>
);

export default Dashboard;
