import styled from 'styled-components';

export const HistoricContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0.5rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.palette.secundaryDark};
    padding: 1rem 0;
`;

export const HistoricItem = styled.div`
    padding: 1rem;
`;

export const HistoricIcon = styled.div`
    padding: 0.2rem;
`;

export const HistoricItemContent = styled.p`
    font-size: 1rem;
`;

export const HistoricPrice = styled.span`
    font-weight: bold;
    font-size: 1.1rem;
`;

export const HistoricDate = styled.p`
    font-size: 1.2rem;
    text-align: center;
    font-weight: 700;
`;
