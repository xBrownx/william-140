import React, {forwardRef, useEffect, useRef} from 'react';
import {ParallaxImg} from "../../ParallaxComponents/ParallaxImg";
import {StyledSection} from "../../Core/SectionContainer.styled";
import styled, {css} from "styled-components";
import {GlobalStyles} from "../../themes/GlobalStyles.css";


export const FullPageImg = forwardRef(function ({id, imgSrc, bgColour}, ref) {
    return (
        <>
            <GlobalStyles/>
            <StyledSection
                id={id}
                ref={ref}
                bgColour={bgColour}
            >
                <Container $imgPadding>
                    <ParallaxImg src={imgSrc} alt="Full Page Img"/>
                </Container>
            </StyledSection>
        </>
    );
});

const Container = styled.div`
    position: relative;
    overflow: hidden;
    margin: 0;
    padding: 0;
    display: flex;
    width: 100vw;
    min-height: 100vh;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;

    ${props => props.$imgPadding && css`
        padding: 11.111vh 11.111vw 11.111vh 11.111vw;
    `};
`
