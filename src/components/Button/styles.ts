import styled from 'styled-components';

export const ButtonBox = styled.button`
    padding: 1rem;
    border-radius: 0.8rem;
    font-size: 1.2rem;
    background-color: ${({ theme }) => theme.palette.contrast};
    color: ${({ theme }) => theme.palette.primaryLight};
`;
