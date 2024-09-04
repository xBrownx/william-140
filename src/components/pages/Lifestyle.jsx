import React, { forwardRef } from 'react';
import { lifestyle as CONST} from "../../constants";
import { Column, PageTitle, ScrollingCarousel } from "../molecules";
import { LifestyleImages } from "../organisms";
import { Page } from "../templates";


const Lifestyle = forwardRef(function ({id}, ref) {

    return (
        <Page $fullScreen $endY>
            <Column gap={32} paddingInlineBlock={{block: 192}}>
                <PageTitle
                    $column
                    paddingInlineBlock={{inline: 160}}
                >
                    {CONST.subheadingTxt}
                    {CONST.headingTxt}
                    {CONST.paragraphTxt}
                </PageTitle>
                <ScrollingCarousel>
                    <LifestyleImages/>
                </ScrollingCarousel>
            </Column>
        </Page>
    );
});

export default Lifestyle;