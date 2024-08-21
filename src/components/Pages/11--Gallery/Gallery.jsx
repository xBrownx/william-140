import React, {forwardRef} from 'react';
import {StyledSection} from "../../Styled/SectionContainer.styled";
import * as CONSTANTS from './Gallary.constants'
import {SlideCarousel} from "../../organisms/SlideCarousel/SlideCarousel";

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

