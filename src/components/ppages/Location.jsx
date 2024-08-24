import React, {forwardRef, useState} from 'react';

import {CarouselContainer, Container} from "../Pages/05-Location/Location.styled";
import {FadeCarousel} from "../organisms/FadeCarousel/FadeCarousel";
import {CarouselMenu} from "../organisms/FadeCarousel/CarouselMenu";
import * as CONSTANTS from '../Pages/05-Location/Location.constants'

import {Page} from "../templates/page";
import {PageTitle} from "../molecules";

export const Location = forwardRef(function ({id}, ref) {
    const locationItems = CONSTANTS.LocationItems();
    const [activeIdx, setActiveIdx] = useState(0);

    const handleSlideChange = (idx) => {
        setActiveIdx(idx);
    }

    return (
        <Page $yEnd>
            <Container>
                <PageTitle
                    $row
                    $displayEnd
                    paddingInlineBlock={{inline: 160}}>
                    {CONSTANTS.subHeadingText}
                    {CONSTANTS.headingText}
                    {CONSTANTS.paragraphText}
                </PageTitle>
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
        </Page>
    );
});
