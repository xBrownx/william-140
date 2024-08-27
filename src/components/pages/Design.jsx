import React, { forwardRef } from 'react';
import { design as CONST } from '../../constants'
import { PageTitle } from "../molecules";
import { DesignVideo } from "../organisms";
import { Page } from "../templates";

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
                {CONST.subheadingTxt}
                {CONST.headingTxt}
            </PageTitle>
            <DesignVideo/>
        </Page>

    );
});

