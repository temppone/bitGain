/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import styled from 'styled-components';

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    height: 7rem;
`;

export const InputLabel = styled.label`
    font-weight: bold;
    padding: 0.4rem 0.2rem;
    font-size: 1.2rem;
`;

export const InputField = styled.input<{ inputError: string }>`
    width: 100%;
    padding: 1rem;
    border-radius: 0.8rem;
    transition: 3ms;
    background: ${({ theme }) => theme.palette.secundaryDark};
    color: ${({ theme }) => theme.palette.primaryLight};

    border: 0.1rem solid
        ${({ inputError, theme }) =>
            inputError ? theme.palette.warning : theme.palette.tertiaryDark};

    :hover,
    :focus {
        border-color: ${({ inputError, theme }) =>
            inputError ? theme.palette.warning : theme.palette.secundaryDark};
        background: ${({ theme }) => theme.palette.tertiaryDark};
        box-shadow: 0 0 0 1px ${({ theme }) => theme.palette.secundaryDark};
    }
`;

export const InputWarning = styled.div`
    padding: 0.2rem 0.4rem;
    color: ${({ theme }) => theme.palette.warning};
`;
