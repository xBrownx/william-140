import React, {forwardRef} from 'react';
import * as CONSTANTS from "../Pages/10-History/History.constants";
import {HistoryVideo} from "../Pages/10-History/HistoryVideo";
import {TitleRow} from "../PageTitles";
import {Page} from "../templates/page";


export const History = forwardRef(function ({id,}, ref) {

    return (
        <Page pageRef={ref} paddingInlineBlock={{block: 90}}>
            <TitleRow>
                {CONSTANTS.subHeadingText}
                {CONSTANTS.headingText}
                {CONSTANTS.paragraphText}
            </TitleRow>
            <HistoryVideo/>
        </Page>

    );
});
