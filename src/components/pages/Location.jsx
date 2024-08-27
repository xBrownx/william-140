import React, { forwardRef } from 'react';
import { location as CONST } from '../../constants'
import { Column, PageTitle } from "../molecules";
import { LocationCarousel } from "../organisms";
import { Page } from "../templates";

export const Location = forwardRef(function ({id}, ref) {
    return (
        <Page
            pageRef={ref}
            $yEnd
        >
            <Column gap={32}>
                <PageTitle
                    $row
                    $displayEnd
                    paddingInlineBlock={{inline: 160}}>
                    {CONST.subheadingTxt}
                    {CONST.headingTxt}
                    {CONST.paragraphTxt}
                </PageTitle>
                <LocationCarousel/>
            </Column>
        </Page>
    );
});
