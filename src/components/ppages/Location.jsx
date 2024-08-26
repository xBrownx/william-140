import React, {forwardRef, useState} from 'react';
import {Container} from "../Pages/05-Location/Location.styled";
import * as CONSTANTS from '../Pages/05-Location/Location.constants'
import {Page} from "../templates";
import {PageTitle} from "../molecules";
import { LocationCarousel } from "../organisms";

export const Location = forwardRef(function ({id}, ref) {
    return (
        <Page
            pageRef={ref}
            $yEnd
        >
            <Container>
                <PageTitle
                    $row
                    $displayEnd
                    paddingInlineBlock={{inline: 160}}>
                    {CONSTANTS.subHeadingText}
                    {CONSTANTS.headingText}
                    {CONSTANTS.paragraphText}
                </PageTitle>
                <LocationCarousel />
            </Container>
        </Page>
    );
});
