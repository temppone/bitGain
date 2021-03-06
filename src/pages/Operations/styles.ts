import styled from 'styled-components';
import { ReactComponent as BackButton } from '../../assets/img/back.svg';

export const OperationsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    border-radius: 0.8rem;

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

export const OperationsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1rem;
    width: 100%;
`;

export const OperationsBackButton = styled(BackButton)`
    width: 2.5rem;
`;

export const OperationsTitle = styled.h1`
    width: 100%;
`;

export const OperationsButtons = styled.div`
    display: flex;
    padding: 1rem;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const OperationsForm = styled.form`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

export const OperationsValues = styled.div`
    display: flex;
    flex-direction: column;
`;

export const OperationsValuesItems = styled.div`
    align-items: flex-start;
    margin: 1rem;
    padding: 1rem;
    background: ${({ theme }) => theme.palette.gradientBlue};
    border-radius: 0.8rem;
`;
