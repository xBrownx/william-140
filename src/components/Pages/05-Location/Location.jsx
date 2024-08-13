import React, {forwardRef, useState} from 'react';

import {StyledSection} from "../../Core/SectionContainer.styled";
import {CarouselContainer, Container} from "./Location.styled";
import {FadeCarousel} from "../../FadeCarousel/FadeCarousel";
import {CarouselMenu} from "../../FadeCarousel/CarouselMenu";
import * as CONSTANTS from './Location.constants'
import {TitleRow} from "../../Titles/TitleRow";

export const Location = forwardRef(function (
    {
        id,
        bgColour,
        minHeight,
    },
    ref
) {
    const locationItems = CONSTANTS.LocationItems();
    const [activeIdx, setActiveIdx] = useState(0);

    const handleSlideChange = (idx) => {
        setActiveIdx(idx);
    }

    return (
        <StyledSection
            id={id}
            ref={ref}
            bgColour={bgColour}
            minHeight={minHeight}
            justify={'end'}
        >
            <Container>
                <TitleRow>
                    {CONSTANTS.subHeadingText}
                    {CONSTANTS.headingText}
                    {CONSTANTS.paragraphText}
                </TitleRow>
                <CarouselContainer id="location-carousel-container">
                    <FadeCarousel
                        activeIdx={activeIdx}
                        carouselItems={locationItems}/>
                </CarouselContainer>
                <CarouselMenu
                    carouselItems={locationItems}
                    activeIdx={activeIdx}
                    setActiveIndex={handleSlideChange}
                />
            </Container>
        </StyledSection>
    );
});
