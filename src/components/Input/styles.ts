import styled from 'styled-components';

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
`;

export const InputLabel = styled.label`
    font-weight: bold;
`;

export const InputField = styled.input`
    width: 100%;
    background: ${({ theme }) => theme.palette.secundaryDark};
    padding: 1rem;
`;

export const InputWarning = styled.div`
    color: ${({ theme }) => theme.palette.warning};
`;
