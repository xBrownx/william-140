import React, {forwardRef, useState} from 'react';

import {StyledSection} from "../components/styles/SectionContainer.styled";
import {FullPageMin} from "../components/styles/PageContainer.styled";
import {
    LocationContainer,
    LocationContent,
    LocationParagraph,
    LocationParagraphWrapper,
    LocationTitle
} from "../components/styles/05-Location.styled";
import {HeadingOne, HeadingThree} from "../components/styles/Typography.styled";

import {CarouselComponent} from "../components/Carousel.Component";
import {LocationItems} from "../assets/05-LocationItems";
import {CarouselMenu} from "../components/CarouselMenu.component";

export const Location = forwardRef(function ({id}, ref) {
    const [activeIdx, setActiveIdx] = useState(0);
    const locationItems = LocationItems();

    const handleSlideChange = (idx) => {
        setActiveIdx(idx);
    }

    return (
        <StyledSection id={id}
                       ref={ref}
                       $secondary
        >
            <FullPageMin>
                <LocationContainer>
                    <LocationContent>
                        <LocationTitle>
                            <HeadingThree>LOCATION</HeadingThree>
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
                    <CarouselComponent activeIdx={activeIdx} carouselItems={locationItems}/>
                    <CarouselMenu
                        carouselItems={locationItems}
                        setActiveIndex={handleSlideChange}
                    />
                </LocationContainer>
            </FullPageMin>
        </StyledSection>
    );
});
