import React, {forwardRef} from 'react';
import * as CONSTANTS from "../Pages/10-History/History.constants";
import {HistoryVideo} from "../Pages/10-History/HistoryVideo";
import {Page} from "../templates/";
import {PageTitle} from "../molecules";


export const History = forwardRef(function ({id,}, ref) {

    return (
        <Page pageRef={ref} paddingInlineBlock={{block: 90}}>
            <PageTitle $row>
                {CONSTANTS.subHeadingText}
                {CONSTANTS.headingText}
                {CONSTANTS.paragraphText}
            </PageTitle>
            <HistoryVideo/>
        </Page>

    );
});
