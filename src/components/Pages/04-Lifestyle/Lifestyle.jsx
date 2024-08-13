import React, {forwardRef} from 'react';
import {StyledSection} from "../../Core/SectionContainer.styled";
import {InfiniteLooper} from "../../ScrollingCarousel/InfiniteLooper.component";
import {
    LifestyleCarouselContainer,
    LifestyleContainer,
    StyledImg
} from "./Lifestyle.styled";
import * as CONSTANTS from "./Lifestyle.constants";
import {TitleColumn} from "../../Titles/TitleColumn";


export const Lifestyle = forwardRef(function (
    {
        id,
        bgColour,
        minHeight
    },
    ref
) {
    const lifestyleItems = CONSTANTS.LifestyleItems();

    return (
        <StyledSection
            id={id}
            ref={ref}
            minHeight={minHeight}
            bgColour={bgColour}
            justify={"end"}
        >

            <LifestyleContainer id="lifestyle-container">
                <TitleColumn>
                    {CONSTANTS.subHeadingText}
                    {CONSTANTS.headingText}
                    {CONSTANTS.paragraphText}
                </TitleColumn>
                <LifestyleCarouselContainer>
                    <InfiniteLooper>
                        {
                            lifestyleItems.map((slide, i) => {
                                return (
                                    <StyledImg
                                        key={`${i}_inner`}
                                        src={slide.src}
                                        alt={`Carousel ${i}`}/>
                                );
                            })
                        }
                    </InfiniteLooper>
                </LifestyleCarouselContainer>
            </LifestyleContainer>
        </StyledSection>
    );
});