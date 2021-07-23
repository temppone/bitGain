import styled from 'styled-components';

export const DashboardContainer = styled.div`
    padding: 1rem;
`;

export const DashboardBox = styled.div`
    background: ${({ theme }) => theme.palette.secundaryDark};
    border-radius: 0.8rem;

    :hover {
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
`;
