import React, {forwardRef, useState} from 'react';
import { amenities as CONST} from '../../constants'
import {Column, Container, FadeCarousel, PageTitle, SplitScreen} from "../molecules";
import {AmenitiesList} from '../organisms';
import {Page} from "../templates/";

export const Amenities = forwardRef(function ({id,}, ref) {
    const assets = CONST.assets.carousel;
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

                <Column>
                    <PageTitle $secondary>
                        {CONST.subheadingTxt}
                        {CONST.headingTxt}
                    </PageTitle>
                    <AmenitiesList onHover={handleSlideChange}/>
                </Column>
                <Container padding={{left: 16}}>
                    <FadeCarousel
                        activeIdx={activeIdx}
                        carouselItems={assets}
                    />
                </Container>

            </SplitScreen>
        </Page>

    );
});





