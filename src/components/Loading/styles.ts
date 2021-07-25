import styled from 'styled-components';

export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const LoadingItem = styled.div`
    width: 10rem;
    height: 0.4rem;
    border-radius: 0.8rem;
    animation: slideWidth 3s linear infinite;
    background: ${({ theme }) => theme.palette.tertiaryDark};};

    @keyframes slideWidth {
        from {
             width: 0%;
         }
        to {
             width: 90%;
        }
    }    
`;
