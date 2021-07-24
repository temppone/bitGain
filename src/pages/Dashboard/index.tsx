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

const Dashboard = () => (
    <DashboardContainer>
        <DashboardTitle>Olá!</DashboardTitle>
        <DashboardCard>
            <DashboardCardBox>
                <DashboardCardTitle>Total</DashboardCardTitle>
                <DashboardCardValue>R$ 148.679,65</DashboardCardValue>
            </DashboardCardBox>
            <DashboardCardSecundaryBox>
                <DashboardCardBox>
                    <DashboardCardTitle>Este mês</DashboardCardTitle>
                    <DashboardCardSecundaryValue>R$ 23.432,12</DashboardCardSecundaryValue>
                </DashboardCardBox>
                <DashboardCardPercent>+14%</DashboardCardPercent>
            </DashboardCardSecundaryBox>
        </DashboardCard>
    </DashboardContainer>
);

export default Dashboard;
