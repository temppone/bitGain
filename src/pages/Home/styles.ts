import styled from 'styled-components';
import { ReactComponent as BackButton } from './img/back.svg';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
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

    ul {
        list-style: none;
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

export const HomeIntro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    width: 90%;
    text-align: center;
`;

export const HomeTitle = styled.h1`
    font-size: 2.2rem;
    font-weight: 400;

    span {
        font-weight: 700;
    }
`;

export const HomeSalutation = styled.p`
    padding: 1rem 0;
    font-size: 1.2rem;
`;

export const HomeButtons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 10rem;
    width: 80%;
    padding: 1rem;
`;

export const HomeBackButton = styled(BackButton)`
    align-self: flex-start;
`;
