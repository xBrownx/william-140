import React, {forwardRef, useState} from 'react';

import {StyledSection} from "../../Core/SectionContainer.styled";
import {FullPageMin} from "../../Core/PageContainer.styled";
import {CarouselContainer, LocationContainer} from "./Location.styled";
import {FadeCarousel} from "../../FadeCarousel/FadeCarousel";
import {CarouselMenu} from "../../FadeCarousel/CarouselMenu.component";
import * as CONSTANTS from './Location.constants'
import {TitleRow} from "../../Titles/TitleRow";

export const Location = forwardRef(function (
    {
        id,
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
            minHeight={minHeight}
            $secondary
        >
            <FullPageMin>
                <LocationContainer>
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
                        setActiveIndex={handleSlideChange}
                    />

                </LocationContainer>
            </FullPageMin>
        </StyledSection>
    );
});
