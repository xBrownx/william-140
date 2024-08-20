import React, {forwardRef, useEffect, useRef} from 'react';
import {ParallaxImg} from "../../ParallaxComponents";
import {StyledSection} from "../../Styled/SectionContainer.styled";
import styled, {css} from "styled-components";
import {media} from "../../Styled/Media";
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
    ${STYLES.noMarginPadding};
    ${STYLES.fullScreen};
    position: relative;
    display: flex;
    overflow: hidden;
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
