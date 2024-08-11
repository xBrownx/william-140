import React, {forwardRef} from 'react';
import {StyledSection} from "../../SectionContainer.styled";
import {FullPageContainer} from "../../PageContainer.styled";
import {InfiniteLooper} from "../../ScrollingCarousel/InfiniteLooper.component";
import {HeadingOne, HeadingThree} from "../../Typography.styled";
import {
    LifestyleContainer,
    LifestyleContentWrapper,
    LifestyleParagraph,
    LifestyleParagraphWrapper,
    StyledImg
} from "./Lifestyle.styled";
import * as CONSTANTS from "./Lifestyle.constants";



export const Lifestyle = forwardRef(function ({id}, ref) {
    const lifestyleItems = CONSTANTS.LifestyleItems();

    return (
        <StyledSection
            id={id}
            ref={ref}
        >
            <FullPageContainer>
                <LifestyleContainer>
                    <LifestyleContentWrapper>
                        <HeadingThree>
                            {CONSTANTS.SubHeading}
                        </HeadingThree>
                        <HeadingOne $secondary>
                            {CONSTANTS.Heading}
                        </HeadingOne>
                        <LifestyleParagraphWrapper>
                            <LifestyleParagraph>
                                {CONSTANTS.Paragraph}
                            </LifestyleParagraph>
                        </LifestyleParagraphWrapper>
                    </LifestyleContentWrapper>
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
                </LifestyleContainer>
            </FullPageContainer>
        </StyledSection>
    );
});