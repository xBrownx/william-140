import styled, { css } from 'styled-components';


export const Container = styled.div`
    display: flex;
    width: fit-content;
    
    ${props=> props.$row && css`
        flex-direction: row;
    `};
    
    ${props => props.$column && css`
        flex-direction: column;
    `};
`