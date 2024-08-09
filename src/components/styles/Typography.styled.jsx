import styled, {css} from "styled-components";
import {motion} from "framer-motion";

export const HeadingDisplay= styled(motion.h1)`
    //position: relative;
    z-index: 1;
    font-family: ${({ theme }) => theme.typography.display.fontFamily};
    font-size: 10vw;
    font-weight: 300;
    line-height: 9vw;
    color: ${({ theme }) => theme.typography.display.fontColor };
    margin: 0;
    width: 100%;
    display: flex;
    justify-content: ${({ justify }) => justify };
    animation-fill-mode: both;
    padding: 0;
    
`

export const HeadingOne = styled.h1`
    font-family: 'TWKEverett-Light', serif;
    font-size: 7.901vh;
    line-height: 9.481vh;
    font-weight: 300;
    color: ${({ theme }) => theme.typography.h1.fontColor };
    padding: 0;
    margin: 0;
    
    ${props => props.$secondary && css`
        color: #164A49;
    `};
    
`

export const HeadingTwo = styled.h2`
    font-family: ${({ theme }) => theme.typography.h2.fontFamily};
    font-size: ${({ theme }) => theme.typography.h2.fontSize };
    color: ${({ color }) => color} | ${({ theme }) => theme.typography.h2.fontColor };
    padding: 0;
    margin: 0;
`

export const HeadingThree = styled.h3`
    font-family: ${({ theme }) => theme.typography.h3.fontFamily};
    font-size: 1.975vh;
    line-height: 2.562vh;
    color: ${({ theme }) => theme.typography.h3.fontColor };
    font-weight: 700;
    padding: 0;
    margin: 0 0 0.988vh 0;
`

export const ParagraphOne = styled.p`
    font-family: ${({ theme }) => theme.typography.p1.fontFamily};
    font-size: ${({ theme }) => theme.typography.p1.fontSize };
    color: ${({ theme }) => theme.typography.p1.fontColor };
    padding: 0;
    margin: 0;
    opacity: 0.7;
    
    ${props => props.$secondary && css`
        color: ${({ theme }) => theme.colors.bg_primary };
        opacity: 1;
    `};
`

export const ParagraphTwo = styled.p`
    font-family: ${({ theme }) => theme.typography.p2.fontFamily};
    font-size: ${({ theme }) => theme.typography.p2.fontSize };
    color: ${({ theme }) => theme.typography.p2.fontColor };
    padding: 0;
    margin: 0;
`

export const ParagraphThree = styled.p`
    font-family: ${({ theme }) => theme.typography.p2.fontFamily};
    color: ${({ theme }) => theme.colors.bg_primary };
    padding: 0;
    margin: 0;
    font-size: 32px;
    justify-content: center;
    align-items: center;
`

export const ParagraphWrapper = styled.div`
    padding: 0 0 30px 30px;
    border-left: 1px solid black;
`
