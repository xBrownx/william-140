import React, {forwardRef} from 'react';
import {StyledSection} from "../../Core/SectionContainer.styled";
import {FullPageContainer} from "../../Core/PageContainer.styled";
import {InfiniteLooper} from "../../ScrollingCarousel/InfiniteLooper.component";
import {HeadingOne, HeadingThree} from "../../Core/Typography.styled";
import {
    LifestyleCarouselContainer,
    LifestyleContainer,
    LifestyleContentWrapper,
    LifestyleParagraph,
    LifestyleParagraphWrapper,
    StyledImg
} from "./Lifestyle.styled";
import * as CONSTANTS from "./Lifestyle.constants";
import {TitleColumn} from "../../Titles/TitleColumn";


export const Lifestyle = forwardRef(function (
    {
        id,
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
        >
            <FullPageContainer>
                <LifestyleContainer>
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
            </FullPageContainer>
        </StyledSection>
    );
});