import React, {forwardRef} from 'react';
import {StyledSection} from "../components/styles/SectionContainer.styled";
import {FullPageContainer} from "../components/styles/PageContainer.styled";
import {InfiniteLooper} from "../components/InfiniteLooper.component";
import {HeadingOne, HeadingThree} from "../components/styles/Typography.styled";
import {
    LifestyleContainer,
    LifestyleContentWrapper,
    LifestyleParagraph,
    LifestyleParagraphWrapper,
    StyledImg
} from "../components/styles/04-Lifestyle.styled";
import {LifestyleItems} from "../assets/04-LifestyleItems";


export const Lifestyle = forwardRef(function ({id}, ref) {
    const lifestyleItems = LifestyleItems();

    return (
        <StyledSection
            id={id}
            ref={ref}
        >
            <FullPageContainer>
                <LifestyleContainer>
                    <LifestyleContentWrapper>
                        <HeadingThree>
                            LIFESTYLE
                        </HeadingThree>
                        <HeadingOne $secondary>
                            Everyday is an<br/>
                            experience
                        </HeadingOne>
                        <LifestyleParagraphWrapper>
                            <LifestyleParagraph>
                                Everyday is an experience that captures the essence of Melbourne’s vibrant<br/>
                                lifestyle, offering a perfect blend of convenience, culture, and connectivity.
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