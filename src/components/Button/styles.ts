import styled from 'styled-components';

export const ButtonBox = styled.button`
    padding: 1rem;
    border-radius: 0.8rem;
    font-size: 1.2rem;
    background-color: ${({ theme }) => theme.palette.contrast};
    color: ${({ theme }) => theme.palette.primaryLight};

    @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
        max-width: 100%;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        max-width: 50%;
        margin: 0 auto;
    }

    :hover,
    :focus {
        box-shadow: 0 0 0 1px ${({ theme }) => theme.palette.secundaryLight};
        transition: 0.2s;
    }

    :disabled {
        opacity: 70%;
        cursor: wait;
    }
`;
