import React, {forwardRef} from 'react';
import * as CONSTANTS from '../Pages/06-Design/Design.constants'
import {Page} from "../templates/page";
import {PageTitle} from "../molecules";
import {DesignVideo} from "../organisms";

export const Design = forwardRef(function ({id,}, ref) {
    return (
        <Page
            pageRef={ref}
            $fullScreen
            $bgSecondary
        >
            <PageTitle
                $secondary
                paddingInlineBlock={{inline: 160}}
            >
                {CONSTANTS.subHeadingText}
                {CONSTANTS.headingText}
            </PageTitle>
            <DesignVideo/>
        </Page>

    );
});

