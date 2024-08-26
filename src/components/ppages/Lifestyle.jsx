import React, {forwardRef} from 'react';
import { ScrollingCarousel } from "../organisms/ScrollingCarousel";
import * as Styled from "../Pages/04-Lifestyle/Lifestyle.styled";
import * as CONSTANTS from "../Pages/04-Lifestyle/Lifestyle.constants";
import { PageTitle } from "../molecules";
import { Page } from "../templates/page";
import {LifestyleImages} from "../organisms/lifestyleImages";
import {lifestyle} from "../constants";

export const Lifestyle = forwardRef(function ({id}, ref) {

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
                <ScrollingCarousel />
            </Styled.LifestyleContainer>
        </Page>
)
    ;
});