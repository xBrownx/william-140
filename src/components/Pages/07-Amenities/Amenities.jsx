import React, {forwardRef, useState} from 'react';
import {StyledSection} from "../../Styled/SectionContainer.styled";
import {FadeCarousel} from "../../organisms/FadeCarousel/FadeCarousel";
import { amenities as CONSTANTS } from "../../constants/Amenities";


import * as Styled from "./Amenities.styled";
// import {AmenitiesList} from "./AmenitiesList";
import { AmenitiesList } from '../../organisms';
import {StyledHeading, StyledSubheading} from "../../Styled";


export const Amenities = forwardRef(function (
    {
        id,
        bgColour,
        minHeight
    },
    ref
) {
    const amenitiesItems = CONSTANTS.menuItems;
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
                    <StyledSubheading>
                        {CONSTANTS.subheadingTxt}
                    </StyledSubheading>
                    <StyledHeading $secondary>
                        {CONSTANTS.headingTxt}
                    </StyledHeading>
                    <AmenitiesList items={amenitiesItems} />
                    {/*<AmenitiesList*/}
                    {/*    amenitiesItems={amenitiesItems}*/}
                    {/*    handleSlideChange={handleSlideChange}*/}
                    {/*/>*/}
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





