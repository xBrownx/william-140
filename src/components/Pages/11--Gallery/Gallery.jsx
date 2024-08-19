import React, {forwardRef} from 'react';
import {StyledSection} from "../../Core/SectionContainer.styled";
import * as CONSTANTS from './Gallary.constants'
import {SlideCarousel} from "../../SlideCarousel/SlideCarousel";

export const Gallery = forwardRef(function (
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
                <SlideCarousel
                    images={CONSTANTS.carouselImages}
                />
            </StyledSection>
        );
    })
;

