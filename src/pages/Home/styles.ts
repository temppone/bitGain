import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
    width: 100%;

    div {
        animation: fadeIn 0.4s;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const HomeIntro = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem;

    text-align: center;

    p {
        padding: 1rem 0;
    }
`;

export const HomeButtons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
    padding: 1rem;
`;
