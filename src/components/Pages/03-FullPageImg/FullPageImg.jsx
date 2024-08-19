import React, {forwardRef, useEffect, useRef} from 'react';
import {ParallaxImg} from "../../ParallaxComponents";
import {StyledSection} from "../../Core/SectionContainer.styled";
import styled, {css} from "styled-components";
import {media} from "../../Media";
import * as Padding from '../../Styled/Padding'
import * as STYLES from '../../Styled/GlobalStyles';

export const FullPageImg = forwardRef(function (
    {
        id,
        imgSrc,
        bgColour,
        minHeight,
        imgPadding
    },
    ref
) {
    return (
        <StyledSection
            id={id}
            ref={ref}
            bgColour={bgColour}
            minHeight={minHeight}
        >
            <Container id="container" $imgPadding={imgPadding}>
                <ParallaxImg src={imgSrc} alt="Full Page Img"/>
            </Container>
        </StyledSection>
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
        ${Padding.x160};
        ${Padding.y90};
        #parallax-img-container, img {
            ${STYLES.imgBorderRadius}
        }
    `};

    ${media.md`
        ${Padding.x16Mobile};
        ${Padding.y32Mobile};
        min-height: 0;
    `};

`
