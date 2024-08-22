import React, {forwardRef} from 'react';
import {StyledSection} from "../../Styled/SectionContainer.styled";
import {InfiniteLooper} from "../../organisms/ScrollingCarousel/InfiniteLooper.component";
import * as Styled from "./Lifestyle.styled";
import * as CONSTANTS from "./Lifestyle.constants";
import {ColumnTitle} from "../../PageTitles";
import {PageTitle} from "../../molecules/pageTitle";


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

            <Styled.LifestyleContainer id="lifestyle-container">
                <PageTitle $column>
                    {CONSTANTS.subHeadingText}
                    {CONSTANTS.headingText}
                    {CONSTANTS.paragraphText}
                </PageTitle>
                <Styled.LifestyleCarouselContainer>
                    <InfiniteLooper>
                        {
                            lifestyleItems.map((slide, i) => {
                                return (
                                    <Styled.StyledImg
                                        key={`${i}_inner`}
                                        src={slide.src}
                                        alt={`Carousel ${i}`}/>
                                );
                            })
                        }
                    </InfiniteLooper>
                </Styled.LifestyleCarouselContainer>
            </Styled.LifestyleContainer>
        </StyledSection>
    );
});