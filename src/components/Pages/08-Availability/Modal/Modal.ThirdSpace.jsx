import React from 'react';
import * as Styled from "./Modal.styled";
import {SlideCarousel} from "../../../SlideCarousel/SlideCarousel";
import * as CONSTANTS from "../Availability.constants";
import {StyledParagraph} from "../../../PageTitles/Column/ColumnTitle.styled";
import {StyledHeading, StyledSubheading} from "../../../Styled";
import * as Padding from "../../../Styled/Padding"
import styled from "styled-components";

const CarouselContainer = styled.div`
    display: flex;
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
    width: 60%;
    ${Padding.x32};
`

const CarouselWrapper = styled.div`
    display: flex;
    overflow: hidden;
    height: 100%;
    box-sizing: border-box;
    img {
        border-radius: 20px;
    }
`

export const ModalThirdSpace = () => {
    return (
        <>
            <Styled.ModalTitleContainer>
                <StyledSubheading>AMENITIES</StyledSubheading>
                <StyledHeading $secondary>Level 28 - Third Space</StyledHeading>
            </Styled.ModalTitleContainer>
            <Styled.ContentContainer>
                <CarouselContainer>
                    <CarouselWrapper>
                        <SlideCarousel rounded={true} images={CONSTANTS.thirdSpaceImages}/>
                    </CarouselWrapper>
                </CarouselContainer>
                <Styled.TextContainer>
                    <StyledParagraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae blandit arcu, sed
                        fringilla mauris. Praesent rutrum consectetur tellus, eu pretium nisl bibendum quis. Quisque
                        purus orci, condimentum sit amet libero in, vehicula molestie ligula. Donec imperdiet ex
                        vitae condimentum vulputate.
                    </StyledParagraph>
                </Styled.TextContainer>
            </Styled.ContentContainer>
        </>
    );
};

