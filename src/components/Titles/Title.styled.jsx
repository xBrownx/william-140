import styled, {css} from "styled-components";


export const StyledSubheading = styled.h3`
    font-family: var(--font-family-secondary-light), serif;
    font-size: var(--font-size-16px);
    line-height: var(--line-height-16px);
    color: var(--color-primary-4);
    font-weight: 700;
    padding: 0;
    margin: 0 0 var(--height-8px) 0;
    
    @media only screen and (max-width: 750px) {
        font-family: var(--font-fmaily-primary-bold), serif;
        padding: 0;
        width: 100%;
        font-size: 9pt;
        line-height: 10pt;
    }
    
`

export const StyledHeading = styled.h1`
    font-family: var(--font-fmaily-primary-light), serif;
    font-size: var(--font-size-64px);
    line-height: var(--line-height-64px);
    color: var(--color-primary-5);
    font-weight: 300;
    padding: 0;
    margin: 0;
    
    ${props => props.$secondary && css`
        color: #FFF;
    `};
    
    @media only screen and (max-width: 750px) {
        padding: 0;
        width: 100%;
        font-size: 24pt;
        line-height: 27pt;
    }
`