import styled from "styled-components";

export const HeadingDisplay = styled.h1`
    font-family: ${({ theme }) => theme.typography.display.fontFamily};
    font-size: ${({ theme }) => theme.typography.display.fontSize };
    color: ${({ theme }) => theme.typography.display.fontColour };
    padding: 0;
    margin: 0;
`

export const HeadingOne = styled.h1`
    font-family: ${({ theme }) => theme.typography.h1.fontFamily};
    font-size: ${({ theme }) => theme.typography.h1.fontSize };
    color: ${({ theme }) => theme.typography.h1.fontColour };
    padding: 0;
    margin: 0;
`

export const HeadingTwo = styled.h2`
    font-family: ${({ theme }) => theme.typography.h2.fontFamily};
    font-size: ${({ theme }) => theme.typography.h2.fontSize };
    color: ${({ theme }) => theme.typography.h2.fontColour };
    padding: 0;
    margin: 0;
`

export const HeadingThree = styled.h3`
    font-family: ${({ theme }) => theme.typography.h2.fontFamily};
    font-size: ${({ theme }) => theme.typography.h2.fontSize };
    color: ${({ theme }) => theme.typography.h2.fontColour };
    padding: 0;
    margin: 0;
`

export const ParagraphOne = styled.p`
    font-family: ${({ theme }) => theme.typography.p1.fontFamily};
    font-size: ${({ theme }) => theme.typography.p1.fontSize };
    color: ${({ theme }) => theme.typography.p1.fontColour };
    padding: 0;
    margin: 0;
`

export const ParagraphTwo = styled.p`
    font-family: ${({ theme }) => theme.typography.p2.fontFamily};
    font-size: ${({ theme }) => theme.typography.p2.fontSize };
    color: ${({ theme }) => theme.typography.p2.fontColour };
    padding: 0;
    margin: 0;
`
