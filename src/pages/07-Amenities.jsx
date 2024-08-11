import React, {forwardRef} from 'react';

import {StyledSection} from "../components/styles/SectionContainer.styled";
import {AmenitiesItems} from "../assets/07-AmenitiesItems";
import {FullPageMin, Padding} from "../components/styles/PageContainer.styled";
import {SplitScreenContainer} from "../components/SplitScreenContainer";
import {HeadingOne, HeadingThree} from "../components/styles/Typography.styled";
import {CarouselComponent} from "../components/Carousel.Component";

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
