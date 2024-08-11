import React, {forwardRef} from 'react';

import {StyledSection} from "../../SectionContainer.styled";
import {AmenitiesItems} from "./07-AmenitiesItems";
import {FullPageMin, Padding} from "../../PageContainer.styled";
import {SplitScreenContainer} from "../../SplitScreenContainer";
import {HeadingOne, HeadingThree} from "../../Typography.styled";
import {CarouselComponent} from "../../FadeCarousel/Carousel.Component";

export const Amenities = forwardRef(function ({id}, ref) {

    const amenitiesItems = AmenitiesItems();

    return (
        <StyledSection
            id={id}
            ref={ref}
            bgColour={'#162425'}
        >
            <FullPageMin>
                <Padding>
                    <SplitScreenContainer>
                        <AmenitiesList amenitiesItems={amenitiesItems}/>
                        <CarouselComponent carouselItems={amenitiesItems}/>
                    </SplitScreenContainer>
                </Padding>
            </FullPageMin>
        </StyledSection>

    );
});

const AmenitiesList = ({}) => {
    return (
        <>
            <HeadingThree>AMENITIES</HeadingThree>
            <HeadingOne>
                Elite Services<br/>
                and Amenities
            </HeadingOne>
        </>
    );
}


const ListItem = (props) => {
    return (
        <li>
            <div className="list-item-container" onMouseEnter={props.onMouseEnter}>
                <props.Icon/>
                <h3>{props.heading}</h3>
            </div>
        </li>
    );
}
