import React, {forwardRef} from 'react';
import {StyledSection} from "../Styled/SectionContainer.styled";
import {InfiniteLooper} from "../organisms/ScrollingCarousel/InfiniteLooper.component";
import * as Styled from "../Pages/04-Lifestyle/Lifestyle.styled";
import * as CONSTANTS from "../Pages/04-Lifestyle/Lifestyle.constants";
import { PageTitle } from "../molecules";
import { Page } from "../templates/page";


export const Lifestyle = forwardRef(function ({id}, ref) {
    const lifestyleItems = CONSTANTS.LifestyleItems();

    return (
        <Page $fullScreen $endY>
            <Styled.LifestyleContainer id="lifestyle-container">
                <PageTitle
                    $column
                    paddingInlineBlock={{inline: 160}}
                >
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
        </Page>
)
    ;
});