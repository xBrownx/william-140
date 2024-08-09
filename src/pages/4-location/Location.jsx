import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';

import {PageSection} from "../../components/styles/SectionContainer.styled";
import {FullPageMin} from "../../components/styles/PageContainer.styled";
import {
    LocationContainer,
    LocationContent,
    LocationParagraph,
    LocationParagraphWrapper,
    LocationTitle
} from "./Location.styled";
import {HeadingOne, HeadingThree} from "../../components/styles/Typography.styled";

import CustomSwiper from "../../components/ui/CustomSwiper";
import {LocationCarousel} from "./components/LocationCarousel";
import {LocationCarouselTrue} from "./components/4-Location.ui";



function Location(props) {
    return (
        <PageSection
            ref={props.pageRef.location}
            $secondary
        >
            <FullPageMin>
                <LocationContainer id={"location-container"}>
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
                    <LocationCarousel />
                </LocationContainer>
            </FullPageMin>
        </PageSection>
    );
}


export default Location;