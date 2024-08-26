import React, {forwardRef, useState} from 'react';
import {FadeCarousel} from "../organisms/FadeCarousel/FadeCarousel";
import { amenities } from '../constants'
import * as Styled from "../Pages/07-Amenities/Amenities.styled";
import {AmenitiesList} from '../organisms';
import {Page} from "../templates/page";
import {PageTitle, SplitScreen} from "../molecules";


export const Amenities = forwardRef(function ({id,}, ref) {
    const assets = amenities.assets.carousel;
    const [activeIdx, setActiveIdx] = useState(7);

    const handleSlideChange = (idx) => {
        setActiveIdx(idx);
    }

    return (
        <Page
            pageRef={ref}
            $fullScreen
            $bgSecondary
        >
            <SplitScreen $padding>
                <Styled.AmenitiesLeftContainer id="left-container">
                    <PageTitle $secondary>
                        {amenities.subheadingTxt}
                        {amenities.headingTxt}
                    </PageTitle>
                    <AmenitiesList onHover={handleSlideChange}/>
                </Styled.AmenitiesLeftContainer>
                <Styled.AmenitiesRightContainer id="right-container">
                    <Styled.ImgContainer>
                        <FadeCarousel
                            activeIdx={activeIdx}
                            carouselItems={assets}
                        />
                    </Styled.ImgContainer>
                </Styled.AmenitiesRightContainer>
            </SplitScreen>
        </Page>

    );
});





