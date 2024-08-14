import React, {forwardRef, useState} from 'react';
import {StyledSection} from "../../Core/SectionContainer.styled";
import {FadeCarousel} from "../../FadeCarousel/FadeCarousel";
import * as CONSTANTS from './Amenities.constants'
import * as Styled from "./Amenities.styled";
import {AmenitiesList} from "./AmenitiesList";
import {StyledHeading, StyledSubheading} from "../../Styled";


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
            <Styled.SplitScreen id="split-screen">
                <Styled.AmenitiesLeftContainer id="left-container">
                    <AmenitiesHeading/>
                    <AmenitiesList
                        amenitiesItems={amenitiesItems}
                        handleSlideChange={handleSlideChange}
                    />
                </Styled.AmenitiesLeftContainer>
                <Styled.AmenitiesRightContainer id="right-container">
                    <Styled.ImgContainer>
                        <FadeCarousel
                            activeIdx={activeIdx}
                            carouselItems={amenitiesItems}
                        />
                    </Styled.ImgContainer>
                </Styled.AmenitiesRightContainer>
            </Styled.SplitScreen>
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






