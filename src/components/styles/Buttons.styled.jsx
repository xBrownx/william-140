import styled, { css } from "styled-components";

export const TextButton = styled.div`
    transition: all 200ms ease-in-out;
    border-radius: 5%;
    text-align: center;
    padding: 0.5em 1.5em;
    font-family: ${({ theme }) => theme.buttons.primary.fontFamily};
    
    background-color: ${({ theme }) => theme.buttons.primary.backgroundColor};
    color: #fff;
    
    
    &:hover {
        
    }
    
    ${props => props.secondary && css`
        background-color: ${({ theme }) => theme.buttons.secondary.backgroundColor};
        color: ${({ theme }) => theme.buttons.secondary.fontColour};
        border: 2px solid ${({ theme }) => theme.buttons.secondary.fontColour};
    `};
    
    ${props => props.variant && css`
        background-color: ${({ theme }) => theme.buttons.variant.backgroundColor};
        color: ${({ theme }) => theme.buttons.variant.fontColour};
    `};
`

