import React, {forwardRef} from 'react';

import {StyledSection} from "../components/styles/SectionContainer.styled";
import {FullPageMin} from "../components/styles/PageContainer.styled";
import {
    LocationContainer,
    LocationContent,
    LocationParagraph,
    LocationParagraphWrapper,
    LocationTitle
} from "../components/styles/Location.styled";
import {HeadingOne, HeadingThree} from "../components/styles/Typography.styled";

import {CarouselComponent} from "./4-location/components/Carousel.Component";
import {locationCarouselItems} from "../util/constants";

export const Location = forwardRef(function({id}, ref) {
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
                    <CarouselComponent carouselItems={locationCarouselItems}/>
                </LocationContainer>
            </FullPageMin>
        </StyledSection>
    );
});
