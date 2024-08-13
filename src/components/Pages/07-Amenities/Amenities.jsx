import React, {forwardRef, useState} from 'react';

import {StyledSection} from "../../Core/SectionContainer.styled";
import {FullPageMin, Padding} from "../../Core/PageContainer.styled";
import {FadeCarousel} from "../../FadeCarousel/FadeCarousel";
import * as CONSTANTS from './Amenities.constants'
import {AmenitiesLeftContainer, AmenitiesRightContainer, ImgContainer, SplitScreen} from "./Amenities.styled";
import {AmenitiesList} from "./AmenitiesList";
import {StyledHeading, StyledSubheading} from "../../Titles/Title.styled";

export const Amenities = forwardRef(function (
    {
        id,
        bgColour,
        minHeight
    },
    ref
) {
    const amenitiesItems = CONSTANTS.AmenitiesItems();
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
            justify={'center'}
        >
            <SplitScreen id="split-screen">
                <AmenitiesLeftContainer id="left-container">
                    <AmenitiesHeading/>
                    <AmenitiesList
                        amenitiesItems={amenitiesItems}
                        handleSlideChange={handleSlideChange}
                    />
                </AmenitiesLeftContainer>
                <AmenitiesRightContainer id="right-container">
                    <ImgContainer>
                        <FadeCarousel
                            activeIdx={activeIdx}
                            carouselItems={amenitiesItems}
                        />
                    </ImgContainer>
                </AmenitiesRightContainer>
            </SplitScreen>
        </StyledSection>

    );
});

const AmenitiesHeading = ({}) => {
    return (
        <>
            <StyledSubheading>
                {CONSTANTS.subheadingText}
            </StyledSubheading>
            <StyledHeading $secondary>
                {CONSTANTS.headingText}
            </StyledHeading>
        </>
    );
}






