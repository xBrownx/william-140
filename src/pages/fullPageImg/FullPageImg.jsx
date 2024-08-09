import React, {useEffect, useRef} from 'react';
import {ParallaxImg} from "../../components/ui/ParallaxImg";
import {StyledSection} from "../../components/styles/SectionContainer.styled";
import styled from "styled-components";


export const FullPageImg = ({imgSrc, }) => {
    return (
        <StyledSection>
            <Container $imgPadding>
                <ParallaxImg src={props.src} alt="Full Page Img"/>
            </Container>
        </StyledSection>
    );
};

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