import React from 'react';

import {StyledSection} from "../../components/styles/SectionContainer.styled";
import {FullPageMin} from "../../components/styles/PageContainer.styled";
import {
    LocationContainer,
    LocationContent,
    LocationParagraph,
    LocationParagraphWrapper,
    LocationTitle
} from "./Location.styled";
import {HeadingOne, HeadingThree} from "../../components/styles/Typography.styled";

import {CarouselComponent} from "./components/Carousel.Component";
import {carouselItems} from "./components/CarouselItems";


function Location(props) {
    return (
        <StyledSection
            ref={props.pageRef.location}
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
                    {/*<LocationCarouselTrue />*/}
                    <CarouselComponent carouselItems={carouselItems}/>
                </LocationContainer>
            </FullPageMin>
        </StyledSection>
    );
}


export default Location;