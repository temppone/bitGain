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

export const InputField = styled.input`
    width: 100%;
    padding: 1rem;
    border-radius: 0.8rem;
    background: ${({ theme }) => theme.palette.secundaryDark};
    color: ${({ theme }) => theme.palette.primaryLight};
`;

export const InputWarning = styled.div`
    padding: 0.2rem 0.4rem;
    color: ${({ theme }) => theme.palette.warning};
`;
