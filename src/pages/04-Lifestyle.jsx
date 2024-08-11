import React, {forwardRef} from 'react';
import {StyledSection} from "../components/styles/SectionContainer.styled";
import {FullPageContainer} from "../components/styles/PageContainer.styled";
import {CarouselComponent} from "./3-carousel/components/Carousel.component";
import {HeadingOne, HeadingThree, ParagraphOne} from "../components/styles/Typography.styled";
import {
    LifestyleContainer,
    LifestyleContentWrapper,
    LifestyleParagraph,
    LifestyleParagraphWrapper
} from "../components/styles/Lifestyle.styled";

export const Lifestyle = forwardRef(function({id}, ref) {

    return (
        <StyledSection id={id} ref={ref}>
            <FullPageContainer>
                <LifestyleContainer>
                    <LifestyleContentWrapper>
                        <HeadingThree>LIFESTYLE</HeadingThree>
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
                    <CarouselComponent/>
                </LifestyleContainer>
            </FullPageContainer>
        </StyledSection>
    );
});