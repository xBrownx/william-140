import styled, { css } from "styled-components";
import {motion} from "framer-motion";


export const StyledSection = ({bgColour, children}) => {
    return (
        <PageSection
            style={{
                '--bg-colour': bgColour
            }}
        >
            {children}
        </PageSection>
    );
}

const PageSection= styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    //overflow: hidden;
    min-width: 100%;
    min-height: 100%;
    height: 100%;
    //box-sizing: border-box;
    
    background-color: var(--bg-colour, #FFF);
    
    ${props => props.$secondary && css`
        background-color: ${({ theme }) => theme.colors.bg_secondary};
    `};
    
    
    
`