import React, {forwardRef, useState} from 'react';

import {FadeCarousel} from "../organisms/FadeCarousel/FadeCarousel";
import {amenities as CONSTANTS} from "../constants/Amenities";

import * as Styled from "../Pages/07-Amenities/Amenities.styled";

import {AmenitiesList} from '../organisms';
import {StyledHeading, StyledSubheading} from "../Styled";
import {Page} from "../templates/page";
import {PageTitle, SplitScreen} from "../molecules";


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
        <Page
            $fullScreen
            $bgSecondary
        >
            <SplitScreen $padding>
                <Styled.AmenitiesLeftContainer id="left-container">
                    <PageTitle $secondary>
                        {CONSTANTS.subheadingTxt}
                        {CONSTANTS.headingTxt}
                    </PageTitle>
                    <AmenitiesList items={amenitiesItems}/>
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
            </SplitScreen>
        </Page>

    );
});





