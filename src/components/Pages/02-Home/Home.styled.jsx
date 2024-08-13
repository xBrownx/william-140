import styled from "styled-components";

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1.11vw;
    gap: var(--height-32px);
    
    @media only screen and (max-width: 750px) {
        gap: 0;
    }
`

export const StyledH1 = styled.h1`
    font-family: var(--font-fmaily-secondary-bold), serif;
    font-size: var(--font-size-16px);
    font-weight: 700;
    color: var(--color-primary-5);
    margin: 0;
    padding: 0;
    
    @media only screen and (max-width: 750px) {
        padding: 0 16px;
        width: 100%;
        font-size: 9pt;
        line-height: 10pt;
        color: var(--color-primary-4);
    }
`

export const StyledP = styled.p`
    font-family: "SuisseIntl-Light", serif;
    font-size: var(--font-size-36px);
    line-height: var(--line-height-36px);
    font-weight: 400;
    color: #164A49;
    opacity: 0.7;
    padding: 0;
    margin: 0;
    
    
    @media only screen and (max-width: 750px) {
        padding: 16px;
        width: 100%;
        font-size: 10pt;
        line-height: 11pt;
    }
    
`




