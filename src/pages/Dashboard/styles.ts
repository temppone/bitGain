import styled from 'styled-components';

export const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    div {
        animation: slideOpacity 0.5s;
    }

    @keyframes slideOpacity {
        from {
            opacity: 0;
            bottom: -5.2rem;
        }

        to {
            opacity: 1;
            bottom: -1.2rem;
        }
    }

    a {
        width: 100%;
        margin: 0 auto;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
        max-width: 599px;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        max-width: 800px;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        max-width: 1024px;
        margin: 0 auto;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        max-width: 1280px;
        margin: 0 auto;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
        max-width: 1380px;
        margin: 0 auto;
    }
`;

export const DashboardCardsContainer = styled.div`
    width: 100%;
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
`;

export const DashboardHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`;

export const LogoutButton = styled.div`
    width: auto;
    padding: 1rem;
`;

export const DashboardTitle = styled.h1`
    padding: 1rem;
`;
