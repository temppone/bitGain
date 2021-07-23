import styled from 'styled-components';

interface SignUpProps {
    inputError: boolean;
}

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
`;

export const SignUpForm = styled.form<SignUpProps>`
    padding: 1rem;
`;
