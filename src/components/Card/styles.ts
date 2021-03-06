import { Link } from 'react-router-dom';
import styled from 'styled-components';

type DashboardStylesType = {
    background: string;
};

export const LinkCard = styled(Link)`
    display: flex;
    justify-content: center;
`;

export const CardContainer = styled.div<DashboardStylesType>`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    width: 95%;
    background: ${({ background }) => background};
    border-radius: 0.9rem;
    margin: 1rem 0;
    cursor: pointer;
`;

export const CardBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
`;

export const CardSecundaryBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const CardTitle = styled.h2`
    padding: 0.2rem;
    font-size: 1.2rem;
    font-weight: 600;
`;

export const CardValue = styled.div`
    padding: 0.2rem;
    font-size: 2rem;
    font-weight: 700;
`;

export const CardSecundaryValue = styled.div`
    padding: 0.2rem;
    font-size: 1.6rem;
    font-weight: 700;
`;

export const CardPercent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    border-radius: 0.8rem;
    font-size: 1.1rem;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.2);
    margin-right: 1rem;
`;
