import React, {forwardRef, useState} from 'react';

import {StyledSection} from "../../SectionContainer.styled";
import {FullPageMin} from "../../PageContainer.styled";
import {
    LocationContainer,
    LocationContent,
    LocationParagraph,
    LocationParagraphWrapper,
    LocationTitle
} from "./05-Location.styled";
import {HeadingOne, HeadingThree} from "../../Typography.styled";

import {CarouselComponent} from "../../FadeCarousel/Carousel.Component";
import {LocationItems} from "./05-LocationItems";
import {CarouselMenu} from "../../FadeCarousel/CarouselMenu.component";

export const Location = forwardRef(function ({id}, ref) {
    const [activeIdx, setActiveIdx] = useState(0);
    const locationItems = LocationItems();

    const handleSlideChange = (idx) => {
        setActiveIdx(idx);
    }

    return (
        <StyledSection
            id={id}
            ref={ref}
            $secondary
        >
            <FullPageMin>
                <LocationContainer>
                    <LocationContent>
                        <LocationTitle>
                            <HeadingThree>
                                LOCATION
                            </HeadingThree>
                            <HeadingOne $secondary>
                                Located in the heart <br/>
                                of the city
                            </HeadingOne>
                        </LocationTitle>
                        <LocationParagraphWrapper>
                            <LocationParagraph>
                                Ideally located in the heart of Melbourne CBD,<br/>
                                enjoying a prime position on the corner of Bourke<br/>
                                Street and William Street.
                            </LocationParagraph>
                        </LocationParagraphWrapper>
                    </LocationContent>
                    <CarouselComponent
                        activeIdx={activeIdx}
                        carouselItems={locationItems}/>
                    <CarouselMenu
                        carouselItems={locationItems}
                        setActiveIndex={handleSlideChange}
                    />
                </LocationContainer>
            </FullPageMin>
        </StyledSection>
    );
});
