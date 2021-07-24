import styled from 'styled-components';

type DashboardStylesType = {
    background: string;
};

export const DashboardTitle = styled.h1`
    padding: 1rem;
    align-self: flex-start;
`;

export const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`;

export const DashboardCard = styled.div<DashboardStylesType>`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    width: 95%;
    background: ${({ background }) => background};
    border-radius: 0.9rem;
    margin: 1rem 0;
`;

export const DashboardCardBox = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;
`;

export const DashboardCardSecundaryBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const DashboardCardTitle = styled.h2`
    padding: 0.2rem;
    font-size: 1.2rem;
    font-weight: 600;
`;

export const DashboardCardValue = styled.div`
    padding: 0.2rem;
    font-size: 2rem;
    font-weight: 700;
`;

export const DashboardCardSecundaryValue = styled.div`
    padding: 0.2rem;
    font-size: 1.6rem;
    font-weight: 700;
`;

export const DashboardCardPercent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    border-radius: 0.8rem;
    font-size: 1.1rem;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.2);
    margin-right: 1rem;
`;
